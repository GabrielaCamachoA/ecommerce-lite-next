"use client"

import Link from "next/link"
import { Icon } from "../../components/ui/icon"
import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"


interface NavbarProps {
  cartItemsCount?: number
  onCartClick?: () => void
  onLogout?: () => void
  searchTerm?: string
  onSearchChange?: (value: string) => void
}

export function Navbar({ cartItemsCount = 0, onCartClick, onLogout, searchTerm = "", onSearchChange }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Icon name="package" size={20} className="text-primary-foreground" />
            </div>
            <span className="font-semibold text-lg text-foreground">Store</span>
          </Link>

          <div className="flex items-center gap-3">
            <Input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => onSearchChange?.(e.target.value)}
              className="w-64"
            />
            <Button variant="ghost" size="icon" className="relative" onClick={onCartClick}>
              <Icon name="cart" size={20} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium">
                  {cartItemsCount}
                </span>
              )}
            </Button>
            {onLogout && (
              <Button variant="ghost" size="icon" onClick={onLogout}>
                <Icon name="logout" size={20} />
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
