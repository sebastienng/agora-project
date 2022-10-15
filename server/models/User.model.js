const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    firstname: String,
    lastname: String,
    password: String,
    email: String,
    jobs: {
      category: String,
      title: String,
      skills: [String],
      experience: String,
    },
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
