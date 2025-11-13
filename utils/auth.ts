import { users } from "../src/data/users";
import { User } from "../src/interfaces/user";

export function authenticateUser(email: string, password: string): User | null {
  // Simple authentication: check if email exists and password matches
  // In a real app, passwords would be hashed and compared securely
  const user = users.find(u => u.email === email && u.password === password);
  return user || null;
}

export function getUserByEmail(email: string): User | undefined {
  return users.find(u => u.email === email);
}

export function isUserActive(user: User): boolean {
  return user.isActive;
}
