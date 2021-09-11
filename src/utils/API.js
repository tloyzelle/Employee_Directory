import axios from 'axios';

const BASEURL = "https://randomuser.me/api/?seed=emp";

const API = {
    search: function(query) {
        console.log(BASEURL + query);
        return axios.get(BASEURL + query);
    }
};

export default API;