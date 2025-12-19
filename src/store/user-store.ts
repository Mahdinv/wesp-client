import { create } from "zustand";
import { IUser } from "../types-interfaces/user.interface";

type UserStore = {
  token: { access: string; refresh: string };
  setToken: (accessToken: string, refreshToken: string) => void;
  user: IUser | null;
  setUser: (user: IUser) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  token: { access: "", refresh: "" },
  setToken: (accessToken: string, refreshToken: string) => {
    set({
      token: {
        access: accessToken,
        refresh: refreshToken,
      },
    });
  },
  user: null,
  setUser: (user: IUser) => {
    set({ user });
  },
}));
