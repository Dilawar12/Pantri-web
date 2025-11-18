import ax from 'axios';
import { store } from '../store/store';
import { asyncSignOut } from '../store/user/userAction';
export const APP_URL = 'https://pantri-backend-h3l6.onrender.com/';
// export const APP_URL = 'http://192.168.0.117:5001/';
export const IMG_URL = APP_URL + 'uploads/';
export const getImagePath = (str) => IMG_URL + str;

export const BASE_URL = APP_URL + 'api/';
const axios = ax.create({
  baseURL: BASE_URL,
  // withCredentials: true,
});

const axiosPrivate = ax.create({
  baseURL: BASE_URL,
  // withCredentials: true,
});

axiosPrivate.interceptors.response.use(
  resp => resp,
  async function (error) {
    console.log(error?.response?.status, 'error')
    if (
      error?.response?.status === 401
      // error?.response?.data?.error?.expire
    ) {
      store.dispatch(asyncSignOut());
      // const { token } = store.getState().userSlices ?? {};
      // if (token) {
      //   const res = await callApi({
      //     path: '/auth/access-token',
      //     method: 'PATCH',
      //     axiosSecure: false,
      //     body: {
      //       refreshToken: tokens?.refreshToken,
      //     },
      //     // token: tokens?.refreshToken,
      //   });
      //   if (res.success) {
      //     if (res.data) {
      //       store.dispatch(setTokens(res.data));
      //     }
      //     const config = error.config;
      //     if (config) {
      //       config.headers.Authorization = `Bearer ${res.data?.accessToken}`;
      //       return axiosPrivate(config);
      //     }
      //     return res;
      //   } else {
      //     // signOut();
      //     store.dispatch(asyncSignOut());
      //   }
      // }
      return { ...(error?.response ?? {}) };
    } else {
      return { ...(error?.response ?? {}) };
    }
  },
);

export { axios, axiosPrivate };
