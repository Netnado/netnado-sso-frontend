import { IAccountType } from "@/types/account";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addLoginCase } from "@/store/account/accountSyncThunk";

export interface IAccountState { 
  isAuthenticated: boolean;
  data: IAccountType | null;
  accessToken: string;
  refreshToken: string;
  loading: boolean;
  error: number | null;
  message: string;
}

const initialAccountState: IAccountState = {
  isAuthenticated: false,
  data: null,
  accessToken: "",
  refreshToken: "",
  loading: true, // Only turn off loading when the local storage is loaded
  error: null,
  message: "",
}

export const accountSlice = createSlice({
  name: "account",
  initialState: initialAccountState,
  reducers: {
    setAccountState: (state, action: PayloadAction<IAccountType | null>) => {
      state.data = action.payload;
    },
    setAccountLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setAccountError: (state, action: PayloadAction<number | null>) => {
      state.error = action.payload;
    },
    setAccountMessage: (state, action: PayloadAction<string>) => { 
      state.message = action.payload;
    },
    setAccountAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    setRefreshToken: (state, action: PayloadAction<string>) => {
      state.refreshToken = action.payload;
    },
  },
  extraReducers(builder) {
    addLoginCase(builder);
  },
})

export const {
  setAccountState,
  setAccountLoading,
  setAccountError,
  setAccountMessage,
  setAccountAuthenticated,
  setAccessToken,
  setRefreshToken,
} = accountSlice.actions;
export const accountReducer = accountSlice.reducer;