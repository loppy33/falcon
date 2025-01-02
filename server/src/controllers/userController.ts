import { Request, Response, NextFunction } from 'express';
import ApiError from '../error/ApiError';
import User from '../models/User';


class UserController {
    async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        const { walletAdress, ref } = req.body;
        console.log(req.body);

        try {
            const existingUser = await User.findOne({ where: { walletAdress } });
            if (existingUser) {
                res.json(existingUser);
                return

            }
            const randomNumber = Math.floor(1000 + Math.random() * 9000);
            const username = `user${randomNumber}`;

            let referrerId: number | null = null;

            // Проверяем, существует ли пользователь с указанным реферальным кодом
            if (ref) {
                const referrer = await User.findOne({ where: { username: ref } });

                if (referrer) {
                    referrerId = referrer.id;
                }
            }

            // Создаем нового пользователя
            const newUser = await User.create({
                walletAdress: walletAdress,
                username: username,
                referrer: referrerId, // Сохраняем ID реферера, если он есть
            });

            res.json(newUser);
            return

        } catch (e: unknown) {
            if (e instanceof Error) {
                return next(ApiError.badRequest(e.message)); // Используем return
            } else {
                return next(ApiError.internal('Unknown error occurred')); // Используем return
            }

        }
    }

    async getReferrals(req: Request, res: Response, next: NextFunction): Promise<void> {
        const { id } = req.params;

        try {
            const referrals = await User.findAll({ where: { referrer: id } });
            res.json(referrals);
            return
        } catch (e: unknown) {
            if (e instanceof Error) {
                next(ApiError.badRequest(e.message));
                return 
            } else {
                next(ApiError.internal('Unknown error occurred'));
                return 
            }
        }
    }

    async updateProfile(req: Request, res: Response, next: NextFunction): Promise<void> {
        const { id } = req.params;
        const {
            username,
            firstName,
            lastName,
            email,
            dob,
            photo,
            EVMwalletAdress,
            SOLwalletAdress,
            TORwalletAdress
        } = req.body;

        try {
            // Ищем пользователя по ID
            const user = await User.findByPk(id);
            if (!user) {
                next(ApiError.badRequest('User not found'));
            }

            // Проверяем, не занят ли новый username другим пользователем
            if (username) {
                const existingUser = await User.findOne({ where: { username } });
                if (existingUser && existingUser.id !== user?.id) {
                    return next(ApiError.badRequest('Username is already taken'));
                }
                if (user) {
                    user.username = username;
                }
            }

            // Обновляем информацию, если поля были переданы
            if (user) {
                if (firstName) user.firstName = firstName;
                if (lastName) user.lastName = lastName;
                if (email) user.email = email;
                if (dob) user.dob = dob;
                if (photo) user.EVMwalletAdress = EVMwalletAdress;
                if (photo) user.SOLwalletAdress = SOLwalletAdress;
                if (photo) user.TORwalletAdress = TORwalletAdress;
    
                // Сохраняем изменения
                await user.save();
            }

           res.json(user);
           return 

        } catch (e: unknown) {
            if (e instanceof Error) {
                return next(ApiError.badRequest(e.message));
            } else {
                return next(ApiError.internal('Unknown error occurred'));
            }
        }
    }

    // Пример запроса для редактирования профиля с обновлением username:
    // http
    // Копировать код
    // PUT /user/:id
    // Content-Type: application/json

    // {
    // "username": "newUsername123",
    // "firstName": "John",
    // "lastName": "Doe",
    // "email": "john.doe@example.com",
    // "dob": "1990-01-01",
    // "photo": "new-photo-url"
    // }

}

export default new UserController();
