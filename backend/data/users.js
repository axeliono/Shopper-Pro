import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin Green",
    email: "admin@test.com",
    password: bcrypt.hashSync("password", 10),
    isAdmin: true,
  },
  {
    name: "Chandler Green",
    email: "chandler@test.com",
    password: bcrypt.hashSync("password", 10),
  },
  {
    name: "Axel Green ",
    email: "axel@test.com",
    password: bcrypt.hashSync("password", 10),
  },
];

export default users;
