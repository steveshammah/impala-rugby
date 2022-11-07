import create from "zustand";

interface AppState {
  theme: "default" | "dark";
  toggleTheme: (theme: string) => void;
}

export const useAppStore = create<AppState>()((set) => ({
  theme: "default",
  toggleTheme: (theme) => {
    set({ theme: theme === "default" ? "dark" : "default" });
  },
}));
