import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '../interfaces/user';

interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
  login: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isLoggedIn: false,
      login: (user: User) => set({ user, isLoggedIn: true }),
      logout: () => set({ user: null, isLoggedIn: false }),
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        isLoggedIn: state.isLoggedIn,
      }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          // Verificar si el usuario existe en la lista de usuarios y está activo
          const { users } = require('../data/users');
          const storedUser = state.user;
          if (storedUser) {
            const validUser = users.find((u: User) => u.id === storedUser.id && u.isActive);
            if (!validUser) {
              // Usuario no válido o inactivo, limpiar el estado
              state.user = null;
              state.isLoggedIn = false;
            }
          }
        }
      },
    }
  )
);
