import express from 'express';
import pingController from '../controllers/pingController';

const router = express.Router(); 

router.get('/', pingController.getResponse); // Используем метод через экземпляр класса

export default router;