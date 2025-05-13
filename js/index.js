const userContainer = document.querySelector('.user-container');
const user = document.querySelector('.user');

/*
window.addEventListener('click', (e)=>{
    userContainer.classList.remove('hidden');
})
*/
userContainer.addEventListener('click', (e)=>{
    e.stopPropagation();
    userContainer.classList.add('hidden');
})

user.addEventListener('click', (e)=>{
    e.stopPropagation();
})