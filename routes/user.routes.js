import express from "express";
import { getUsers } from "../controllers/user.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { allowRoles } from "../middleware/role.middleware.js";

const router = express.Router();
router.get("/", authMiddleware, allowRoles("admin"), getUsers);
export default router;
