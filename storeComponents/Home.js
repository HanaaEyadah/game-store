import React from "react";
import { BottomStyling, ButtonStyled,Title, OverLayContainer, HomeBackground, TopStyling } from "../styles";


const Home = () => {
    return (
        <HomeBackground
          source={{
            uri:
              "https://annabanana.co/wp-content/uploads/2020/03/Chocolate-Chip-Cookies-22.jpg",
          }}
        >
            <OverLayContainer>
          <TopStyling>
            <Title>Cookies & Beyond</Title>
          </TopStyling>
          <BottomStyling>
   <ButtonStyled onPress={() => alert("Take me to the list of products")}>Click here to skip</ButtonStyled>
 </BottomStyling>
          </OverLayContainer>
        </HomeBackground>
      );};

export default Home;