"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, TrendingDown, TrendingUp } from "lucide-react"

interface HeatmapVisualizationProps {
  selectedImage: string | null
}

export function HeatmapVisualization({ selectedImage }: HeatmapVisualizationProps) {
  return (
    <div className="grid gap-6">
      {/* Main Heatmap */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-destructive" />
                Risk Heatmap Analysis
              </CardTitle>
              <CardDescription>
                Color-coded danger zones based on slope stability, water accumulation, and structural integrity
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Badge variant="destructive">High Risk</Badge>
              <Badge variant="outline" className="border-warning text-warning">
                Medium Risk
              </Badge>
              <Badge variant="outline" className="border-success text-success">
                Low Risk
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="relative heatmap-container aspect-[16/10] bg-muted rounded-lg overflow-hidden">
            {selectedImage && (
              <img
                src={selectedImage || "/placeholder.svg"}
                alt="Mining site analysis"
                className="w-full h-full object-cover"
              />
            )}
            {/* Heatmap Overlay */}
            <div className="heatmap-overlay">
              <svg className="w-full h-full" viewBox="0 0 400 250">
                {/* High Risk Areas - Red */}
                <circle cx="120" cy="80" r="25" fill="rgba(239, 68, 68, 0.7)" className="animate-pulse-danger" />
                <circle cx="300" cy="120" r="30" fill="rgba(239, 68, 68, 0.7)" className="animate-pulse-danger" />
                <circle cx="350" cy="180" r="20" fill="rgba(239, 68, 68, 0.7)" className="animate-pulse-danger" />

                {/* Medium Risk Areas - Orange */}
                <circle cx="80" cy="150" r="35" fill="rgba(251, 146, 60, 0.6)" />
                <circle cx="200" cy="200" r="25" fill="rgba(251, 146, 60, 0.6)" />
                <circle cx="250" cy="60" r="20" fill="rgba(251, 146, 60, 0.6)" />

                {/* Low Risk Areas - Green */}
                <circle cx="50" cy="50" r="15" fill="rgba(34, 197, 94, 0.5)" />
                <circle cx="180" cy="40" r="18" fill="rgba(34, 197, 94, 0.5)" />
                <circle cx="320" cy="40" r="12" fill="rgba(34, 197, 94, 0.5)" />
              </svg>
            </div>

            {/* Risk Zone Labels */}
            <div className="absolute top-4 left-4 space-y-2">
              <div className="bg-destructive/90 text-destructive-foreground px-2 py-1 rounded text-xs font-medium">
                Sector 2: Critical
              </div>
            </div>
            <div className="absolute top-1/3 right-8 space-y-2">
              <div className="bg-destructive/90 text-destructive-foreground px-2 py-1 rounded text-xs font-medium">
                Sector 5: Critical
              </div>
            </div>
            <div className="absolute bottom-16 right-4 space-y-2">
              <div className="bg-destructive/90 text-destructive-foreground px-2 py-1 rounded text-xs font-medium">
                Sector 7: Critical
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-6 p-4 bg-muted/50 rounded-lg">
            <h4 className="font-semibold mb-3">Risk Level Legend</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-destructive rounded-full"></div>
                <div>
                  <p className="font-medium text-destructive">Critical Risk</p>
                  <p className="text-muted-foreground">Immediate evacuation required</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-warning rounded-full"></div>
                <div>
                  <p className="font-medium text-warning">Medium Risk</p>
                  <p className="text-muted-foreground">Enhanced monitoring needed</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-success rounded-full"></div>
                <div>
                  <p className="font-medium text-success">Low Risk</p>
                  <p className="text-muted-foreground">Normal operations safe</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Risk Zones Detail */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-destructive/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm text-destructive flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Sector 2
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-medium">Risk Level:</span> Critical
              </p>
              <p>
                <span className="font-medium">Issue:</span> Slope Instability
              </p>
              <p>
                <span className="font-medium">Confidence:</span> 94%
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-destructive/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm text-destructive flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Sector 5
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-medium">Risk Level:</span> Critical
              </p>
              <p>
                <span className="font-medium">Issue:</span> Water Accumulation
              </p>
              <p>
                <span className="font-medium">Confidence:</span> 87%
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-destructive/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm text-destructive flex items-center gap-2">
              <TrendingDown className="w-4 h-4" />
              Sector 7
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-medium">Risk Level:</span> Critical
              </p>
              <p>
                <span className="font-medium">Issue:</span> Access Route Danger
              </p>
              <p>
                <span className="font-medium">Confidence:</span> 91%
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
