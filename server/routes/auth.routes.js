const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User.model");
const Joi = require("joi");

const generatePassword = async (userPassword) => {
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(userPassword, salt);

  return password;
};

router.post("/signup", async (req, res) => {
  // Check if user already exist
  const exist = await User.findOne({ email: req.body.email });

  if (exist) {
    return res.status(403).json({ errorMessage: "User already exist." });
  }

  try {
    // Validate request body
    await Joi.object({
      firstname: Joi.string().required(),
      lastname: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    }).validateAsync(req.body, { abortEarly: false });
  } catch (error) {
    return res.status(400).json({
      errorMessage: "Invalid form submission.",
      details: error.details,
    });
  }

  // Generate hash password
  const hashedPassword = await generatePassword(req.body.password);

  // Create user
  const user = await (
    await User.create({ ...req.body, password: hashedPassword })
  ).toObject();

  // Provided by passport
  req.logIn(user, () => res.json({ ...user, password: undefined }));
});

router.post("/login", async (req, res, next) => {
  // Validate request body
  try {
    await Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    }).validateAsync(req.body, { abortEarly: false });
  } catch (error) {
    return res.status(400).json({
      errorMessage: "Invalid form submission.",
      details: error.details,
    });
  }

  // Get the user details
  const user = await User.findOne({ email: req.body.email }).lean();

  if (!user) {
    return res.status(404).json({ errorMessage: "User does not exist." });
  }

  // Compare password with user input
  const isPasswordCorrect = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (!isPasswordCorrect) {
    return req
      .status(400)
      .json({ errorMessage: "Wrong credentials provided." });
  }

  // Log user in
  req.logIn(user, () => res.json({ ...user, password: undefined }));
});

router.get("/logout", (req, res) => {
  // provided by passport
  req.logOut(() => {
    // delete session entry from db
    req.session.destroy();
    return res.sendStatus(200);
  });
});

module.exports = router;
