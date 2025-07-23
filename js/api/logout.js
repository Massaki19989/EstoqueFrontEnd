import { API_LINK } from './link.js';

const url = API_LINK+'auth/logout'

export async function logout() {
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
        return;
    }
}