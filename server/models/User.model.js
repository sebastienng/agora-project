const { Schema, model } = require("mongoose");

const userJobSchema = new Schema({
  category: String,
  title: String,
  skills: [String],
  experience: String,
});

const userSchema = new Schema(
  {
    firstname: String,
    lastname: String,
    password: String,
    email: String,
    jobs: [userJobSchema],
    language: [String],
    description: String,
    location: String,
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
