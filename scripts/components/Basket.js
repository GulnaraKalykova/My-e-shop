import { productsDOM } from "../DOM.js";

const showProductdFromBasket = () => {
  productsDOM.innerHTML = " ";

  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let product = JSON.parse(localStorage.getItem(key));
    productsDOM.innerHTML += `<div class="products-item" id=${key} >
      <div class="products-title">${product.title}</div>
      <div class="products-count">Количество: ${product.count}</div>
      <div><img class="products-photo" src=${product.image} alt="product photo"/></div>
      <div class="products-price">${product.price} $</div>
      <a href = "#/card/${key}" class="show-more">Подробнее</a>
    </div>
    `;
  }
};

export { showProductdFromBasket };
