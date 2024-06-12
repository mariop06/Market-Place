import axios from 'axios';

const API_URL = 'http://localhost/marketplace-backend';

export const registerUser = async (userData: any) => {
    try {
        const response = await axios.post(`${API_URL}/register.php`, userData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(response.data); // Adicionar depuração aqui
        return response.data;
    } catch (error:any) {
        console.error("Houve um erro ao registrar o usuário!", error);
        if (error.response && error.response.data) {
            return error.response.data;
        }
        return { message: "Erro desconhecido" };
    }
};
