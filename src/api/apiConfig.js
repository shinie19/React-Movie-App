const apiConfig = {
  baseURL: "https://api.themoviedb.org/3/",
  apiKey: "0d7b40f3c01f3671491c71a5983d9db9",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
