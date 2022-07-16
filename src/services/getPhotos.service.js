import axios from "axios";

const getPhotosService = (count) => {
  const api = "https://api.unsplash.com";
  const accessKey = process.env.REACT_APP_ACCESS_KEY;
  return axios.get(
    `${api}/photos/random?client_id=${accessKey}&count=${count}`
  );
};

export { getPhotosService };
