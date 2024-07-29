import { getCartProductsFromLS } from "./getCartProductsFromLS";

export const updateCartProductTotal = () => {
    let productSubTotal = document.querySelector(".productSubTotal");
    let productFinalTotal = document.querySelector(".productFinalTotal");
    let localCartProducts = getCartProductsFromLS();
    let initialValue = 0;
    let totalProductPrice = localCartProducts.reduce((accum,cardElem) => {
      let productPrice = parseInt(cardElem.price) || 0;
      return accum + productPrice;
    },initialValue);

    productSubTotal.textContent = `₹${totalProductPrice}`;
    productFinalTotal.textContent = `₹${totalProductPrice + 50}`

};