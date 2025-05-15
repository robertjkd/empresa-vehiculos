const express = require("express");
const router = express.Router();
const { authenticate, authorize } = require("../middleware/auth");
const {
  deleteUser,
  createWorker,
  listUsers,
} = require("../controllers/userController");

// RF-3, RF-5, RF-6, RF-7, RF-8
router.delete(
  "/users/:id",
  authenticate,
  authorize("administrador"),
  deleteUser
);
router.post("/workers", authenticate, authorize("administrador"), createWorker);
router.get("/users", authenticate, authorize("administrador"), listUsers);

module.exports = router;
