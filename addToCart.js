import { getCartProductsFromLS } from "./getCartProductsFromLS";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCartProductsFromLS();

export const addToCart = (event,id,stock) => {
    let arrLocalStorageProduct = getCartProductsFromLS();

    const currentProdEle = document.querySelector(`#card${id}`);
    let quantity = currentProdEle.querySelector(".productQuantity").innerText;
    let price = currentProdEle.querySelector(".productPrice").innerText;

    // console.log(quantity,price);
    
    
    price = price.replace("₹","");

    let existingProd = arrLocalStorageProduct.find((curProd) => curProd.id === id);

    if(existingProd && quantity > 1){
        quantity = Number(existingProd.quantity) + Number(quantity);
        price = Number(price*quantity);
        let updatedCart = {id,quantity,price};
        updatedCart = arrLocalStorageProduct.map((curProd) => {
           return curProd.id === id ? updatedCart : curProd;      
        });    
        localStorage.setItem("cartProductLS",JSON.stringify(updatedCart));

        showToast("add",id);
    }


    if(existingProd){
        alert('product already added');
        return false;
    }
    price = Number(price * quantity);
    quantity = Number(quantity);
    let updateCart = {id,quantity,price};
    arrLocalStorageProduct.push(updateCart);
    localStorage.setItem("cartProductLS",JSON.stringify(arrLocalStorageProduct));

    updateCartValue(arrLocalStorageProduct);
    showToast("add",id);
};