"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { InputField } from "../ui/input-field"
import { Icon } from "../ui/icon"
import { Button } from "../../../components/ui/button"


export function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: Record<string, string> = {}

    if (!formData.name) newErrors.name = "Name is required"
    if (!formData.email) newErrors.email = "Email is required"
    if (!formData.password) newErrors.password = "Password is required"
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    console.log("Register:", formData)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <div className="w-full max-w-md">
        <div className="bg-background rounded-xl shadow-lg p-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex w-12 h-12 rounded-xl bg-secondary items-center justify-center mb-2">
              <Icon name="user" size={24} className="text-secondary-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">Create Account</h1>
            <p className="text-sm text-muted-foreground">Join us today</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <InputField
              label="Full Name"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              error={errors.name}
            />

            <InputField
              label="Email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              error={errors.email}
            />

            <InputField
              label="Password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => handleChange("password", e.target.value)}
              error={errors.password}
            />

            <InputField
              label="Confirm Password"
              type="password"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
              error={errors.confirmPassword}
            />

            <Button type="submit" className="w-full" size="lg">
              Create Account
            </Button>
          </form>

          <div className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary font-medium hover:underline">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
