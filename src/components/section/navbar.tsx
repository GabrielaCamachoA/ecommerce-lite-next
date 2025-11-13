"use client"

import { useState } from "react"
import Link from "next/link"
import { Icon } from "../../components/ui/icon"
import { Button } from "../../../components/ui/button"


interface NavbarProps {
  cartItemsCount?: number
  onCartClick?: () => void
}

export function Navbar({ cartItemsCount = 0, onCartClick }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Products
            </Link>
            <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Icon name="search" size={20} />
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/login">
                <Icon name="user" size={20} />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="relative" onClick={onCartClick}>
              <Icon name="cart" size={20} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium">
                  {cartItemsCount}
                </span>
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Icon name={isMobileMenuOpen ? "close" : "menu"} size={20} />
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-3 border-t border-border">
            <Link
              href="/"
              className="block py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="block py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="block py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
