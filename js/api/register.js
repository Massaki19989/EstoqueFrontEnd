import { API_LINK } from "./link.js"

const form = document.querySelector('form')
const url = API_LINK+'auth/register'
const errors = document.querySelectorAll('.error')
async function reqApi(name, email, cpf, password) {
    const data = {
        name,
        email,
        cpf,
        password
    }

    const resp = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    const result = await resp.json()

    if(resp.status == 200 || resp.status == 201){
        document.querySelector('.err').innerHTML = ``
        document.location = 'login.html'
    }else{
        for(let i = 0; i < errors.length; i++){
            errors[i].innerHTML = ``
        }

        if(result.details){
            result.details.map((item) => {
                if(item.field == 'name'){
                    document.querySelector('.err-name').innerHTML = `<p>${item.message}</p>`
                }else if(item.field == 'email'){
                    document.querySelector('.err-email').innerHTML = `<p>${item.message}</p>`
                }else if(item.field == 'cpf'){
                    document.querySelector('.err-cpf').innerHTML = `<p>${item.message}</p>`
                }else if(item.field == 'password'){
                    document.querySelector('.err-password').innerHTML = `<p>${item.message}</p>`
                }
            })
        }

        document.querySelector('.err').innerHTML = `<p>${result.error}</p>`

        let formHeight = document.querySelector("form").offsetHeight;
        let main = document.querySelector("main");

        main.style.minHeight = (formHeight + 40) + "px";

    }
}

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const name = document.getElementById('name').value
    const cpf = document.getElementById('cpf').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    reqApi(name, email, cpf, password)
})