import { axios, axiosPrivate } from './axios';
import { responseCallback } from './responseCallback';
import { store } from '../store/store';
import { asyncSignOut } from '../store/user/userAction';

export const callApi = async ({
  path,
  method = 'GET',
  body,
  token,
  isFormData = false,
  axiosSecure = true,
  options: ops = {},
  headers: customeHeaders = {},
}) => {

  let headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Accept-Language': 'en-US',
  };

  const options = {
    method,
    ...ops,
  };

  if (isFormData) {
    headers['Content-Type'] = 'multipart/form-data';
  }

  if (axiosSecure) {
    const { token: accessToken } = store.getState().userSlices ?? {};
    if (accessToken) {
      token = accessToken;
    }
  }

  if (token && axiosSecure) {
    headers.Authorization = `Bearer ${token}`;
  }
  if (!token && axiosSecure) {
    store.dispatch(asyncSignOut());
    return { success: false, message: 'logout' };
  }
  options.headers = { ...headers, ...customeHeaders };

  if (body) {
    options.data = body;
  }

  options.url = path;

  const axiosInstance = axiosSecure ? axiosPrivate : axios;
  try {
    const response = await axiosInstance(options);
    return responseCallback(response);
  } catch (err) {
    if (err.response) {
      return responseCallback(err.response);
    }
    return { success: false, message: err.message };
  }
};
