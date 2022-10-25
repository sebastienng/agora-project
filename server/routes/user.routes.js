const router = require("express").Router();
const Joi = require("joi");
const authMiddleware = require("../middleware/auth.middleware");
const User = require("../models/User.model");

const userSchemaValidation = Joi.object({
  job: Joi.object({
    category: Joi.string(),
    title: Joi.string(),
    skills: Joi.array().items(Joi.string()),
    experience: Joi.string(),
  }),
  language: Joi.array().items(Joi.string()),
  description: Joi.string(),
  location: Joi.string(),
});

router.get("/:userId", async (req, res, next) => {
  const user = await User.findById(req.params.userId).lean();

  return res.json(user);
});

router.put("/:userId", async (req, res, next) => {
  const exist = await User.findById(req.params.userId).lean();

  if (!exist) {
    return res.status(400).json({ errorMessage: "User not found" });
  }

  try {
    await userSchemaValidation.validateAsync(req.body, { abortEarly: false });
  } catch (error) {
    return res.status(400).json({
      errorMessage: "Invalid form submission.",
      details: error.details,
    });
  }

  const user = await User.findByIdAndUpdate(req.params.userId, req.body);

  return res.json(user);
});

module.exports = router;
