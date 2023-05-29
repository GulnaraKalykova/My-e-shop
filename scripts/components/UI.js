import { productsDOM } from "../DOM.js"

class UI {
  createUI(data) {
    productsDOM.innerHTML = ' '
    data.forEach(item => {
      productsDOM.innerHTML +=
        `<div class="products-item" id=${item.id} >
      <div class="products-title">${item.title}</div>
      <div><img class = "products-photo" src=${item.image} alt = "product item"/></div>
      <div class="products-price">${item.price} $</div>
      <a href = "#/card/${item.id}" class = "show-more">Подробнее</a>
      </div>
      `})
  }
}

let ui = new UI()
export { ui }

