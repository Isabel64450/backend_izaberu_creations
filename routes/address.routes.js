import express from "express";
import {
  createAddressController,
  getAddressesController,
  getAddressByIdController,
  updateAddressByIdController,
  deleteAddressByIdController,
} from "../address/address.controller.js";

const router = express.Router();

router.post("/", createAddressController);
router.get("/", getAddressesController);
router.get("/:id", getAddressByIdController);
router.put("/:id", updateAddressByIdController);
router.delete("/:id", deleteAddressByIdController);

export default router;
