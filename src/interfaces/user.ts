export interface User {
  id: number;
  fullName: string;
  email: string;
  isActive: boolean;
  role: "admin" | "user";
  address: string;
  createdAt: string;
  tags?: string[];
  description?: string;
}

export interface UserCardProps {
  user: User;
}
