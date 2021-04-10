import ProductItem from "./ProductItem";
import { List, Content} from "native-base";

const ProductList = ({ products }) => {
    const productList = products.map((product) => (
      <ProductItem product={product} key={product.id} />
    ));
    return (
        <Content>
          <List>{productList}</List>
        </Content>
      );
  };

  export default ProductList;