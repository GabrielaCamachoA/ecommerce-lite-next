"use client"

import { useState } from "react"
import { Navbar } from "../../components/section/navbar"
import { Footer } from "../../components/section/footer"
import { ProductGrid } from "../../components/section/product-grid"
import { ShoppingCartPanel } from "../../components/section/shopping-cart-panel"

const MOCK_PRODUCTS = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 299.99,
    image: "/premium-wireless-headphones.png",
  },
  {
    id: "2",
    name: "Minimalist Watch",
    price: 159.99,
    image: "/minimalist-watch.png",
  },
  {
    id: "3",
    name: "Leather Backpack",
    price: 89.99,
    image: "/brown-leather-backpack.png",
  },
  {
    id: "4",
    name: "Smart Water Bottle",
    price: 45.99,
    image: "/smart-water-bottle.jpg",
  },
  {
    id: "5",
    name: "Wireless Keyboard",
    price: 129.99,
    image: "/wireless-keyboard.png",
  },
  {
    id: "6",
    name: "Portable Charger",
    price: 39.99,
    image: "/portable-charger-lifestyle.png",
  },
  {
    id: "7",
    name: "Sunglasses",
    price: 149.99,
    image: "/stylish-sunglasses.png",
  },
  {
    id: "8",
    name: "Yoga Mat",
    price: 49.99,
    image: "/rolled-yoga-mat.png",
  },
]

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

export function Dashboard() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const handleAddToCart = (productId: string) => {
    const product = MOCK_PRODUCTS.find((p) => p.id === productId)
    if (!product) return

    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === productId)
      if (existing) {
        return prev.map((item) => (item.id === productId ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const handleUpdateQuantity = (itemId: string, quantity: number) => {
    if (quantity < 1) return
    setCartItems((prev) => prev.map((item) => (item.id === itemId ? { ...item, quantity } : item)))
  }

  const handleRemoveItem = (itemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId))
  }

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar cartItemsCount={totalItems} onCartClick={() => setCartOpen(true)} />

      <main className="flex-1">
        <section className="bg-secondary/20 border-b border-border">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Discover Quality Products</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Carefully curated items for your lifestyle
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <ProductGrid products={MOCK_PRODUCTS} onAddToCart={handleAddToCart} />
        </section>
      </main>

      <Footer />

      <ShoppingCartPanel
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={() => console.log("Checkout")}
      />
    </div>
  )
}
