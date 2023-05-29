import { productsDOM, productsCount } from "../DOM.js";
import { getBasketCount } from "../components/getBasketCount.js";

class CardUI {
  createCardUI(product) {
    productsDOM.innerHTML = " ";
    productsDOM.innerHTML = `<div class="product-card">
      <a href ="/"> На главную </a>
      <div class="product-title">${product.title}</div>
      <div class="product-description">${product.description}</div>
      <img class="product-image" src=${product.image} alt="product-image" />
      <div class="product-price">${product.price} $</div>
      <div class="btn-basket-container">
      <div class="add-product"><img src="../icons/basket-plus.svg"all="add-product" class="basket-img"></div>
      <div class="delete-product"><img src="../icons/basket-minus.svg" all="delete-product" class="basket-img"></div>
      </div>
    </div>`;

    // let count = 0;

    let addProducts = document.querySelector(".add-product");
    addProducts.addEventListener("click", () => {
      let currentProduct = JSON.parse(localStorage.getItem(product.id));
      console.log("carrent Product", currentProduct);
      // if: true or false
      if (currentProduct) {
        localStorage.setItem(
          product.id,
          JSON.stringify({
            count: (currentProduct.count += 1),
            title: product.title,
          })
        );
      } else {
        let count = 0;
        localStorage.setItem(
          product.id,
          JSON.stringify({
            count: (count += 1),
            title: product.title,
            image: product.image,
            price: product.price,
          })
        );
      }
      getBasketCount();
    });

    let deleteProducts = document.querySelector(".delete-product");
    deleteProducts.addEventListener("click", () => {
      let currentProduct = JSON.parse(localStorage.getItem(product.id));
      if (currentProduct.count > 0)
        localStorage.setItem(
          product.id,
          JSON.stringify({
            count: (currentProduct.count -= 1),
            title: product.title,
          })
        );
      if (currentProduct.count < 1) {
        // remove - удалять товар из хранилища если  его нет
        localStorage.removeItem(product.id);
      }
    });
    getBasketCount();
  }
}

let cardUi = new CardUI();
export { cardUi };
