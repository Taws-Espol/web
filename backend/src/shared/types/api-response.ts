export type ApiError = {
  code: string;
  message: string;
  fields?: Record<string, string>;
  requestId?: string;
};

export type ApiResponse<T> =
  | { data: T; error: null }
  | { data: null; error: ApiError };
