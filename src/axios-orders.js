import axios from 'axios';

const instance  = axios.create({
    baseURL: 'https://react-my-burger-2018.firebaseio.com/'
});

export default instance;
