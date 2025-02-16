export interface IResponseType {
  status: number;
  errorCode: number;
  message: string;
  data: unknown;
  metadata: unknown;
}