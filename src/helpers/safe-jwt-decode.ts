import { jwtDecode } from "jwt-decode";

export function safeJwtDecode<T>(token: string): T | null {
  try {
    return jwtDecode(token);
  } catch {
    return null;
  }
}
