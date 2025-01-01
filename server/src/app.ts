import express, { Application, Request, Response } from "express";
import cors from "cors"; // Логирование запросов
import morgan from "morgan";  // CORS
import errorHandler from "./middlewares/errorHandler";
import routes from "./routes";


// Создание экземпляра приложения
const app: Application = express();

// Middleware
app.use(express.json()); // Парсинг JSON
app.use(express.urlencoded({ extended: true })); // Парсинг URL-кодированных данных
app.use(cors()); // Поддержка CORS
app.use(morgan("dev")); // Логирование запросов

// Обработчик ошибок
app.use(errorHandler); // Обрабатывает ошибки, чтобы избежать краша приложения

// Роуты
app.use("/api", routes);

app.get("/", (req: Request, res: Response) => {
    res.send("API is running...");
});




export default app;