const form = document.querySelector('form')
const url = 'http://localhost:3000/auth/login'

async function apiConnect(email, password){

    const data = {
        email,
        password
    }


    const resp = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        credentials: 'include'
        });


    const result = await resp.json()

    if(resp.status == 200 || resp.status == 201){
        document.querySelector('.err').innerHTML = ``
        console.log(result)
        //document.location = '../index.html'
    }else{
        document.querySelector('.err').innerHTML = `<p>${result.error}</p>`
        let formHeight = document.querySelector("form").offsetHeight;
        let main = document.querySelector("main");

        main.style.minHeight = (formHeight + 40) + "px";

    }
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    apiConnect(email, password)
})