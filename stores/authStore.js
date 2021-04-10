import { observable, makeAutoObservable } from "mobx";
// import axios from "axios";
import instance from "./instance";
import jwtDecode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }

  signup = async (userData) => {
    try {
      await instance.post("/user/signup", userData);
      console.log("Added user:", userData);
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };

  signin = async (userData) => {
    try {
      const response = await instance.post("/user/signin", userData);
      console.log(response.data.token);
      const token = response.data.token;

      this.user = jwtDecode(token);
      instance.defaults.headers.common = {
        Authorization: `Bearer ${token}`,
      };

      await AsyncStorage.setItem("userToken", token);

      console.log("user token => ", this.user);
    } catch (error) {
      console.log("AuthStore -> signin -> error", error);
    }
  };

  signout = () => {
    delete instance.defaults.headers.common.Authorization; //using instance & bearer tokens?
    this.user = null;
  };

  checkForToken = async () => {
    const token = AsyncStorage.getItem("userToken");
    if (token) {
      const decodedToken = jwtDecode(token);

      if (decodedToken.exp > Date.now()) {
        this.user = decodedToken;
        instance.defaults.headers.common = { Authorization: `bearer ${token}` };
      } else {
        await AsyncStorage.removeItem("userToken");
      }
    }
  };
}

const authStore = new AuthStore();

export default authStore;
