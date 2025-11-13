import { ShoppingCart, User, Search, Menu, X, ChevronDown, Heart, Star, Package, LogOut, Settings } from "lucide-react"

export const icons = {
  cart: ShoppingCart,
  user: User,
  search: Search,
  menu: Menu,
  close: X,
  chevronDown: ChevronDown,
  heart: Heart,
  star: Star,
  package: Package,
  logout: LogOut,
  settings: Settings,
}

interface IconProps {
  name: keyof typeof icons
  className?: string
  size?: number
}

export function Icon({ name, className, size = 24 }: IconProps) {
  const IconComponent = icons[name]
  return <IconComponent className={className} size={size} />
}
