import axios from 'axios';

const BASE_URL = 'https://api.reddit.com/r/pics/';

export const api = axios.create({
  baseURL: BASE_URL,
});
