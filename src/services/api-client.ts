import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ccf9834d61e74841a66dab39b2f94b8b",
  },
});
