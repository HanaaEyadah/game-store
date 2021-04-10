import React from "react";
import { Image } from "react-native";
import { StoreItemStyled } from "../styles";
import { ListItem } from "native-base";

const StoreItem = ({ product, navigation }) => {
  return (
    <ListItem
      onPress={() => navigation.navigate("Store Details", { product : product })}
    >
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: product.image }}
      />
      <StoreItemStyled>{product.name}</StoreItemStyled>
    </ListItem>
  );
};

export default StoreItem;
