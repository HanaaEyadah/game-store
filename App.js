
import React from 'react';
import Home from "./storeComponents/Home";
import ProductList from "./storeComponents/StoreList";
import { ThemeProvider } from "styled-components";
import { NavigationContainer } from "@react-navigation/native";


function App() {
  const theme = {
    light: {
      mainColor: "#320145", // main font color
      backgroundColor: "#bcaec2", // main background color
      purple: "#66068a",
    },
    dark: {
      mainColor: "#bcaec2", // main font color
      backgroundColor: "#320145", // main background color
      purple: "#66068a",
    },
  }
    // const [currentTheme, setCurrentTheme] = useState("light");
  
    // const toggleTheme = () =>
    //   setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  return (
   
    <ThemeProvider theme={theme.dark}>
      <StoreList products={products}/>
      {/* <View>{ProductList}</View>; */}
      <NavigationContainer>
      <Home />
      </NavigationContainer>
  
</ThemeProvider>
  
  );
  }

  export default App;