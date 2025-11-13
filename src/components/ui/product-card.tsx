"use client"

import { Button } from "../../../components/ui/button"
import { Card } from "../../../components/ui/card"
import { cn } from "../../../lib/utils"
import { Icon } from "./icon"
import { Product } from "@/interfaces/product"

interface ProductCardProps {
  product: Product
  onAddToCart?: () => void
  className?: string
}

export function ProductCard({ product, onAddToCart, className }: ProductCardProps) {
  return (
    <Card className={cn("overflow-hidden group hover:shadow-lg transition-shadow", className)}>
      <div className="aspect-square relative overflow-hidden bg-muted">
        <img
          src={product.imageUrl || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
          aria-label="Add to favorites"
        >
          <Icon name="heart" size={18} className="text-foreground" />
        </button>
      </div>
      <div className="p-4 space-y-3">
        <h3 className="font-medium text-foreground line-clamp-2 leading-tight">{product.name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold text-primary">${product.price.toFixed(2)}</span>
          <Button size="sm" onClick={onAddToCart} className="gap-1.5">
            <Icon name="cart" size={16} />
            Add
          </Button>
        </div>
      </div>
    </Card>
  )
}
