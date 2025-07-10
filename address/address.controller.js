import {
  createAddress,
  getAddresses,
  getAddressById,
  updateAddressById,
  deleteAddressById,
} from "./address.service.js";

const createAddressController = async (req, res) => {
  try {
    const address = await createAddress(req.body);
    res.status(201).json(address);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getAddressesController = async (req, res) => {
  try {
    const addresses = await getAddresses();
    res.status(200).json(addresses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAddressByIdController = async (req, res) => {
  try {
    const address = await getAddressById(req.params.id);
    if (!address) return res.status(404).json({ error: "Adresse non trouvée" });
    res.status(200).json(address);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateAddressByIdController = async (req, res) => {
  try {
    const address = await updateAddressById(req.params.id, req.body);
    res.status(200).json(address);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteAddressByIdController = async (req, res) => {
  try {
    await deleteAddressById(req.params.id);
    res.status(200).json({ message: "Adresse supprimée" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export {
  createAddressController,
  getAddressesController,
  getAddressByIdController,
  updateAddressByIdController,
  deleteAddressByIdController,
};
