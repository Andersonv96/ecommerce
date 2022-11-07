const cards = document.querySelector(".clothesCards");

const inner = [
    {   
        id: 1,
        price: 14.00,
        stock: 9,
        type: "Hoodies",
        img: "https://academlo-store.netlify.app/assets/img/featured1.png"
    },

    {   
        id: 2,
        price: 24.00,
        stock: 15,
        type: "Shirts",
        img: "https://academlo-store.netlify.app/assets/img/featured2.png"
    },

    {   
        id: 3,
        price: 54.00,
        stock: 20,
        type: "Sweartshirts",
        img: "https://academlo-store.netlify.app/assets/img/featured3.png"
    }
];

let str = '';

inner.forEach(element => {
    str += `<div class="cardFull">
    <div class="button" data-idUser='${element.id}'>+</div>
                    <div class="card">
                    <img src="${element.img}" alt="" srcset="">
                </div>
                <div class="cardFooter">
                    <div class="priceContainer">
                        <div class="price">$${element.price}.00</div>
                        <div class="priceSeparator"></div>
                        <div class="stock">stock: ${element.stock}</div>
                    </div>
                    <div class="typeClothes">${element.type}</div>
                </div>
          </div>`;
});

cards.innerHTML = str;

export {inner}



const orderBuys = {}
const buyCart = document.querySelector(".cartMainEverything");
const totalV = document.querySelector('.alignContainer')

let emptyCart = `<div class="imageCart">
     <img src="https://academlo-store.netlify.app/assets/img/empty-cart.png">
 </div> 
 <h2>You card is empaty</h2>
 `

buyCart.innerHTML = emptyCart

let productsBuys = []

