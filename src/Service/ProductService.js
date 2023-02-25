import axios from "axios";

export class ProductService {
  API_URI = "https://reactback-production.up.railway.app/api";

  createProduct(product) {
    return axios
      .post(this.API_URI + "/product", product)
      .then((res) => res.data);
  }

  readAll() {
    return axios.get(this.API_URI + "/list").then((res) => res.data);
  }

  update(product) {
    return axios
      .put(this.API_URI + "/product" + product._id, product)
      .then((res) => res.data);
  }

  delete(id) {
    return axios.delete(this.API_URI + "/product" + id).then((res) => res.data);
  }
}
