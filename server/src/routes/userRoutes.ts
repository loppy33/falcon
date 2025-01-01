import express from 'express';
import userController from '../controllers/userController';

const router = express.Router(); 

router.post('/', userController.create); // Используем метод через экземпляр класса

export default router;