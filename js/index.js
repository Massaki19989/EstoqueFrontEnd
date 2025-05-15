const userContainer = document.querySelector('.user-container');
const user = document.querySelector('.user');
const box = document.querySelectorAll('.box')

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