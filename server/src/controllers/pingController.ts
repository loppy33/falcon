import { Request, Response, NextFunction } from 'express';
import ApiError from '../error/ApiError';

class PingController {
  async getResponse(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      res.json({ content: 'Pong!' });
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

export default new PingController();
