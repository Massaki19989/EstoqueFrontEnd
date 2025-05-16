const menuMobile = document.querySelector('.menu-mobile')
const navComponent = `
    <ul class="nav flex-column">

        <li class="nav-item">
            <a href="../index.html">Home</a>
        </li>

        <li>
            <a href="stock.html">Estoque</a>
        </li>

        <li>
            <a href="add-stock.html">Adicionar Produto</a>
        </li>

        <li class="nav-item">
            <a href="cadastrar-produto.html">Cadastrar Produto</a>
        </li>

        <li class="nav-item">
            <a class="" href="sales.html">Vendas</a>
        </li>

        <li>
            <a href="./registrar-venda.html">Registrar Vendas</a>
        </li>

    </ul>
`

document.querySelector('nav').innerHTML = navComponent

menuMobile.innerHTML = navComponent

const menuMobileUl = menuMobile.querySelector('ul')

document.querySelector('.button-menu-mobile').addEventListener('click', ()=>{
    


    for(let i = 0; i < menuMobile.classList.length; i++){
        if(menuMobile.classList[i] == 'd-block'){
            menuMobile.classList.remove('d-block')
            return
        }
    }

    menuMobile.classList.add('d-block')


})

menuMobile.addEventListener('click', ()=>{
    menuMobile.classList.remove('d-block')
})


menuMobileUl.addEventListener('click', (e)=>{
    e.stopPropagation()
})

