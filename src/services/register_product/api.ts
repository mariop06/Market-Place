import axios from 'axios';

const API_URL = 'http://localhost/marketplace-backend';

export const registerProduct = async (productData: any) => {
    try {
        const response = await axios.post(`${API_URL}/register_product.php`, productData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(response.data);
        return response.data;
    } catch (error:any) {
        console.error("Houve um erro ao registrar o produto!", error);
        if (error.response && error.response.data) {
            return error.response.data;
        }
        return { message: "Erro desconhecido" };
    }
};
