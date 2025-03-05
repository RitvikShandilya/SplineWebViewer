"use client"

import type React from "react"

import { useState } from "react"
import { SplineScene } from "./spline-scene"

export function ProjectForm() {
  const [sceneUrl, setSceneUrl] = useState("")
  const [description, setDescription] = useState("")
  const [showPreview, setShowPreview] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (sceneUrl) {
      setShowPreview(true)
    }
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="sceneUrl" className="block text-sm font-medium">
            Spline Scene URL
          </label>
          <input
            id="sceneUrl"
            type="text"
            value={sceneUrl}
            onChange={(e) => setSceneUrl(e.target.value)}
            placeholder="https://prod.spline.design/your-scene-id/scene.splinecode"
            className="w-full px-3 py-2 border rounded-md text-sm"
            required
          />
          <p className="text-xs text-muted-foreground">Paste the URL of your published Spline scene</p>
        </div>

        <div className="space-y-2">
          <label htmlFor="description" className="block text-sm font-medium">
            Project Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe how you plan to use this 3D scene in your project"
            className="w-full px-3 py-2 border rounded-md text-sm min-h-[100px]"
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Preview Scene
        </button>
      </form>

      {showPreview && (
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Your Scene Preview</h3>
          <div className="bg-secondary rounded-lg overflow-hidden h-[300px]">
            <SplineScene scene={sceneUrl} className="w-full h-full" />
          </div>
          {description && (
            <div className="bg-card p-4 rounded-lg">
              <h4 className="font-medium mb-2">Project Description:</h4>
              <p className="text-sm">{description}</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

