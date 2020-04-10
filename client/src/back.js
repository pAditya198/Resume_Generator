import axios from "axios";
export default axios.create({
  baseURL: "https://pdf-generator-backend.herokuapp.com/",
});
