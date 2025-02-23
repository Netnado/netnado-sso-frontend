import { LocalStorageHelper } from "@/helpers/local.storage.helper";
import { setAccessToken, setAccountState } from "@/store/account/accountSlice";
import { RootState } from "@/store/store";
import { IAccountType } from "@/types/account";
import { Middleware } from "@reduxjs/toolkit";

export const loadLocalStorage: Middleware<object, RootState> = (store) => (next) => (action) => {
  const stringAction = (action as { type: string });

  if (typeof window !== "undefined" && stringAction.type === "@@INIT") {
    try {
      const account = LocalStorageHelper.get("account") as IAccountType;
      const accessToken = LocalStorageHelper.get("accessToken");
      if (account && accessToken) {
        store.dispatch(setAccountState(account));
        store.dispatch(setAccessToken(accessToken.toString()));
      }
    } catch (error) {
      console.error("Failed to load account from local storage:", error);
      store.dispatch(setAccountState(null));
      store.dispatch(setAccessToken(""));
    }
  }
  return next(action);
}