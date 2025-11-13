import { User } from "@/interfaces/user";

export const users: User[] = [
  {
    id: 1,
    fullName: "John Perez",
    email: "john.perez@example.com",
    password: "password123",
    isActive: true,
    role: "admin",
    address: "Carrera 10 #20-30, Bogotá, Colombia",
    createdAt: new Date().toISOString(),
    tags: ["management", "sales"],
    description: "Main administrator of the system."
  },
  {
    id: 2,
    fullName: "Maria Gomez",
    email: "maria.gomez@example.com",
    password: "password123",
    isActive: true,
    role: "user",
    address: "Calle 45 #12-18, Medellín, Colombia",
    createdAt: new Date().toISOString(),
    tags: ["frequent customer"],
    description: "Active user interested in tech products."
  },
  {
    id: 3,
    fullName: "Carlos Rodriguez",
    email: "carlos.rodriguez@example.com",
    password: "password123",
    isActive: false,
    role: "user",
    address: "Avenida Siempre Viva #123, Cali, Colombia",
    createdAt: new Date().toISOString(),
    tags: ["inactive"],
    description: "Temporary user, account deactivated due to inactivity."
  },
  {
    id: 4,
    fullName: "Laura Martinez",
    email: "laura.martinez@example.com",
    password: "password123",
    isActive: true,
    role: "admin",
    address: "Carrera 7 #89-55, Barranquilla, Colombia",
    createdAt: new Date().toISOString(),
    tags: ["inventory", "supervision"],
    description: "Admin responsible for checking stock and suppliers."
  },
  {
    id: 5,
    fullName: "Andrew Torres",
    email: "andrew.torres@example.com",
    password: "password123",
    isActive: true,
    role: "user",
    address: "Calle 9 #5-22, Bucaramanga, Colombia",
    createdAt: new Date().toISOString(),
    tags: ["buyer", "premium"],
    description: "Premium customer with multiple previous purchases."
  }
];
