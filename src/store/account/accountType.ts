import { IAccountType } from "@/types/account";
import { IResponseType } from "@/types/response";

export interface IAccountDataResponseType {
  data: {
    account: IAccountType;
    accessToken: string;
    refreshToken: string;
  }
}

export interface IAccountResponseType extends IResponseType {
  status: number;
  errorCode: number;
  message: string;
  data: {
    account: IAccountType;
    accessToken: string;
    refreshToken: string;
  };
  metadata: unknown;
}

export interface ILoginPayload {
  keyword: string;
  password: string;
}