# Ecommerce Lite Next

A lightweight e-commerce application built with Next.js, TypeScript, and Tailwind CSS. This project demonstrates a simple online store with user authentication, product catalog, and shopping cart functionality.

## Features

- **User Authentication**: Login and registration system with context-based state management
- **Product Catalog**: Display products with images, prices, and categories
- **User Management**: Admin and user roles with profile management
- **Shopping Cart**: Add products to cart functionality
- **Responsive Design**: Mobile-first design using Tailwind CSS
- **TypeScript**: Full type safety throughout the application

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: React Context API
- **Icons**: Custom icon component
- **Forms**: Controlled components with validation

## Project Structure

```
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   ├── login/             # Login page
│   │   ├── register/          # Registration page
│   │   └── dashboard/         # User dashboard
│   ├── components/
│   │   ├── ui/                # Reusable UI components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── product-card.tsx
│   │   │   └── user-card.tsx
│   │   └── feature/           # Feature-specific components
│   ├── context/               # React contexts
│   │   └── AuthContext.tsx    # Authentication context
│   ├── data/                  # Mock data
│   │   ├── data.ts            # Products data
│   │   └── users.ts           # Users data
│   ├── interfaces/            # TypeScript interfaces
│   │   ├── product.ts
│   │   └── user.ts
│   └── guard/                 # Route guards (if needed)
├── utils/                     # Utility functions
│   ├── UserStore.ts           # User data management
│   ├── auth.ts                # Authentication utilities
│   └── decorators.ts          # Property extension decorators
└── components/                # Global components
    ├── theme-provider.tsx
    └── ui/                    # Additional UI components
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ecommerce-lite-next
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage Examples

### Authentication

```typescript
import { useAuth } from '@/context/AuthContext'

const { login, logout, isLoggedIn } = useAuth()

// Login user
const handleLogin = () => {
  const success = login('user@example.com', 'password')
  if (success) {
    // Redirect to dashboard
  }
}
```

### User Management

```typescript
import { UserStore } from '@/utils/UserStore'

const userStore = new UserStore()

// Create user
userStore.create({
  id: 1,
  fullName: 'John Doe',
  email: 'john@example.com',
  role: 'user',
  isActive: true
})

// Update user
userStore.update(1, { fullName: 'John Smith' })

// List users
const users = userStore.list()
```

### Product Display

```tsx
import { ProductCard } from '@/components/ui/product-card'

<ProductCard
  product={product}
  onAddToCart={() => console.log('Added to cart')}
/>
```

## Testing

Run the test suite:

```bash
npm run test
# or
yarn test
# or
pnpm test
```

## Deployment

### Vercel

1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch
3. Access your live application

### Manual Deployment

Build the application:

```bash
npm run build
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
