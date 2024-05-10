import express from 'express'
import { addUsers, deleteUsers, getUsers, updateUsers, verifyLoginProfessor } from '../controllers/userControllers.js';


const router = express.Router();

router.get("/", getUsers);
router.post("/", addUsers)
router.put("/", updateUsers)
router.delete("/", deleteUsers)

// ROTA DE AUTENTICAÇÃO
router.post("/auth", verifyLoginProfessor)

export default router