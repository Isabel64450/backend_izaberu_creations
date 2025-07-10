import express from "express"
import { createCategoryController } from "./categories.module/categories.controller.js"
const router = express.Router()
router.post('/',createCategoryController)
export default router