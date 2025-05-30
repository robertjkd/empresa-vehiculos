const { User } = require("../models");

// RF-3: Eliminar usuario ()
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.destroy({
      where: {
        id: req.params.id,
        role: "cliente", // Solo elimina clientes (RF-3)
      },
    });

    if (!user) return res.status(404).json({ error: "Usuario no encontrado" });
    res.json({ message: "Usuario eliminado" });
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor" });
  }
};

//  RF-4 (MOdificar Usuario)
exports.updateUser = async (req, res) => {
  try {
    const { fullName, username } = req.body;
    const [updated] = await User.update(
      { fullName, username },
      {
        where: {
          id: req.params.id,
          role: "cliente", // Solo modifica clientes (RF-4)
        },
      }
    );

    if (!updated)
      return res.status(404).json({ error: "Usuario no encontrado" });
    res.json({ message: "Usuario actualizado" });
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
