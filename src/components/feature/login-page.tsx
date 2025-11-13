"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { InputField } from "../../components/ui/input-field"

import { Icon } from "../../components/ui/icon"
import { Button } from "../../../components/ui/button"
import { authenticateUser } from "../../../utils/auth"
import { useAuthStore } from "../../store/authStore"

export function LoginPage() {
  const { login } = useAuthStore()
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: { email?: string; password?: string } = {}

    if (!email) newErrors.email = "Email is required"
    if (!password) newErrors.password = "Password is required"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setMessage(null)
      return
    }

    try {
      const user = authenticateUser(email, password)
      if (user) {
        login(user)
        setMessage({ type: 'success', text: 'Login successful! Redirecting...' })
        setTimeout(() => {
          router.push('/dashboard')
        }, 1000)
      } else {
        setMessage({ type: 'error', text: 'Invalid email or password.' })
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An error occurred during login.' })
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <div className="w-full max-w-md">
        <div className="bg-background rounded-xl shadow-lg p-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex w-12 h-12 rounded-xl bg-primary items-center justify-center mb-2">
              <Icon name="user" size={24} className="text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">Welcome Back</h1>
            <p className="text-sm text-muted-foreground">Sign in to your account</p>
            {message && (
              <div className={`text-sm ${message.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                {message.text}
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <InputField
              label="Email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email}
            />

            <InputField
              label="Password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password}
            />

            <div className="flex items-center justify-end">
              <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                Forgot password?
              </Link>
            </div>

            <Button type="submit" className="w-full" size="lg">
              Sign In
            </Button>
          </form>

          <div className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/register" className="text-primary font-medium hover:underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
