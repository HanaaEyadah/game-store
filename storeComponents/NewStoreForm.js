import React, { useState } from "react";
import { useReducer } from "react";
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";
import gameStore from "../stores/gameStore";
// import { CreateButtonStyled } from "../styles";

const NewStoreForm = ({ navigation }) => {
  const [store, setStore] = useState({
    storeName: "",
    image: "",
    description: "",
    // userId: 0,
  });
  //   const handleChange = (event) => {
  //     setMovie({ ...movie, [event.target.name]: event.target.value });
  //   };

  // const handleChange = () => {
  //   setMovie({
  //     ...movie,
  //     name: movie.name,
  //     image: movie.image,
  //     year: +movie.year,
  //     genre: movie.genre,
  //     description: movie.description,
  //     rating: +movie.rating,
  //   });
  // };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     movieStore.createMovie(movie);
  //   };

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        placeholder="Store Name"
        placeholderTextColor={"#808080"}
        onChangeText={(value) => setMovie({ ...store, name: value })}
        value={store.name}
        autoCorrect={false}
      />

      <TextInput
        style={styles.input}
        placeholder="Store Poster URL"
        placeholderTextColor={"#808080"}
        onChangeText={(value) => setStore({ ...store, image: value })}
        value={store.image}
        autoCorrect={false}
      />

      <TextInput
        multiline
        numberOfLines={4}
        onChangeText={(value) => setStore({ ...store, description: value })}
        value={store.description}
      />

      <Button
        title="Save New Store"
        color="#8d063e"
        onPress={() => {
          gameStore.createProduct(product);
          navigation.goBack();
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default NewStoreForm;
