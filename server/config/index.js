const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const MongoStore = require("connect-mongo");
const passport = require("passport");
const session = require("express-session");
const User = require("../models/User.model");

// Middleware configuration
module.exports = (app) => {
  // Because this is a server that will accept requests from outside and it will be hosted ona server with a `proxy`, express needs to know that it should trust that setting.
  // Services like heroku use something called a proxy and you need to add this to your server
  app.set("trust proxy", 1);

  app.use(
    session({
      saveUninitialized: false,
      resave: true,
      secret: "secret",
      // https://github.com/jdesboeufs/connect-mongo/blob/HEAD/MIGRATION_V4.md
      store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI || "mongodb://localhost/agora",
      }),
      cookie: {
        secure: process.env.NODE_ENV === "develop" ? false : true,
        maxAge:
          process.env.NODE_ENV === "develop" ? null : 30 * 24 * 60 * 60 * 1000,
        sameSite: "strict", // prevent csrf attack @see https://auth0.com/blog/cross-site-request-forgery-csrf/
      },
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((userData, done) => done(null, userData._id));

  passport.deserializeUser((userId, done) => {
    User.findById(userId)
      .then((data) => done(null, data))
      .catch((err) => done(err));
  });

  // controls a very specific header to pass headers from the frontend
  app.use(
    cors({
      credentials: true,
      origin: ["http://localhost:3000", process.env.URL_FRONT],
    })
  );

  // In development environment the app logs
  app.use(logger("dev"));
  // To have access to `body` property in the request
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
};
