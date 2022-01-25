import asyncHandler from "express-async-handler";
import generateToken from "../common/generateToken.js";
import User from "../models/userModel.js";

// ************* LOGIN *******************

// @desc Auth user & get token
// @route POST /api/users/login
// @access Public
export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// ************* REGISTER *******************
// @desc Register a new uer
// @route POST /api/users
// @access Public
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const useExists = await User.findOne({ email });
  if (useExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const user = await User.create({
    name,
    email,
    password,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});
// @desc Get user profile
// @route GET /api/users/profile
// @access Private

export const getUserProfile = asyncHandler(async (req, res) => {
  const useExists = await User.findById(req.user._id);

  if (useExists) {
    res.json({
      _id: useExists._id,
      name: useExists.name,
      email: useExists.email,
      isAdmin: useExists.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user");
  }
});
