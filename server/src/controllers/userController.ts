import { Request, Response, NextFunction } from 'express';
import ApiError from '../error/ApiError';
import User from '../models/User';


class UserController {
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { walletAdress } = req.body;

    try {

      const randomNumber = Math.floor(1000 + Math.random() * 9000); // Генерирует число от 1000 до 9999
      const username = `User${randomNumber}`;

      // Используем метод create, который автоматически сохраняет в базу данных
      const newUser = await User.create({
        walletAdress: walletAdress,
        username: username,
      });

      res.json(newUser);  // Отправляем результат на клиент

    } catch (e: unknown) { // Типизируем переменную e как unknown
      if (e instanceof Error) {
        next(ApiError.badRequest(e.message)); // Нет необходимости возвращать значение, просто передаем ошибку
      } else {
        // Если ошибка не является экземпляром Error, можно передать общую ошибку
        next(ApiError.internal('Unknown error occurred')); // Передаем ошибку
      }
    }
  }
}

export default new UserController();
