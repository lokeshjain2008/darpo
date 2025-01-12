export interface ApiResponse<T> {
  data: T | null;
  error: Error | null;
}

export interface ApiError {
  message: string;
  status: number;
}