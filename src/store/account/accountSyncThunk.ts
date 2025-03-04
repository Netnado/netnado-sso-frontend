import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { IAccountResponseType, ILoginPayload } from "@/store/account/accountType";
import { IAccountState } from "@/store/account/accountSlice";
import { AccountService } from "@/services/account.service";
import { getDefaultErrorResponse } from "@/services";
import { IResponseType } from "@/types/response";
import { mapErrorCodeToMessage } from "@/configs/error.config";
import { LocalStorageHelper } from "@/helpers/local.storage.helper";

// LOGIN
export const loginCase = createAsyncThunk<IAccountResponseType, ILoginPayload, { rejectValue: IAccountResponseType }>(
  'account/login',
  async (payload: ILoginPayload, { rejectWithValue }) => {
    try {
      const response = await AccountService.login(payload.keyword, payload.password);
      LocalStorageHelper.set("accessToken", response.data?.accessToken);
      LocalStorageHelper.set("account", response.data?.account);
      return response as IAccountResponseType;
    } catch (error: unknown) {
      if ((error as IResponseType).status) {
        return rejectWithValue(error as IAccountResponseType);
      }
      return rejectWithValue(getDefaultErrorResponse(error) as IAccountResponseType);
    }
  }
);

export const addLoginCase = (builder: ActionReducerMapBuilder<IAccountState>): void => { 
  builder.addCase(loginCase.pending, (state) => {
    state.loading = true;
  });
  builder.addCase(loginCase.fulfilled, (state, action) => {
    state.isAuthenticated = true;
    state.loading = false;
    state.error = +action.payload?.errorCode;
    state.message = action.payload?.message;

    state.data = action.payload.data?.account;
    state.accessToken = action.payload.data?.accessToken;
    state.refreshToken = action.payload.data?.refreshToken;
  });
  builder.addCase(loginCase.rejected, (state, action) => {
    state.isAuthenticated = false;
    state.loading = false;
    state.error = action.payload?.errorCode ?? 50000;
    state.message = action.payload?.message ?? mapErrorCodeToMessage();
  });
}

// LOGOUT
export const logoutCase = createAsyncThunk<IResponseType, void, { rejectValue: IResponseType }>(
  'account/logout',
  async (_, { rejectWithValue }) => {
    try {
      const response = await AccountService.logout();
      LocalStorageHelper.delete("accessToken");
      LocalStorageHelper.delete("account");
      return response as IResponseType;
    } catch (error: unknown) {
      if ((error as IResponseType).status) {
        return rejectWithValue(error as IResponseType);
      }
      return rejectWithValue(getDefaultErrorResponse(error) as IResponseType);
    }
  }
);

export const addLogoutCase = (builder: ActionReducerMapBuilder<IAccountState>): void => { 
  builder.addCase(logoutCase.pending, (state) => {
    state.loading = true;
  });
  builder.addCase(logoutCase.fulfilled, (state, action) => {
    state.isAuthenticated = false;
    state.loading = false;
    state.error = +action.payload?.errorCode;
    state.message = action.payload?.message;

    state.data = null;
    state.accessToken = "";
    state.refreshToken = "";
  });
  builder.addCase(logoutCase.rejected, (state, action) => {
    state.isAuthenticated = false;
    state.loading = false;
    state.error = action.payload?.errorCode ?? 50000;
    state.message = action.payload?.message ?? mapErrorCodeToMessage();
  });
};