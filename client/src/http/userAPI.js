import axios from "axios";

const createUser = async (walletAdress, ref) => {
    try {

        const response = await axios.post(`${import.meta.env.VITE_API_URL}/user`, { walletAdress, ref });
        return response; // Возвращаем данные пользователя
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Error creating user:", error.response?.data || error.message);
            throw new Error(error.response?.data?.message || "Failed to create user");
        } else {
            console.error("Unexpected error:", error);
            throw new Error("An unexpected error occurred");
        }
    }
};


const updateUser = async (id, updatedData) => {
    try {
        // Формируем URL с ID пользователя
        const url = `${import.meta.env.VITE_API_URL}/user/${id}`;

        // Отправляем запрос на обновление профиля, передавая объект с данными
        const response = await axios.put(url, updatedData);

        return response.data; // Возвращаем обновленные данные пользователя
    } catch (error) {
        console.error('Error updating user profile:', error);
        throw error;
    }
};

export default { createUser, updateUser };
