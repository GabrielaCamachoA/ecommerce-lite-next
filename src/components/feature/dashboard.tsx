"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Navbar } from "../../components/section/navbar"
import { Footer } from "../../components/section/footer"
import { ProductGrid } from "../../components/section/product-grid"
import { ShoppingCartPanel } from "../../components/section/shopping-cart-panel"
import { Button } from "../../../components/ui/button"

import { products  } from "@/data/data"
import { useAuthStore } from "../../store/authStore"

// Define CartItem type based on product structure and quantity
type CartItem = typeof products[number] & { quantity: number }

export function Dashboard() {
  const { user, logout } = useAuthStore()
  const router = useRouter()
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [searchTerm, setSearchTerm] = useState("")

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

  const handleLogout = () => {
    logout()
    router.push('/login')
  }

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (product.description && product.description.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        cartItemsCount={totalItems}
        onCartClick={() => setCartOpen(true)}
        onLogout={handleLogout}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <main className="flex-1">
        <section className="bg-secondary/20 border-b border-border">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  Welcome back, {user?.fullName || 'User'}!
                </h1>
                <p className="text-lg text-muted-foreground">
                  Discover quality products for your lifestyle
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <ProductGrid products={filteredProducts} onAddToCart={handleAddToCart} />
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
