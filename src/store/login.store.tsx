import { create } from "zustand";

interface LoginData {
  email: string;
  password: string;
}

interface LoginState {
  login: LoginData;
  handleEmailChange: (data: string) => void;
  handlePasswordChange: (data: string) => void;
}

export const useLoginStore = create<LoginState>((set) => ({
  login: { email: "", password: "" },
  handleEmailChange: (data) =>
    set((state) => ({
      login: { ...state.login, email: data },
    })),
  handlePasswordChange: (data) =>
    set((state) => ({
      login: { ...state.login, password: data },
    })),
}));
