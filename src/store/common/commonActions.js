import { createAsyncThunk } from '@reduxjs/toolkit';
import apiCall from '../services';

// export const asyncGetAllAds = createAsyncThunk(
//   'Donate-get',
//   async (_, { dispatch, getState }) => {
//     try {
//       const store = getState() as RootState
//       const token = store.userSlices.token
//       dispatch(setLoading(true))
//       const res = await apiCall({
//         path: 'ads/active',
//         token
//       });
//       console.log('ads api res', res);
      
//       if (res?.success) {
//         dispatch(setAds(res.data))
//         dispatch(setLoading(false))
//         return res;
//       } else {
//         dispatch(showMessage(res.error.message))
//       }
//     } catch (error: any) {
//       dispatch(
//         showMessage(error?.response?.data?.error?.message || 'some thing went wrong'),
//       );
//       dispatch(setLoading(false));
//     }
//   },
// );