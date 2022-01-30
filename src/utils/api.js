import axios from 'axios';

// const SERVER_BASE_URL = `http://18.216.44.4:4000/`;
const SERVER_BASE_URL = `http://localhost:4000/`;

const GuestApi = axios.create({
    baseURL: SERVER_BASE_URL
});

let accessToken = null;
if(localStorage.getItem('user_data') != null){
    const userLocalStorage = JSON.parse(localStorage.getItem('user_data'));
    const { access_token } = userLocalStorage.token;
    accessToken = access_token;
}

// const issueToken = () => {
//     // console.log(abc);
//     return 'my new token';
// }

const AuthApi = axios.create({
    baseURL: SERVER_BASE_URL,
    headers: {
        Authorization: `bearer ${accessToken}`
    }
});

// AuthApi.interceptors.response.use((response) => {
//     console.log(response);
//     if(response.status === 401) {
//         console.log("You are not authorized");
//     }
//     // return response;
// }, (error) => {
//     if (error.response && error.response.data) {
//         return Promise.reject(error.response.data);
//     }
//     return Promise.reject(error.message);
// });

// AuthApi.interceptors.response.use(res => {
//     console.log(res.status);
//     // Important: response interceptors **must** return the response.
//     return res;
// })

// AuthApi.interceptors.response.use(
//     res => res,
//     err => {
//         if (err.response.status === 401) {
//             issueToken();
//         }
//         throw err;
//     }
// );

AuthApi.interceptors.response.use(response => response, error => {
    const status = error.response ? error.response.status : null
    if (status === 401) {
        // /*
        // * When response code is 401, try to refresh the token.
        // * Eject the interceptor so it doesn't loop in case
        // * token refresh causes the 401 response
        // */
        // AuthApi.interceptors.response.eject(interceptor);

        // will loop if refreshToken returns 401
        // return refreshToken(store).then(_ => {
        //     error.config.headers['Authorization'] = 'Bearer ' + store.state.auth.token;
        //     error.config.baseURL = undefined;
        //     return AuthApi.request(error.config);
        // })
        // // Would be nice to catch an error here, which would work, if the interceptor is omitted
        // .catch(err => err);


    }

    return Promise.reject(error);
});

// AuthApi.interceptors.request.use((config) => {
//     console.log(config);
//     let originalRequest = config;
//     let tokenIsExpired = true;
//     if ( tokenIsExpired ) {
//         console.log('i am here');
//         // return issueToken().then((token) => {
//         //     originalRequest['Authorization'] = 'Bearer ' + token;
//         //     return Promise.resolve(originalRequest);
//         // });
//         return;
//     }
//     return config;
// }, (err) => {
//     return Promise.reject(err);
// });

export { GuestApi, AuthApi, SERVER_BASE_URL };
