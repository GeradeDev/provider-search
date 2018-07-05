import axios from 'axios'



export default {

    post: (url: string, callback: any) => {
        axios.get(url)
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            callback()
        });
    },
    get: (url: string, options:any) => {
        axios.get(url)
        .then(function (response) {
            console.log(response.data);
            return response.data;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            
        });
    }
}