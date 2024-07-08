const route = require("express").Router();
const {
  getAllUsers,
  createUser,
  deleteUser,
  updateUser,
} = require("../controllers/userController");
const { middleware, admin } = require("../middleware");

route.get("/getAllUsers", middleware, getAllUsers);
route.post("/createUser", createUser);
route.delete("/deleteUser", middleware, deleteUser);
route.put("/updateUser", admin, updateUser);

module.exports = route;
