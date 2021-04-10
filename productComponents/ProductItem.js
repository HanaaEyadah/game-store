import React from "react";
import { StoreItemStyled } from "../styles";
import { ListItem } from "native-base";
import { Image } from "react-native";

const ProductItem = ({ product }) => {
  return (
    <ListItem>
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: product.image }}
      />
      <StoreItemStyled>{product.name}</StoreItemStyled>
    </ListItem>
  );
};

export default ProductItem;