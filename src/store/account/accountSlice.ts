import { IAccountType } from "@/types/account";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addLoginCase } from "@/store/account/accountSyncThunk";
import { LocalStorageHelper } from "@/helpers/local.storage.helper";

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
  loading: false,
  error: null,
  message: "",
}

export const accountSlice = createSlice({
  name: "account",
  initialState: initialAccountState,
  reducers: {
    setAccountState: (state, action: PayloadAction<IAccountType>) => {
      state.data = action.payload;      
    },
    setAccountLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setAccountError: (state, action: PayloadAction<number>) => {
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
    loadAccountFromLocalStorage: (state) => {
      const account = LocalStorageHelper.get<IAccountType>("account");
      const accessToken = LocalStorageHelper.get<string>("accessToken");
      if (account && accessToken) {
        state.data = account;
        state.isAuthenticated = true;
        state.accessToken = accessToken ?? "";
      }
    },
  },
  extraReducers(builder) {
    addLoginCase(builder);
  },
})

export const { setAccountState } = accountSlice.actions;
export const accountReducer = accountSlice.reducer;