import { API_LINK } from "./link";

const url = API_LINK+'auth/logout'

async function logout() {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include' // Certifique-se de incluir cookies
        });
        console.log('Logout realizado com sucesso');
    } catch (error) {
        console.error('Erro:', error);
    }
}