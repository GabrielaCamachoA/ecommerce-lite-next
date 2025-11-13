"use client"

import { Card } from "../../../components/ui/card"
import { Badge } from "../../../components/ui/badge"
import { Icon } from "./icon"
import { UserCardProps } from "@/interfaces/user"

export function UserCard({ user }: UserCardProps) {
  return (
    <Card className="p-4 space-y-3">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <h3 className="font-medium text-foreground">{user.fullName}</h3>
          <p className="text-sm text-muted-foreground">{user.email}</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant={user.isActive ? "default" : "secondary"}>
            {user.isActive ? "Active" : "Inactive"}
          </Badge>
          <Badge variant={user.role === "admin" ? "destructive" : "outline"}>
            {user.role}
          </Badge>
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">{user.address}</p>
        {user.description && (
          <p className="text-sm text-foreground">{user.description}</p>
        )}
        {user.tags && user.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {user.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>Created: {new Date(user.createdAt).toLocaleDateString()}</span>
        <Icon name="user" size={16} />
      </div>
    </Card>
  )
}
