import { observer } from "mobx-react";
import React from "react";
import productStore from "../stores/gameStore";
import gameStore from "../stores/gameStore";
import {
  StoreDetailTitle,
  StoreDetailImage,
  StoreDetailWrapper,
} from "../styles";

const StoreDetail = ({ navigation, route }) => {
  const { store } = route.params;
  const productsFromProductStore = store.products.map((product) =>
    productStore.getProductById(product.id)
  );
  if (gameStore.loading) return <Spinner />;
  return (
    <StoreDetailWrapper>
      <Button
        onPress={() => gameStore.deleteProduct(store.id, navigation)}
        title="Delete Store"
        color="#8d063e"
      >
        Delete Movie!
      </Button>
      <StoreDetailImage source={{ uri: store.image }} />
      <StoreDetailTitle>{store.name}</StoreDetailTitle>
      <ProductList products={productsFromProductStore} />
    </StoreDetailWrapper>
  );
};

export default observer(StoreDetail);
