import axios from "axios";

const instance = axios.create({
  baseURL: " https://hotels-com-free.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "5a4c8eb413msh89fbb982d9c1314p1855ffjsn0158238daf4e",
    "x-rapidapi-host": "hotels-com-free.p.rapidapi.com",
    useQueryString: true,
  },
});

export default instance;
