import axios from 'axios'

const KEY = 'AIzaSyBDbdegLJFt3EMdSkB40n5Y-o2GXwg5ljQ';

const instance = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet, statistics',
        key: KEY
    }
});

export default instance