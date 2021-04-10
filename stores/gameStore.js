import { makeAutoObservable } from "mobx";
import "../App"
import axios from "axios";

class ProductStore{
    products = [];
    loading = true;

    constructor() {
      makeAutoObservable(this);
    }


    createProduct = async (newProduct) => {
      try {
        const res = await axios.post("http://localhost:8000/products", newProduct);
        res.data.product = { id: newProduct.productId };
        this.products.push(res.data);
        console.log("ProductStore -> createProduct -> this.products", this.products);
      } catch (error) {
        console.error("ProductStore -> createProduct -> error", error);
      }
    };
  
  deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:8000/products/${productId}`);
        this.products = this.products.filter((product) => product.id !== productId);
      }catch (error) {
        console.error("ProductStore -> createProduct -> error", error);
      }
  };
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
}



const productStore = new ProductStore();
productStore.fetchProducts();
export default productStore;