import axios from "axios";

axios.defaults.baseURL = "http://159.69.156.10:3000/api";

const http = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
};

export default http;
