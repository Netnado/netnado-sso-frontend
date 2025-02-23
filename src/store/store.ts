import { configureStore } from "@reduxjs/toolkit";
import { accountReducer } from "@/store/account/accountSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    account: accountReducer,
  },
  middleware(getDefaultMiddleware) {
    try {
      return getDefaultMiddleware({ serializableCheck: false })
        // .concat(loadLocalStorage);
    } catch (error) {
      console.error('Failed to load custom middleware:', error);
      return getDefaultMiddleware({ serializableCheck: false });
    }
  },
});
export type RootState = {
  account: ReturnType<typeof accountReducer>,
};



export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;