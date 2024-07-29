import { getCartProductsFromLS } from "./getCartProductsFromLS";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

export const removeProdFromCart = (id) => {
    let cartProducts = getCartProductsFromLS();
    cartProducts = cartProducts.filter((curProd) => curProd.id !== id);

    localStorage.setItem("cartProductLS",JSON.stringify(cartProducts));

    let removeDiv = document.getElementById(`card${id}`);

    if(removeDiv){
        removeDiv.remove();

        showToast("delete",id);
    }

    updateCartValue(cartProducts);
};