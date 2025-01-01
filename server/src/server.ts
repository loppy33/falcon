import app from "./app";
import http from "http";
import { config } from "dotenv";
import { initDB } from "./models";
// import { connectDB } from "./models";
config(); // Подключение переменных окружения

const PORT: number = parseInt(process.env.PORT || "5000", 10);

const main = async (): Promise<void> => {
    try {
        // Подключение к базе данных
        await initDB();
        
        // Запуск сервера после успешного подключения к БД
        const server = http.createServer(app);
        server.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Error during server startup:", error);
        process.exit(1); // Завершаем процесс с ошибкой, если не удалось подключиться к базе данных
    }
};

main();
