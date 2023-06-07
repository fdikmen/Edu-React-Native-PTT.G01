import axios from 'axios'

const myInstance = axios.create(
    {
        baseURL: 'https://647f231bc246f166da9026e4.mockapi.io',
        timeout: 10000
    }
)

export default myInstance