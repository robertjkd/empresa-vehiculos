const { User } = require("../models");

// RF-3: Eliminar Cliente (Admin)
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.destroy({
      where: { id: req.params.id, role: "cliente" },
    });
    if (!user) return res.status(404).json({ error: "Usuario no encontrado" });
    res.json({ message: "Usuario eliminado" });
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor" });
  }
};

// RF-5: Crear Trabajador (Admin)
exports.createWorker = async (req, res) => {
  try {
    const { fullName, username, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const worker = await User.create({
      fullName,
      username,
      password: hashedPassword,
      role,
    });
    res.status(201).json({ message: "Trabajador creado", userId: worker.id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// RF-8: Listar Usuarios (Admin)
exports.listUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "fullName", "username", "role"],
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor" });
  }
};
