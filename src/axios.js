import axios from "axios";

const instance = axios.create({
    baseURL: "https://hallelujah-backend-app-api.onrender.com/"
})


export default instance;