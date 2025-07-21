import { getUser } from './api/getUser.js';

let formHeight = document.querySelector("form").offsetHeight;
let main = document.querySelector("main");

main.style.minHeight = (formHeight + 40) + "px";

async function verifyLogin(){
    const user = await getUser();
    if(user){
        document.querySelector(".auth").innerHTML = ``
    }
}
