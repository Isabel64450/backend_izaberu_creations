import User from "../models/user.model.js";

const createUser = async (data) => await User.create(data);
const getUsers = () => User.find().populate("address deliveryAddress");
const getUserById = (id) =>
  User.findById(id).populate("address deliveryAddress");
const updateUserById = (id, data) =>
  User.findByIdAndUpdate(id, data, { new: true });
const softDeleteUserById = (id) =>
  User.findByIdAndUpdate(
    id,
    { isDeleted: true, deleteDate: new Date() },
    { new: true }
  );

export {
  createUser,
  getUsers,
  getUserById,
  updateUserById,
  softDeleteUserById,
};
