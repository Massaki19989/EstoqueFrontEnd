import { getUser } from './api/getUser.js';
import { logout } from './api/logout.js';

const userContainer = document.querySelector('.user-container');
const user = document.querySelector('.user');
const box = document.querySelectorAll('.box');

document.querySelector('.profile').addEventListener('click', (e)=>{
    userContainer.classList.remove('hidden');
})

userContainer.addEventListener('click', (e)=>{
    e.stopPropagation();
    userContainer.classList.add('hidden');
})

user.addEventListener('click', (e)=>{
    e.stopPropagation();
})

box.forEach(box=>{
    let link = box.getAttribute('link')
    if(link != null){
        box.addEventListener('click', ()=>{
            document.location = link
        })   
    }
    
})



async function verifyLogin(){
    const user = await getUser();
    if(user.id){
        document.querySelector(".auth").innerHTML = ` <button class="btn btn-success">Perfil</button> `

        document.querySelector(".auth button").addEventListener('click', (e)=>{
            document.querySelector('.user-container').classList.remove('hidden');
        })
        
        return user;
    }
    
}

async function userVerify(){
    const userS = await verifyLogin();
    if(userS){
        document.querySelector('.user-info').innerHTML = `
            <h2>Olá, <span id="user-name">${userS.name}</span></h2>
            <p id="user-email">Email: ${userS.email}<span id="email"></span></p>
            <p id="user-cpf">Cpf: ${userS.cpf}</p>
        `;
        document.querySelector('#logout-button').addEventListener('click', async (e)=>{
            const exit = await logout();
            if(exit){
                document.location.reload();
            }else{
                document.location.reload();
            }
        });
    }
    
} 

userVerify();
