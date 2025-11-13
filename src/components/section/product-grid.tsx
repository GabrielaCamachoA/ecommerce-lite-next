

import { cn } from "../../../lib/utils"
import { ProductCard } from "../ui/product-card"

interface Product {
  id: string
  name: string
  price: number
  image: string
}

interface ProductGridProps {
  products: Product[]
  onAddToCart?: (productId: string) => void
  className?: string
}

export function ProductGrid({ products, onAddToCart, className }: ProductGridProps) {
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", className)}>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} onAddToCart={() => onAddToCart?.(product.id)} />
      ))}
    </div>
  )
}
