import { API_LINK } from "./link";

console.log(document.cookie); // Mostra todos os cookies acessíveis pelo JS
const url = API_LINK+'stock'

async function fetchStock() {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include' // Certifique-se de incluir cookies
        });

    
        const stockData = await response.json();
        console.log(stockData)
    } catch (error) {
        console.log(error);
    }
}

fetchStock();