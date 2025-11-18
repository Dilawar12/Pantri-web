import { callApi } from '../../services';
import { setLoading, showMessage } from '../common/commonSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setLoginUser, setToken } from './userSlice';



export const asyncLoginUser = createAsyncThunk(
    'asyncLoginUser',
    async (body, { dispatch }) => {
        try {
            dispatch(setLoading(true))
            const res = await callApi({
                method: 'POST',
                path: 'auth/login',
                body,
                axiosSecure: false,
            });
            if (res?.success) {
                dispatch(setLoginUser(res.data?.user))
                dispatch(setToken(res.data?.token))
                dispatch(setLoading(false))
                return res;
            } else {
                dispatch(showMessage(res.error.message))
            }
        } catch (error) {
            dispatch(
                showMessage(error?.response?.data?.error?.message || 'some thing went wrong'),
            );
            dispatch(setLoading(false));
        }
    },
);

export const asyncSignOut = createAsyncThunk(
    'asyncSignOut',
    async (_, { dispatch }) => {
        try {
            dispatch(setLoading(true))
            const res = await callApi({
                path: 'auth/logout',
            });
            if (res?.success) {
                dispatch(setLoginUser(null))
                dispatch(setToken(null))
                dispatch(setLoading(false))

                return res;
            }
        } catch (error) {
            dispatch(
                showMessage(error?.response?.data?.error?.message || 'some thing went wrong'),
            );
            dispatch(setLoading(false));
        }
    },
);
export const asyncSignupUser = createAsyncThunk(
    'asyncSignupUser',
    async (body, { dispatch }) => {
        try {
            dispatch(setLoading(true))
            const res = await callApi({
                method: 'POST',
                path: 'auth/register',
                body,
                axiosSecure: false,
            });
            console.log("Signup Response:", res);
            if (res?.success) {
                dispatch(setLoginUser(res.data?.user))
                dispatch(setToken(res.data?.token))
                dispatch(setLoading(false))
                dispatch(showMessage({ type: "success", message: "User register successfully!" }));

                return res;
            } else {
                dispatch(showMessage({ type: "error", message: res.error.message }));
            }
        } catch (error) {
            dispatch(showMessage({ type: "error", message: error?.response?.data?.error?.message }));
            dispatch(setLoading(false));
        }
    },
);
export const asyncGetRecipes = createAsyncThunk(
    'asyncGetRecipes',
    async (body, { dispatch }) => {
        try {
            dispatch(setLoading(true))
            const res = await callApi({
                path: 'recipes',
                axiosSecure: false,
                options: {
                    params: {
                        ...body
                    }
                }
            });
            console.log("asyncGetRecipes Response:", res);
            if (res?.success) {
                return res;
            } else {
                dispatch(showMessage({ type: "error", message: res.error.message }));
            }
        } catch (error) {
            dispatch(showMessage({ type: "error", message: error?.response?.data?.error?.message }));
            dispatch(setLoading(false));
        }
    },
);