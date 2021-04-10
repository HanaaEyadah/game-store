import React from "react";
import { observer } from "mobx-react";
import gameStore from "../stores/gameStore";
import { List, Content, Spinner } from "native-base";
import StoreItem from "./StoreItem";
import { View, Button, ScrollView } from "react-native";

const StoreList = ({ navigation }) => {
  if (gameStore.loading) return <Spinner />;
  const storeList = gameStore.products.map((product) => (
    <StoreItem product={product} key={product.id} navigation={navigation} />
  ));
  return (
    <View>
      <ScrollView>
        <Button
          onPress={() => navigation.navigate("New Store Form")}
          title="Create Store"
          color="#8d063e"
        >
          Add Store!
        </Button>
        <List>{storeList}</List>
      </ScrollView>
    </View>
  );
};
export default observer(StoreList);
