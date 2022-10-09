const router = require("express").Router();
const Joi = require("joi");
const authMiddleware = require("../middleware/auth.middleware");
const User = require("../models/User.model");

router.get("/:userId", authMiddleware, async (req, res, next) => {
  const user = await User.findbyId(req.params.userId).lean();

  return res.json(user);
});

router.put("/:userId", authMiddleware, async (req, res, next) => {});

router.put("/:userId/job", authMiddleware, async (req, res, next) => {});

router.put("/:userId/education", authMiddleware, async (req, res, next) => {});

module.exports = router;
