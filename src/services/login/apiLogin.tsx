import axios from 'axios';

const API_URL = 'http://localhost/marketplace-backend';

export const loginUser = async (userData: any) => {
    try {
        const response = await axios.post(`${API_URL}/login.php`, userData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(response.data);
        return response.data;
    } catch (error:any) {
        console.error("Houve um erro ao fazer login!", error);
        if (error.response && error.response.data) {
            return error.response.data;
        }
        return { message: "Erro desconhecido" };
    }
};
