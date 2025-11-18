import { createSlice, createDraftSafeSelector } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const commonSlice = createSlice({
  name: 'common',
  initialState: {
    isLoading: false,
  },
  reducers: {
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    },

    // ✅ show toast messages (side-effect safe via toastify)
    showMessage: (state, { payload }) => {
      const { type = 'info', message = '' } = payload;
      if (message) {
        switch (type) {
          case 'success':
            toast.success(message);
            break;
          case 'error':
            toast.error(message);
            break;
          case 'warn':
            toast.warn(message);
            break;
          default:
            toast.info(message);
        }
      }
    },
  },
});

export const { setLoading, showMessage } = commonSlice.actions;

export default commonSlice.reducer;

export const selectCommonState = (state) => state.common;
export const selectLoader = createDraftSafeSelector(
  [selectCommonState],
  (state) => state.isLoading
);
