import express from 'express';
import UserController from '../controllers/userController';

const router = express.Router(); 

router.post('/', UserController.create); // Используем метод через экземпляр класса
router.put('/:id', UserController.updateProfile); // Используем метод через экземпляр класса
router.get('/:id/referrals', UserController.getReferrals);

export default router;