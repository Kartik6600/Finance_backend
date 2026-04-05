import express from "express";
import { createRecord, getRecords, updateRecord, deleteRecord } from "../controllers/record.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { allowRoles } from "../middleware/role.middleware.js";

const router = express.Router();

router.post("/", authMiddleware, allowRoles("admin"), createRecord);
router.get("/", authMiddleware, allowRoles("viewer", "analyst", "admin"), getRecords);
router.put("/:id", authMiddleware, allowRoles("admin"), updateRecord);
router.delete("/:id", authMiddleware, allowRoles("admin"), deleteRecord);

export default router;