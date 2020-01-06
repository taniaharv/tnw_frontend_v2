import axios from 'axios';

const KEY = '19255ef2ec8e768ccf91879ad9ccab45';
const ID = 'd0ac4a36';

export default axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?',
    params: {
        'q': 'ingredient',
        'app_id': ID,
        'app_key': KEY,
        'excluded': 'excluded',
        'Health': 'sortBy',
    },
});     