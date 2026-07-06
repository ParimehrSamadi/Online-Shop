let product=document.getElementById('product');
let select = document.getElementById('select');
let priceArr=[];
let titleArr=[];
let photoArr=[];
let pr={}
let priceList=[]
let min=0
let max=0
let customRange1=document.getElementById('customRange1')
const final = document.querySelector(".final");

fetch('https://fakestoreapi.com/products')
.then((res) => res.json())
.then((data) => {
    data.forEach(element => {
        let Div = document.createElement('div')
        Div.classList.add('area')
        let image = document.createElement('img')
        image.setAttribute('src',`${element.image}`)
        let title = document.createElement('h5')
        title.innerText=element.title
        title.classList.add('fw-bold')
        let desc = document.createElement('p')
        desc.innerText=element.description
        let buy=document.createElement('div')
        buy.classList.add('d-flex')
        buy.classList.add('justify-content-between')
        let s = document.createElement('button')
        s.setAttribute('type','button')
        s.innerHTML=`<i class="bi bi-cart3"></i>`
        let price= document.createElement('div')
        price.innerText=element.price + '$'
        buy.append(s,price)
        buy.classList.add('buying')
        s.addEventListener('click', (e) => {
            
            let get=e.currentTarget.nextSibling.innerText.slice(0,-1);
            let cost=Number(get)
            priceArr.push(cost);
            let tit = e.currentTarget.parentElement.parentElement.children[1].innerText;   
            titleArr.push(tit);   
            let photo=e.currentTarget.parentElement.parentElement.children[0].getAttribute('src');
            photoArr.push(photo)
            pr.Price = priceArr;
            pr.Title = titleArr;
            pr.photo=photoArr;
            let prStr = JSON.stringify(pr);
            localStorage.setItem('prData', prStr)
            final.classList.add('num')
            let number= Number(final.getAttribute('number-content'))|| 0;
            final.setAttribute('number-content',number+1)
        })
        Div.append(image,title,desc,buy)
        product.append(Div); 
    });
})
fetch('https://fakestoreapi.com/products/categories')
.then((cat) => cat.json())
.then((Cdata) => {
    Cdata.forEach(element => {
        let i = 0
        let opt=document.createElement('option')
        opt.setAttribute('value',element)
        opt.innerText=element
        select.append(opt)
    });
})
showData = (cat) => {
    product.innerText='';
    fetch(`https://fakestoreapi.com/products/category/${cat}`)
    .then((d) => d.json())
    .then((c) => {
        c.forEach(element => {
            let Div = document.createElement('div')
            Div.classList.add('area')
            let image = document.createElement('img')
            image.setAttribute('src',`${element.image}`)
            let title = document.createElement('h5')
            title.innerText=element.title
            title.classList.add('fw-bold')
            let desc = document.createElement('p')
            desc.innerText=element.description
            let buy=document.createElement('div')
            buy.classList.add('d-flex')
            buy.classList.add('justify-content-between')
            let s = document.createElement('button')
            buy.setAttribute('type','button')
            s.innerHTML=`<i class="bi bi-cart3"></i>`
            let price= document.createElement('div')
            price.innerText=element.price + '$'
            buy.append(s,price)
            buy.classList.add('buying')
            s.addEventListener('click', (e) => {
                let get=e.target.parentElement.children[1].innerText.slice(0,e.target.parentElement.children[1].innerText.length-1)
                let cost=Number(get)
                priceArr.push(cost);
                let tit = e.target.parentElement.parentElement.children[1].innerText;   
                titleArr.push(tit);     
                pr.Price = priceArr;
                pr.Title = titleArr;
                let prStr = JSON.stringify(pr);
                localStorage.setItem('prData', prStr)
            })
            Div.append(image,title,desc,buy)
            product.append(Div)          
        });
    })
}
optionHandler = (e) => {
    product.innerText=''
    product.classList.add('justify-content-center')
    product.innerHTML=`<div class="d-flex justify-content-center align-items-center frame">
  <div class="center">
		<div class="dot-1"></div>
		<div class="dot-2"></div>
		<div class="dot-3"></div>
  </div>
</div>`

    setTimeout(() => {
        showData(e.value)
        
    }, 6000);
   
}
rangeHandler = (e) => {
    let found = false
    product.innerText=''
    let range= e.value
    fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((data) => {
        data.forEach(element => {
            if(Number(element.price) <= range){
                found=true
                let Div = document.createElement('div')
                Div.classList.add('area')
                let image = document.createElement('img')
                image.setAttribute('src',`${element.image}`)
                let title = document.createElement('h5')
                title.innerText=element.title
                title.classList.add('fw-bold')
                let desc = document.createElement('p')
                desc.innerText=element.description
                let buy=document.createElement('div')
                buy.classList.add('d-flex')
                buy.classList.add('justify-content-between')
                let s = document.createElement('button')
                buy.setAttribute('type','button')
                s.innerHTML=`<i class="bi bi-cart3"></i>`
                let price= document.createElement('div')
                price.innerText=element.price + '$'
                buy.append(s,price)
                buy.classList.add('buying')
                s.addEventListener('click', (e) => {
                
                    let get=e.target.parentElement.children[1].innerText.slice(0,e.target.parentElement.children[1].innerText.length-1)
                    let cost=Number(get)
                    priceArr.push(cost);
                    let tit = e.target.parentElement.parentElement.children[1].innerText;   
                    titleArr.push(tit);     
                    pr.Price = priceArr;
                    pr.Title = titleArr;
                    let prStr = JSON.stringify(pr);
                    localStorage.setItem('prData', prStr)
                
                })
                Div.append(image,title,desc,buy)
                product.append(Div)

            
            }
        });
    })  
}
range=(callback)=>{
    fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((data) => {
        data.forEach(element => {
            priceList.push(Number(element.price))
            callback()
        });
        customRange1.setAttribute('min',min)
        customRange1.setAttribute('max',max)
})
}
discover=() => {
    max=Math.max(...priceList)
    min=Math.min(...priceList)
}
range(discover)




  

