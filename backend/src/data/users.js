import encryptPassword from "../common/hashSyncPassword.js";

const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: encryptPassword("123456"),
    isAdmin: true,
  },
  {
    name: "Jhon Due",
    email: "jhon@gmail.com",
    password: encryptPassword("123456"),
    isAdmin: false,
  },
  {
    name: "Cmf",
    email: "cmf@gmail.com",
    password: encryptPassword("123456"),
    isAdmin: false,
  },
];

export default users;
