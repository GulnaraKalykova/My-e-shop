
import { BASE_URL } from "../api.js"
import { ui } from './UI.js'

class Products {
  async getProducts() {
    try {
      let result = await fetch(BASE_URL)
      let data = await result.json()
      ui.createUI(data)
    } catch (err) {
      console.log('err', err)
    }
  }
}

let products = new Products()

export { products }