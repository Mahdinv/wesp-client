import { create } from "zustand";
import { IUser } from "../types-interfaces/user.interface";

type UserStore = {
  accessToken: string;
  setAccessToken: (accessToken: string) => void;
  user: IUser | null;
  setUser: (user: IUser) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  accessToken: "",
  setAccessToken: (accessToken: string) => {
    set({ accessToken });
  },
  user: null,
  setUser: (user: IUser) => {
    set({ user });
  },
}));
