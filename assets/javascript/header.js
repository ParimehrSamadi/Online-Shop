let body = document.getElementsByTagName('body')[0];
body.innerHTML=`
<nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom border-3 border-primary" id='nav'>
  <div class="container-fluid">
    <a class="navbar-brand fw-bold me-5" href="#">Laletka</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 menu" onchange="navHandler(this)">
        <li class="nav-item me-1">
          <a class="nav-link" href="index.html">Home</a>
        </li>
        <li class="nav-item me-1">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item me-1">
          <a class="nav-link">Contact</a>
        </li>
        <li class="nav-item dropdown bg-primary py-1 bg-opacity-25 me-1">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul class="dropdown-menu" id="menu">
          </ul>
        </li>
        <li class="nav-item ms-5 me-1">
          <a class="nav-link final" type='button' href="buy.html">
            <i class="bi bi-bag-heart"></i>
          </a>
        </li>

      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-primary" type="submit"><i class="bi bi-search-heart"></i></button>
      </form>
    </div>
  </div>
</nav>`
let menu=document.getElementById('menu')
fetch('https://fakestoreapi.com/products/categories')
.then((res) => res.json())
.then((data) => {
    let i=1;
    data.forEach(element => {
        let A=document.createElement('a')
        A.innerText=element
        A.classList.add('dropdown-item')
        A.setAttribute('href','#')
        let item=document.createElement('li')
        item.append(A)
        menu.append(item)
        if (i != data.length){
            let seperate=document.createElement('hr')
            seperate.classList.add('dropdown-divider')
            seperate.style.backgroundColor= 'green'
            let sep=document.createElement('li')
            sep.append(seperate)
            menu.append(sep)
        }
        i+=1
    });
})
