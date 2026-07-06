let data=JSON.parse(localStorage.getItem('prData'));
console.log(data)
let product=document.getElementById('product')
function removing(A,e){
    A = A.filter(value => value !== e);
    return A
}
let totalPrice=0;
for (let i=0;i<=data.Title.length-1;i++){
    let Div = document.createElement('div')
    Div.classList.add('area')
    Div.classList.add('mx-auto')
    let image = document.createElement('img')
    image.setAttribute('src',data.photo[i])
    let title = document.createElement('h5')
    title.innerText=data.Title[i]
    title.classList.add('fw-bold')
    let buy=document.createElement('div')
    buy.classList.add('d-flex')
    buy.classList.add('justify-content-between')
    let s = document.createElement('button')
    s.setAttribute('type','button')
    s.innerHTML=`<i class="bi bi-x-circle-fill"></i> Delete`
    s.addEventListener('click', (e)=>{
        let ph=e.currentTarget.parentElement.parentElement.children[0].getAttribute('src')
        let t=e.currentTarget.parentElement.parentElement.children[1].innerText;
        let pr=e.currentTarget.nextSibling.innerText.slice(0,-1);
        data.photo=removing(data.photo,ph)
        data.Title=removing(data.Title,t)
        data.Price=removing(data.Price,pr)
        localStorage.setItem('prData',data)
        e.currentTarget.parentElement.parentElement.style.display='none'
    })
    let price= document.createElement('div')
    price.innerText=data.Price[i] + '$'
    buy.append(s,price)
    buy.classList.add('buying')
    Div.append(image,title,buy)
    totalPrice += data.Price[i]
    product.append(Div); 
}
let TP=document.createElement('button');
TP.classList.add('d-flex')
TP.classList.add('align-items-center')
TP.classList.add('justify-content-center');
TP.classList.add('mx-auto');
TP.classList.add('totalPrice');
TP.innerHTML=`<h5>${totalPrice}$</h5>`;
product.append(TP)