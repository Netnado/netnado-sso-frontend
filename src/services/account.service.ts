import axiosInstance from "@/configs/axios.config";
import { mapErrorCodeToMessage } from "@/configs/error.config";
import { IAccountResponseType } from "@/store/account/accountType";
import { checkIfErrorResponse } from "@/services";

export class AccountService {
  static async login(keyword: string, password: string): Promise<IAccountResponseType> {
    const response = await axiosInstance.post('/auth/login', {
      keyword, password
    }) as IAccountResponseType;
    if (checkIfErrorResponse(response)) {
      throw new Error(mapErrorCodeToMessage(response?.errorCode));
    }

    return response;
  }
}