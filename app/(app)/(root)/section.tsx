"use client"

import { YourComponent } from "@/registry/new-york/your-component"

export function ComponentSection() {
  return (
    <div className="flex flex-col items-center gap-6">
      <YourComponent className="w-full max-w-md" />
    </div>
  )
}