document.addEventListener('click', function (event) {
    if (event.target.classList.contains("button")) {
        const idClothes = event.target.dataset.iduser;

        let currentClothes = null;
        for (let i = 0; i < inner.length; i++) {
            if (inner[i].id === parseInt(idClothes)) {
                currentClothes = inner[i];
            }
        }

        if (orderBuys[currentClothes.id]) {
            orderBuys[currentClothes.id].amount++;
        } else {
            orderBuys[currentClothes.id] = currentClothes;
            orderBuys[currentClothes.id].amount = 1;
        }

        const order = Object.values(orderBuys)
        const amount = document.querySelector('#amount');
        amount.textContent = Object.entries(orderBuys).length;

        let array = '';

        
        order.forEach(element => {
            array += `<div class="buysContent">
            <div class="imgCartBuy">
            <img src="${element.img}" alt="">
            </div>
            <div class="infoClothes">
            <div class="principalProductInfo">
            <div class="clothesName">${element.type}</div>
            <div class="clothesprice">Stock: ${element.stock} | $${element.price}.00</div>
            <div class="subTotal">Subtotal: $${(parseInt(element.price) * (element.amount))}.00</div>
            </div>
            <div class="buttonsCart">
            <div data-id="${element.id}" class="operator remove">-</div>
            <div class="quantify">${element.amount} units</div>
            <div data-id="${element.id}" class="operator add">+</div>
            <i data-id="${element.id}" class=" trash fi fi-rr-trash"></i>
            </div>
            </div>
            </div>`
        });
        
        productsBuys = order;
       


        console.log(event)
        buyCart.innerHTML = array

    };

    if (event.target.classList.contains("add")) {
        let elementFinded = productsBuys.find((elementErase) =>
            elementErase.id == event.target.dataset.id
        )

        console.log(elementFinded.amount++)
        let array = '';

        productsBuys.forEach(element => {
            array += `<div class="buysContent">
               <div class="imgCartBuy">
               <img src="${element.img}" alt="">
               </div>
               <div class="infoClothes">
                   <div class="principalProductInfo">
                       <div class="clothesName">${element.type}</div>
                       <div class="clothesprice">Stock: ${element.stock} | $${element.price}.00</div>
                       <div class="subTotal">Subtotal: $${(parseInt(element.price) * (element.amount))}.00</div>
                   </div>
                   <div class="buttonsCart">
                       <div data-id="${element.id}" class="operator remove">-</div>
                       <div class="quantify">${element.amount} units</div>
                       <div data-id="${element.id}" class="operator add">+</div>
                       <i data-id="${element.id}" class=" trash fi fi-rr-trash"></i>
                   </div>
               </div>
           </div>`
        });

        buyCart.innerHTML = array
    }

    if (event.target.classList.contains("remove")) {
        let elementFinded = productsBuys.find((elementErase) =>
            elementErase.id == event.target.dataset.id)

        if (elementFinded.amount == 0) {
            console.log('hola')
            productsBuys.splice(productsBuys.findIndex((elementErase) =>
                elementErase.id == event.target.dataset.id
            ),1) }

            console.log(elementFinded.amount--)
        let array = '';

        productsBuys.forEach(element => {
            array += `<div class="buysContent">
               <div class="imgCartBuy">
               <img src="${element.img}" alt="">
               </div>
               <div class="infoClothes">
                   <div class="principalProductInfo">
                       <div class="clothesName">${element.type}</div>
                       <div class="clothesprice">Stock: ${element.stock} | $${element.price}.00</div>
                       <div class="subTotal">Subtotal: $${(parseInt(element.price) * (element.amount))}.00</div>
                   </div>
                   <div class="buttonsCart">
                       <div data-id="${element.id}" class="operator remove">-</div>
                       <div class="quantify">${element.amount} units</div>
                       <div data-id="${element.id}" class="operator add">+</div>
                       <i data-id="${element.id}" class=" trash fi fi-rr-trash"></i>
                   </div>
               </div>
           </div>`
        });

        buyCart.innerHTML = array
    }

    function totalValue() {
        let total = 0;
        productsBuys.forEach((valueTotal) => total += (valueTotal.price * valueTotal.amount))
        
        let dataTotalAmount = `<div id="totalPay" class="total">$${total}</div>
        <button>Checkout</button>`
        
        totalV.innerHTML = dataTotalAmount
        console.log(dataTotalAmount)
    }
    
    
    if (event.target.classList.contains("trash")){
        productsBuys.splice(productsBuys.findIndex((elementErase) =>
        elementErase.id == event.target.dataset.id
        ),1)

        let array = '';

        productsBuys.forEach(element => {
            array += `<div class="buysContent">
               <div class="imgCartBuy">
               <img src="${element.img}" alt="">
               </div>
               <div class="infoClothes">
                   <div class="principalProductInfo">
                       <div class="clothesName">${element.type}</div>
                       <div class="clothesprice">Stock: ${element.stock} | $${element.price}.00</div>
                       <div class="subTotal">Subtotal: $${(parseInt(element.price) * (element.amount))}.00</div>
                   </div>
                   <div class="buttonsCart">
                       <div data-id="${element.id}" class="operator remove">-</div>
                       <div class="quantify">${element.amount} units</div>
                       <div data-id="${element.id}" class="operator add">+</div>
                       <i data-id="${element.id}" class=" trash fi fi-rr-trash"></i>
                   </div>
               </div>
           </div>`
        });

        buyCart.innerHTML = array
    }

    totalValue();
});





const sol = document.querySelector('.sol');
const luna = document.querySelector('.luna');
const body = document.querySelector('body')

let dark = luna.addEventListener('click', function switchDarkMode() {
    luna.classList.toggle("hidden");
    if (luna.classList.contains("hidden")) {
        sol.classList.remove("hidden");
        body.classList.add("dark")
    }
});

let light =sol.addEventListener('click', function switchLightMode() {
    sol.classList.toggle("hidden");
    if (sol.classList.contains("hidden")) {
        luna.classList.remove("hidden");
        body.classList.remove("dark");
    }
});


const clothesCardsContainer = document.querySelector('.cartClothesContainer')
const shopping = document.querySelector('.svgContainer')
const closeTag = document.querySelector('.closeTag')

shopping.addEventListener('click', function () {
    clothesCardsContainer.classList.add('show_cartClothesContainer')
});

closeTag.addEventListener('click', function () {
    clothesCardsContainer.classList.remove('show_cartClothesContainer')
})
