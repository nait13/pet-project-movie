import { process } from "postcss-flexbugs-fixes";

const  apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: process.env.REACT_APP_KEY_API_TMBD,
    originalImag: (imgPath) => `https://image.tmdb.org/t/p/original${imgPath}`,
    w300Imag: (imgPath) => `https://image.tmdb.org/t/p/w300${imgPath}`
}

export default apiConfig;