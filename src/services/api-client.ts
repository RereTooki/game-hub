import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '82b59bc4297b480c843ab1360d822295'
    }
})