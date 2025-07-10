import Address from "../models/address.model.js";

const createAddress = (data) => Address.create(data);
const getAddresses = () => Address.find();
const getAddressById = (id) => Address.findById(id);
const updateAddressById = (id, data) =>
  Address.findByIdAndUpdate(id, data, { new: true });
const deleteAddressById = (id) => Address.findByIdAndDelete(id);

export {
  createAddress,
  getAddresses,
  getAddressById,
  updateAddressById,
  deleteAddressById,
};
