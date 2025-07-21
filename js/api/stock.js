console.log(document.cookie); // Mostra todos os cookies acessíveis pelo JS
const url = 'http://localhost:3000/stock'

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