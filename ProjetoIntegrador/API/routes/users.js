import express from 'express'
import { addUsers, deleteUsers, getUsers, updateUsers } from '../controllers/userControllers.js';


const router = express.Router();

router.get("/", getUsers);
router.post("/", addUsers)
router.put("/", updateUsers)
router.delete("/", deleteUsers)

export default router