import { BASE_URL } from '../api.js'
import { cardUi } from '../components/Card.js'

const getProductById = async (id) => {
  let res = await fetch(BASE_URL + `/${id}`)
  let product = await res.json()
  cardUi.createCardUI(product)
}

export { getProductById }