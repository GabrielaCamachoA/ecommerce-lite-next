"use client"

import { useState } from "react"
import { Navbar } from "../../components/section/navbar"
import { Footer } from "../../components/section/footer"
import { ProductGrid } from "../../components/section/product-grid"
import { ShoppingCartPanel } from "../../components/section/shopping-cart-panel"
import { products  } from "@/data/data"

// Define CartItem type based on product structure and quantity
type CartItem = typeof products[number] & { quantity: number }

export function Dashboard() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const handleAddToCart = (productId: string) => {
    const product = products.find((p) => p.sku === productId)
    if (!product) return

    setCartItems((prev) => {
      const existing = prev.find((item) => item.sku === productId)
      if (existing) {
        return prev.map((item) => (item.sku === productId ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const handleUpdateQuantity = (itemId: string, quantity: number) => {
    if (quantity < 1) return
    setCartItems((prev) => prev.map((item) => (item.sku === itemId ? { ...item, quantity } : item)))
  }

  const handleRemoveItem = (itemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.sku !== itemId))
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
          <ProductGrid products={products} onAddToCart={handleAddToCart} />
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
