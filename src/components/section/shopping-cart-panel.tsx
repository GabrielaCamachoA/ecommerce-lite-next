"use client"

import { Icon } from "@/components/ui/icon"

import { CartItem } from "@/components/ui/cart-item"

import { Button } from "../../../components/ui/button"
import { cn } from "../../../lib/utils"

interface CartItemData {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

interface ShoppingCartPanelProps {
  isOpen: boolean
  onClose: () => void
  items: CartItemData[]
  onUpdateQuantity?: (itemId: string, quantity: number) => void
  onRemoveItem?: (itemId: string) => void
  onCheckout?: () => void
}

export function ShoppingCartPanel({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}: ShoppingCartPanelProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" onClick={onClose} />}

      <div
        className={cn(
          "fixed top-0 right-0 h-full w-full sm:w-96 bg-background shadow-2xl z-50 transition-transform duration-300 flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground">Cart</h2>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-lg hover:bg-muted transition-colors flex items-center justify-center"
          >
            <Icon name="close" size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-3">
              <Icon name="cart" size={48} className="text-muted-foreground" />
              <p className="text-muted-foreground">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-0">
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  {...item}
                  onUpdateQuantity={(quantity) => onUpdateQuantity?.(item.id, quantity)}
                  onRemove={() => onRemoveItem?.(item.id)}
                />
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border p-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-base font-medium text-foreground">Total</span>
              <span className="text-xl font-bold text-primary">${total.toFixed(2)}</span>
            </div>
            <Button className="w-full" size="lg" onClick={onCheckout}>
              Checkout
            </Button>
          </div>
        )}
      </div>
    </>
  )
}
