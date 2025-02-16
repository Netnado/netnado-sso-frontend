export const ErrorCodeMapping: Record<number, string> = {
  20001: "Validation failed",
  20002: "Invalid token",
  20003: "Token expired",
  20004: "User not found",
  20005: "User is locked",
  20006: "User is not active",
  20007: "User is not verified",
  20008: "Unauthenticated",
  20009: "Unauthorized",

  50000: "Something went wrong, please try again later",
};

export const mapErrorCodeToMessage = (errorCode: number = 50000): string => {
  return ErrorCodeMapping[errorCode];
};