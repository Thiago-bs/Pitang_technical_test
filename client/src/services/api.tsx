import axios from 'axios';

let webAddress: string = window.location.href
if (webAddress.includes("3000")){
    // DEBUG MODE
    webAddress = 'http://localhost:5000'
}else{
    // DOCKER MODE
    webAddress = webAddress.replace(/.$/, ":")+'5000'
}

const api = axios.create({
    baseURL: webAddress,
});

export default api;