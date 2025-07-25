import { API_LINK } from './link.js';
console.log(document.cookie); // Mostra todos os cookies acessíveis pelo JS
const url = API_LINK+'user'

export async function getUser() {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include' // Certifique-se de incluir cookies
        });

    
        const user = await response.json();
        return user;
    } catch (error) {
        return false;
    }
}