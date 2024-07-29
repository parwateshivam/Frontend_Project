import products from "./api/products.json";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import {getCartProductsFromLS}  from "./getCartProductsFromLS";
import { incrementDecrement } from "./incrementDecrement";
import { removeProdFromCart } from "./removeProdFromCart";
import { updateCartProductTotal } from "./updateCartProductTotal";


let cartProducts = getCartProductsFromLS();

let filterProducts = products.filter((curProd) => {
   return cartProducts.some((curElem) => curElem.id === curProd.id);
});

console.log(filterProducts);

const cardElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct = () => {
   filterProducts.forEach((curProd) => {
    const {category, id, image, name, stock, price} = curProd;
    let productClone = document.importNode(templateContainer.content, true);


    const lsActualData = fetchQuantityFromCartLS(id,price);
    
    productClone.querySelector('#cardValue').setAttribute("id",`card${id}`);
    productClone.querySelector('.category').textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = name;
    productClone.querySelector(".productQuantity").textContent = lsActualData.quantity;
    productClone.querySelector(".productPrice").textContent = lsActualData.price;

    productClone.querySelector(".stockElement").addEventListener("click",(event) => {
      incrementDecrement(event,id,stock,price);
    });

    productClone.querySelector('.remove-to-cart-button').addEventListener('click',() => removeProdFromCart(id));

    cardElement.append(productClone);
   });
}

showCartProduct();

updateCartProductTotal();