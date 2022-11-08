import create from "zustand";

interface AppState {
  theme: "default" | "dark";
  isAuth: boolean;
  toggleTheme: (theme: string) => void;
  setIsAuth: (authState: boolean) => void;
}

export const useAppStore = create<AppState>()((set) => ({
  theme: "default",
  isAuth: false,

  setIsAuth: (authState: boolean) => {
    set({ isAuth: authState });
  },
  toggleTheme: (theme) => {
    set({ theme: theme === "default" ? "dark" : "default" });
  },
}));
