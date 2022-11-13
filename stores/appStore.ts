import create from "zustand";

interface AppState {
  theme: "default" | "dark";
  user: {
    isAuth: boolean;
    username: string;
  };
  toggleTheme: (theme: string) => void;
  setIsAuth: (authState: boolean, username: string) => void;
}

export const useAppStore = create<AppState>()((set) => ({
  user: {
    isAuth: false,
    username: "",
  },
  theme: "default",

  setIsAuth: (authState, username) => {
    set({ user: { isAuth: authState, username } });
  },
  toggleTheme: (theme) => {
    set({ theme: theme === "default" ? "dark" : "default" });
  },
}));
