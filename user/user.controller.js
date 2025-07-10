import {
  createUser,
  getUsers,
  getUserById,
  updateUserById,
  softDeleteUserById,
} from "./user.service.js";

const createUserController = async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getUsersController = async (req, res) => {
  try {
    const users = await getUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUserByIdController = async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    if (!user) return res.status(404).json({ error: "Utilisateur non trouvé" });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateUserByIdController = async (req, res) => {
  try {
    const user = await updateUserById(req.params.id, req.body);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const softDeleteUserByIdController = async (req, res) => {
  try {
    const user = await softDeleteUserById(req.params.id);
    res.status(200).json({ message: "Utilisateur supprimé", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export {
  createUserController,
  getUsersController,
  getUserByIdController,
  updateUserByIdController,
  softDeleteUserByIdController,
};
