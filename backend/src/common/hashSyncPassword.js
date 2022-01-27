import bcrypt from "bcryptjs";
//import asyncHandler from "express-async-handler";

// export const hashSyncPassword = asyncHandler(async (password) => {
//   const salt = await bcrypt.genSalt(10);
//   return await bcrypt.hash(password, salt);
// });

const encryptPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

export default encryptPassword;
