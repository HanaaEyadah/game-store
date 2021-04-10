import { makeAutoObservable } from "mobx";
import "../App"
import axios from "axios";

class ProductStore{
    products = [];
    loading = true;

    constructor() {
      makeAutoObservable(this);
    }


    
  fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8000/products");
      this.products = res.data;
      this.loading = false;
      console.log(res.data);
    } catch (error) {
      console.error("ProductStore -> fetchProducts -> error", error);
    }
  };

  getProductById = (productId) =>
  this.products.find((product) => product.id === productId);
}



const productStore = new ProductStore();
productStore.fetchProducts();
export default productStore;