import { Product } from "@/src/interfaces/product";
import { User } from "@/src/interfaces/user";


export const products: Product[] = [
  {
    sku: "P-001",
    name: "Smartphone Galaxy X",
    brand: "Samsung",
    quantity: 40,
    price: 899.99,
    isActive: true,
    category: "Smartphones",
    imageUrl: "",
    createdAt: new Date().toISOString(),
    tags: ["android", "5G", "AMOLED"],
    dimensions: { width: 7.2, height: 15.8, depth: 0.8 },
    description: "High-end smartphone with stunning display and fast performance."
  },
  {
    sku: "P-002",
    name: "Laptop ProBook 15",
    brand: "HP",
    quantity: 25,
    price: 1199.0,
    isActive: true,
    category: "Laptops",
    imageUrl: "",
    createdAt: new Date().toISOString(),
    tags: ["laptop", "intel", "business"],
    description: "Reliable laptop designed for professionals and multitasking."
  },
  {
    sku: "P-003",
    name: "MacBook Air M3",
    brand: "Apple",
    quantity: 20,
    price: 1499.99,
    isActive: true,
    category: "Laptops",
    imageUrl: "",
    createdAt: new Date().toISOString(),
    tags: ["macbook", "apple", "lightweight"],
    description: "Powerful yet ultra-light laptop with Apple M3 chip."
  },
  {
    sku: "P-004",
    name: "Wireless Mouse MX Master 3S",
    brand: "Logitech",
    quantity: 80,
    price: 99.99,
    isActive: true,
    category: "Accessories",
    imageUrl: "",
    createdAt: new Date().toISOString(),
    tags: ["mouse", "wireless", "ergonomic"],
    description: "Ergonomic wireless mouse with precision tracking and silent clicks."
  },
  {
    sku: "P-005",
    name: "Mechanical Keyboard K95",
    brand: "Corsair",
    quantity: 60,
    price: 169.99,
    isActive: true,
    category: "Accessories",
    imageUrl: "",
    createdAt: new Date().toISOString(),
    tags: ["keyboard", "mechanical", "RGB"],
    description: "High-performance RGB mechanical keyboard for gamers."
  },
  {
    sku: "P-006",
    name: "4K Smart TV 55''",
    brand: "LG",
    quantity: 15,
    price: 999.99,
    isActive: true,
    category: "Televisions",
    imageUrl: "",
    createdAt: new Date().toISOString(),
    tags: ["TV", "4K", "HDR"],
    description: "Ultra HD Smart TV with vibrant colors and voice assistant support."
  },
  {
    sku: "P-007",
    name: "Bluetooth Speaker Go 3",
    brand: "JBL",
    quantity: 70,
    price: 59.99,
    isActive: true,
    category: "Audio",
    imageUrl: "",
    createdAt: new Date().toISOString(),
    tags: ["speaker", "portable", "bluetooth"],
    description: "Compact waterproof speaker with impressive sound."
  },
  {
    sku: "P-008",
    name: "Noise Cancelling Headphones 700",
    brand: "Bose",
    quantity: 30,
    price: 379.99,
    isActive: true,
    category: "Audio",
    imageUrl: "",
    createdAt: new Date().toISOString(),
    tags: ["headphones", "noise cancelling", "wireless"],
    description: "Premium headphones with superior noise cancellation and comfort."
  },
  {
    sku: "P-009",
    name: "Gaming Monitor 27'' Curved",
    brand: "Samsung",
    quantity: 25,
    price: 299.99,
    isActive: true,
    category: "Monitors",
    imageUrl: "",
    createdAt: new Date().toISOString(),
    tags: ["monitor", "gaming", "curved"],
    description: "Curved 27-inch gaming monitor with 144Hz refresh rate."
  },
  {
    sku: "P-010",
    name: "External SSD 1TB",
    brand: "SanDisk",
    quantity: 100,
    price: 149.99,
    isActive: true,
    category: "Storage",
    imageUrl: "",
    createdAt: new Date().toISOString(),
    tags: ["storage", "ssd", "portable"],
    description: "Fast and durable external SSD with USB-C interface."
  },
  {
    sku: "P-011",
    name: "WiFi 6 Router AX6000",
    brand: "TP-Link",
    quantity: 45,
    price: 199.99,
    isActive: true,
    category: "Networking",
    imageUrl: "",
    createdAt: new Date().toISOString(),
    tags: ["wifi", "router", "dual-band"],
    description: "High-speed router with advanced connectivity for large homes."
  },
  {
    sku: "P-012",
    name: "Smartwatch Versa 4",
    brand: "Fitbit",
    quantity: 50,
    price: 229.99,
    isActive: true,
    category: "Wearables",
    imageUrl: "",
    createdAt: new Date().toISOString(),
    tags: ["fitness", "smartwatch", "fitbit"],
    description: "Fitness-focused smartwatch with heart rate and sleep tracking."
  },
  {
    sku: "P-013",
    name: "Drone Mini SE",
    brand: "DJI",
    quantity: 15,
    price: 499.99,
    isActive: true,
    category: "Drones",
    imageUrl: "",
    createdAt: new Date().toISOString(),
    tags: ["drone", "camera", "aerial"],
    description: "Compact drone with HD camera and stable flight controls."
  },
  {
    sku: "P-014",
    name: "Smart Home Hub Mini",
    brand: "Google",
    quantity: 35,
    price: 99.99,
    isActive: true,
    category: "Smart Home",
    imageUrl: "",
    createdAt: new Date().toISOString(),
    tags: ["smart home", "assistant", "voice control"],
    description: "Compact home assistant hub with voice commands and automation."
  },
  {
    sku: "P-015",
    name: "Portable Power Bank 20,000mAh",
    brand: "Anker",
    quantity: 80,
    price: 59.99,
    isActive: true,
    category: "Accessories",
    imageUrl: "",
    createdAt: new Date().toISOString(),
    tags: ["charger", "portable", "usb-c"],
    description: "High-capacity power bank with fast charging for multiple devices."
  }
];




export const users: User[] = [
  {
    id: 1,
    fullName: "John Perez",
    email: "john.perez@example.com",
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
    isActive: true,
    role: "user",
    address: "Calle 9 #5-22, Bucaramanga, Colombia",
    createdAt: new Date().toISOString(),
    tags: ["buyer", "premium"],
    description: "Premium customer with multiple previous purchases."
  }
];

