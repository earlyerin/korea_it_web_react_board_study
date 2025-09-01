import { create } from "zustand";

//전역 상태 정의
export const usePrincipalState = create((set) => ({
  isLoggedIn: false,
  princial: null,

  login: (userData) => set({ isLoggedIn: true, princial: userData }),
  logout: () => {
    localStorage.removeItem("accessToken");
    set({ isLoggedIn: false, princial: null });
    window.location.href = "/auth/signin";
  },
}));
