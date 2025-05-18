const express = require("express");
const router = express.Router();
const { authenticate, authorize } = require("../middleware/auth");
const {
  deleteUser,
  createWorker,
  listUsers,
} = require("../controllers/userController");

// RF-3: Eliminar cliente (solo admin)
router.delete(
  "/users/:id",
  authenticate,
  authorize("administrador"),
  deleteUser
);

// RF-4: Modificar cliente (admin o propio usuario)
router.put(
  "/users/:id",
  authenticate,
  (req, res, next) => {
    // Permite al admin o al dueño de la cuenta modificar
    if (req.user.role === "administrador" || req.user.id === req.params.id) {
      return next();
    }
    res.status(403).json({ error: "Acceso prohibido" });
  },
  updateUser
);

//  RF-5, RF-6, RF-7, RF-8
router.delete(
  "/users/:id",
  authenticate,
  authorize("administrador"),
  deleteUser
);
router.post("/workers", authenticate, authorize("administrador"), createWorker);
router.get("/users", authenticate, authorize("administrador"), listUsers);

module.exports = router;
