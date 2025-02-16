import { mapErrorCodeToMessage } from "@/configs/error.config";
import { IResponseType } from "@/types/response";

export function checkIfErrorResponse(response: IResponseType): boolean {
  const { status, errorCode, data } = response;
  if (+status >= 400 || errorCode) {
    return true;
  } else if (!data) { 
    return true;
  }
  return false;
}

export function getDefaultErrorResponse(error: unknown): IResponseType {  
  let errorMessage = mapErrorCodeToMessage();
  if (error instanceof Error) {
    errorMessage = error.message;
  }
  return {
    status: 500,
    errorCode: 50000,
    message: errorMessage,
    data: null,
    metadata: null,
  }
}