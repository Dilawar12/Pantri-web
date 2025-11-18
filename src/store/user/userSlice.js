import { createDraftSafeSelector, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loginUser: null,
        token: null,
        recipesDetail: null,
    },
    reducers: {
        setLoginUser: (state, { payload }) => {
            state.loginUser = payload;
        },
        setToken: (state, { payload }) => {
            state.token = payload;
        },
        setRecipesDetail: (state, { payload }) => {
            state.recipesDetail = payload;
        }
    },
});

export const { setLoginUser, setToken, setRecipesDetail } =
    userSlice.actions;

export default userSlice.reducer;
export const selectCommonState = (state) => state.userSlice;

export const selectLoginUser = createDraftSafeSelector(
    [selectCommonState],
    state => state.loginUser,
);
export const selectToken = createDraftSafeSelector(
    [selectCommonState],
    state => state.token && state.loginUser?.role === "provider",
);
export const selectUserToken = createDraftSafeSelector(
    [selectCommonState],
    state => state.token && state.loginUser?.role === "customer",
);
export const selectRecipesDetail = createDraftSafeSelector(
    [selectCommonState],
    state => state.recipesDetail,
);