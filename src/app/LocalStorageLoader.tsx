'use client';

import { LocalStorageHelper } from "@/helpers/local.storage.helper";
import { setAccessToken, setAccountLoading, setAccountState } from "@/store/account/accountSlice";
import { useAppDispatch } from "@/store/store";
import { IAccountType } from "@/types/account";
import { useEffect } from "react";

function LocalStorageLoader() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setAccountLoading(false));
    try {
      const account = LocalStorageHelper.get("account") as IAccountType;
      const accessToken = LocalStorageHelper.get("accessToken");
      if (account && accessToken) {
        dispatch(setAccountState(account));
        dispatch(setAccessToken(accessToken.toString()));
      }
    } catch (error) {
      console.error("Failed to load account from local storage:", error);
      dispatch(setAccountState(null));
      dispatch(setAccessToken(""));
    } finally {
      dispatch(setAccountLoading(false));
    }
  }, [dispatch]);
  return null;
}

export default LocalStorageLoader;