import express from 'express'
import { addUsers, deleteUsers, getUsers, updateUsers, verifyLoginProfessor } from '../controllers/userControllers.js';


const router = express.Router();

router.get("/", getUsers);
router.post("/", addUsers)
router.put("/", updateUsers)
router.delete("/", deleteUsers)

// verificar isso na aula
router.post("/", verifyLoginProfessor)

export default router