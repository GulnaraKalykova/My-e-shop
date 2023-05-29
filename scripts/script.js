import { products } from "./components/Products.js";
import { category } from "./components/Category.js";
import { productsByCategory } from "./components/ProductBy.js";
import { productsCount, select } from "./DOM.js";
import Router from "./components/Router.js";
import { getProductById } from "./components/getProduct.js";
import { showProductdFromBasket } from "./components/Basket.js";
import { getBasketCount } from "./components/getBasketCount.js";

select.addEventListener("change", function () {
  if (select.value === "all") {
    products.getProducts();
  } else {
    productsByCategory.getProductsByCategory(select.value);
  }
});

document.addEventListener("DOMContentLoaded", function async() {
  products.getProducts();
  category.getCategories();

  if (localStorage.length) {
    getBasketCount();
  }
  productsCount.addEventListener("click", () => {
    showProductdFromBasket();
  });
});

const router = new Router();

router.add(/card\/(.*)/, (id) => getProductById(id));
