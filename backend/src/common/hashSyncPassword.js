import bcrypt from "bcryptjs";
//import asyncHandler from "express-async-handler";

// export const hashSyncPassword = asyncHandler(async (password) => {
//   const salt = await bcrypt.genSalt(10);
//   return await bcrypt.hash(password, salt);
// });

export const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

//hola
