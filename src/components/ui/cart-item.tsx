"use client"

import { Icon } from "./icon"

interface CartItemProps {
  id: string
  name: string
  price: number
  quantity: number
  image: string
  onUpdateQuantity?: (quantity: number) => void
  onRemove?: () => void
}

export function CartItem({ name, price, quantity, image, onUpdateQuantity, onRemove }: CartItemProps) {
  return (
    <div className="flex gap-4 py-4 border-b border-border last:border-0">
      <div className="w-20 h-20 rounded-lg overflow-hidden bg-muted flex-shrink-0">
        <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h4 className="font-medium text-sm text-foreground line-clamp-1">{name}</h4>
          <p className="text-sm text-primary font-semibold mt-1">${price.toFixed(2)}</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 border border-border rounded-lg">
            <button
              onClick={() => onUpdateQuantity?.(quantity - 1)}
              className="w-8 h-8 flex items-center justify-center hover:bg-muted transition-colors"
              disabled={quantity <= 1}
            >
              −
            </button>
            <span className="text-sm font-medium w-8 text-center">{quantity}</span>
            <button
              onClick={() => onUpdateQuantity?.(quantity + 1)}
              className="w-8 h-8 flex items-center justify-center hover:bg-muted transition-colors"
            >
              +
            </button>
          </div>
          <button
            onClick={onRemove}
            className="ml-auto text-muted-foreground hover:text-destructive transition-colors"
            aria-label="Remove item"
          >
            <Icon name="close" size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}
