export interface Product {
  sku: string
  name: string
  brand: string
  quantity: number
  price: number
  isActive: boolean
  category: string
  imageUrl: string
  createdAt: string
  tags?: string[]
  description?: string
  dimensions?: {
    width: number
    height: number
    depth?: number
  }
}

export interface ProductCardProps {
  product: Product;
  onAddToCart?: () => void;
  className?: string;
}
