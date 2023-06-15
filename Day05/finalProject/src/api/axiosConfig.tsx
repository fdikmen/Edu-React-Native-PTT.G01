import axios from "axios";

const axiosConfig = axios.create({
    baseURL: 'https://647f231bc246f166da9026e4.mockapi.io',
    // timeout: 1000,
    // headers: { 'X-Custom-Header': 'foobar' }
});

export default axiosConfig;