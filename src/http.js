import axios from 'axios';

class Http {
    constructor() {
        this.service = axios.create();
    }

    set config(configOptions) {
        this.service = axios.create(configOptions);
    }
}


export default new Http();
