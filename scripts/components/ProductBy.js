import { BASE_URL } from '../api.js'
import { ui } from '../components/UI.js'


class ProductsByCategory {
  getProductsByCategory(value) {
    fetch(`${BASE_URL}/category/${value}`)
      .then(res => res.json())
      .then(data => {
        ui.createUI(data)
      })
      .catch((err) => console.log(err))
  }
}

let productsByCategory = new ProductsByCategory()
export { productsByCategory }