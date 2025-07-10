import express from "express";
import {
  createUserController,
  getUsersController,
  getUserByIdController,
  updateUserByIdController,
  softDeleteUserByIdController,
} from "../user/user.controller.js";

const router = express.Router();

router.post("/", createUserController);
router.get("/", getUsersController);
router.get("/:id", getUserByIdController);
router.put("/:id", updateUserByIdController);
router.delete("/:id", softDeleteUserByIdController);

export default router;
