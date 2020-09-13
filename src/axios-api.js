import axios from "axios";

const instance = axios.create({
  baseURL: "https://counter-4b33b.firebaseio.com"
});

export default instance;