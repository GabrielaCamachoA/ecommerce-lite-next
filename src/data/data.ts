
import { Product } from "@/interfaces/product";
import { User } from "@/interfaces/user";



export const products: Product[] = [
  {
    sku: "P-001",
    name: "Smartphone Galaxy X",
    brand: "Samsung",
    quantity: 40,
    price: 899.99,
    isActive: true,
    category: "Smartphones",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoYAtE7dtaQ4ZL_N7I1Tv-5mfMguevUqhb4w&s",
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
    imageUrl: "https://co-media.hptiendaenlinea.com/catalog/product/7/6/76Q26LT-1_T1730149405.png",
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
    imageUrl: "https://mac-center.com/cdn/shop/files/IMG-12444373.jpg?v=1723750058&width=823",
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
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ6MJ1TkRj9NHC8WL-GDwXiSue36gSc1JIeA&s",
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
    imageUrl: "https://m.media-amazon.com/images/I/7193Jl8PejL._AC_SL1500_.jpg",
    createdAt: new Date().toISOString(),
    tags: ["keyboard", "mechanical", "RGB"],
    description: "High-performance RGB mechanical keyboard for gamers."
  },
  {
    sku: "P-006",
    name: "4K Smart TV 55",
    brand: "LG",
    quantity: 15,
    price: 999.99,
    isActive: true,
    category: "Televisions",
    imageUrl: "https://www.lg.com/cac/images/televisores/md07504085/gallery/D1.jpg",
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
    imageUrl: "https://i5.walmartimages.com/seo/JBL-Go-3-Portable-Waterproof-Speaker-Black_cfb8fe3b-9da7-4e4c-9aef-846ca01ef720.bae0ebd59ba514077181b24959ff7937.jpeg",
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
    imageUrl: "https://exitocol.vtexassets.com/arquivos/ids/10200048/audifonos-bose-noise-cancelling-headphones-700-negro.jpg?v=637681466441900000",
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
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlhVtZEAxG00dF1WZWYSWSR8iFgSAWZp_wlA&s",
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
    imageUrl: "https://m.media-amazon.com/images/I/71bBCTIvIIL.jpg",
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
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc0UOyW7caQmTZJDSW-rY10K6TTE07oH6xHQ&s",
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
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_877625-MCO88649971728_072025-O.webp",
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
    imageUrl: "https://dji-official-fe.djicdn.com/dps/6c205137b8ac2ca09cfc19c778812176.png",
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
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngvy2qFoAhsBBrDeDaXp-E0z5HXOpcHEJUA&s",
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
    imageUrl: "https://i5.walmartimages.com/seo/20000-mAh-Portable-Charger-Power-Bank-Dual-USB-Battery-Pack-for-iPhone-iPad-Galaxy-Android-Pixel-and-Tablet-Black_c01c4471-00f5-4b3f-90f6-c150e8a26d25.5b7f8365592d758bda90de260ddf7dbd.jpeg",
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

