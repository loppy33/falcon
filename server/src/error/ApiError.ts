class ApiError extends Error {
    status: number;
    message: string;

    constructor(status: number, message: string) {
        super(message); // Вызов конструктора родительского класса
        this.status = status;
        this.message = message;
        Object.setPrototypeOf(this, ApiError.prototype); // Это нужно для правильной работы instanceof
    }

    // Статические методы для различных типов ошибок
    static badRequest(message: string): ApiError {
        return new ApiError(400, message); // 400 - это код ошибки для Bad Request
    }

    static internal(message: string): ApiError {
        return new ApiError(500, message); // 500 - код ошибки для Internal Server Error
    }

    static forbidden(message: string): ApiError {
        return new ApiError(403, message); // 403 - код ошибки для Forbidden
    }
}

export default ApiError; // Экспорт класса в формате ES6
