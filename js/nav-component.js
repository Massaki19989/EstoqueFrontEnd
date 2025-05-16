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

document.querySelector('.menu-mobile').innerHTML = navComponent