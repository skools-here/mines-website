"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, ImageIcon, X } from "lucide-react"

interface ImageUploadProps {
  onImageSelect: (image: string | null) => void
  selectedImage: string | null
}

export function ImageUpload({ onImageSelect, selectedImage }: ImageUploadProps) {
  const [dragActive, setDragActive] = useState(false)

  // Sample DEM and mining images
  const sampleImages = [
    {
      id: "dem1",
      url: "/digital-elevation-model-topographic-map-with-conto.jpg",
      title: "DEM - Topographic Analysis",
      type: "DEM",
    },
    {
      id: "mine1",
      url: "/open-pit-copper-mine-aerial-view-with-terraced-lev.jpg",
      title: "Open Pit Mine - Aerial View",
      type: "Mine",
    },
    {
      id: "dem2",
      url: "/3d-terrain-model-showing-elevation-changes-and-slo.jpg",
      title: "DEM - Slope Analysis",
      type: "DEM",
    },
    {
      id: "mine2",
      url: "/mining-quarry-with-heavy-equipment-and-access-road.jpg",
      title: "Mining Quarry - Ground Level",
      type: "Mine",
    },
  ]

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setDragActive(false)

      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        const file = e.dataTransfer.files[0]
        const reader = new FileReader()
        reader.onload = (event) => {
          onImageSelect(event.target?.result as string)
        }
        reader.readAsDataURL(file)
      }
    },
    [onImageSelect],
  )

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onload = (event) => {
        onImageSelect(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const selectSampleImage = (imageUrl: string) => {
    onImageSelect(imageUrl)
  }

  const clearSelection = () => {
    onImageSelect(null)
  }

  return (
    <div className="space-y-6">
      {!selectedImage ? (
        <>
          {/* File Upload Area */}
          <Card
            className={`border-2 border-dashed transition-colors ${
              dragActive ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <CardContent className="flex flex-col items-center justify-center py-12 text-center">
              <Upload className="w-12 h-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">Upload Mining Data</h3>
              <p className="text-muted-foreground mb-4 max-w-sm">
                Drag and drop your DEM images or mine photographs here, or click to browse
              </p>
              <input type="file" accept="image/*" onChange={handleFileInput} className="hidden" id="file-upload" />
              <Button asChild variant="outline">
                <label htmlFor="file-upload" className="cursor-pointer">
                  <ImageIcon className="w-4 h-4 mr-2" />
                  Choose File
                </label>
              </Button>
            </CardContent>
          </Card>

          {/* Sample Images */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Or select from sample data:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {sampleImages.map((image) => (
                <Card
                  key={image.id}
                  className="cursor-pointer hover:ring-2 hover:ring-primary transition-all duration-200 group"
                  onClick={() => selectSampleImage(image.url)}
                >
                  <CardContent className="p-3">
                    <div className="aspect-[4/3] bg-muted rounded-lg mb-3 overflow-hidden">
                      <img
                        src={image.url || "/placeholder.svg"}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{image.title}</p>
                      <p className="text-xs text-muted-foreground">{image.type}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </>
      ) : (
        /* Selected Image Display */
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Selected Image</h3>
              <Button variant="outline" size="sm" onClick={clearSelection}>
                <X className="w-4 h-4 mr-2" />
                Remove
              </Button>
            </div>
            <div className="aspect-[16/10] bg-muted rounded-lg overflow-hidden">
              <img
                src={selectedImage || "/placeholder.svg"}
                alt="Selected mining data"
                className="w-full h-full object-cover"
              />
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
