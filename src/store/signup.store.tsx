import { create } from "zustand";

interface SignupData {
  signupBtn: boolean;
  name: string;
  email: string;
  password: string;
}

interface SignupState {
  signup: SignupData;
  setSignup: () => void;
  handleNameChange: (data: string) => void;
  handleEmailChange: (data: string) => void;
  handlePasswordChange: (data: string) => void;
}

export const useSignupStore = create<SignupState>((set) => ({
  signup: { signupBtn: true, name: "", email: "", password: "" },
  setSignup: () =>
    set((state) => ({
      signup: { ...state.signup, signupBtn: !state.signup.signupBtn },
    })),
  handleNameChange: (data) =>
    set((state) => ({
      signup: { ...state.signup, name: data },
    })),
  handleEmailChange: (data) =>
    set((state) => ({
      signup: { ...state.signup, email: data },
    })),
  handlePasswordChange: (data) =>
    set((state) => ({
      signup: { ...state.signup, password: data },
    })),
}));
