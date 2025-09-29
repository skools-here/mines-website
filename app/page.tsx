"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { HeatmapVisualization } from "@/components/heatmap-visualization"
import { SafetyMetrics } from "@/components/safety-metrics"
import { RiskAnalysisCharts } from "@/components/risk-analysis-charts"
import { AlertTriangle, Shield, Activity, MapPin, Zap } from "lucide-react"

export default function MiningSafetyPlatform() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisComplete, setAnalysisComplete] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

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

  const handlePredict = async () => {
    setIsAnalyzing(true)

    // Simulate analysis process
    await new Promise((resolve) => setTimeout(resolve, 3000))

    setIsAnalyzing(false)
    setAnalysisComplete(true)
  }

  const resetAnalysis = () => {
    setAnalysisComplete(false)
    setSelectedImage(null)
  }

  const selectImage = (imageUrl: string) => {
    setSelectedImage(imageUrl)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                <Activity className="w-3 h-3 mr-1" />
                System Active
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {!analysisComplete ? (
          /* Upload and Analysis Section */
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-balance">Advanced Mining Safety Analysis</h2>
              <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
                Select a mining image below to analyze potential hazards and safety risks using AI-powered analysis
              </p>
            </div>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Mining Data Samples
                </CardTitle>
                <CardDescription>Select an image to analyze for safety hazards</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {sampleImages.map((image) => (
                    <Card
                      key={image.id}
                      className={`cursor-pointer transition-all duration-200 group ${
                        selectedImage === image.url
                          ? "ring-2 ring-primary bg-primary/5"
                          : "hover:ring-2 hover:ring-primary/50"
                      }`}
                      onClick={() => selectImage(image.url)}
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
              </CardContent>
            </Card>

            {selectedImage && (
              <Card className="border-primary/20 bg-primary/5 animate-scale-in">
                <CardHeader>
                  <CardTitle>Selected Image</CardTitle>
                  <CardDescription>Ready for safety analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-[16/10] bg-muted rounded-lg overflow-hidden mb-4">
                    <img
                      src={selectedImage || "/placeholder.svg"}
                      alt="Selected mining data"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedImage && (
              <div className="flex justify-center animate-fade-in">
                <Button
                  onClick={handlePredict}
                  disabled={isAnalyzing}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {isAnalyzing ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground mr-2"></div>
                      Analyzing Safety Risks...
                    </>
                  ) : (
                    <>
                      <Zap className="w-5 h-5 mr-2" />
                      Predict Safety Hazards
                    </>
                  )}
                </Button>
              </div>
            )}

            {isAnalyzing && (
              <Card className="border-primary/20 bg-primary/5 animate-fade-in">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Analysis Progress</span>
                      <span className="text-sm text-muted-foreground">Processing...</span>
                    </div>
                    <Progress value={75} className="h-2" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                        DEM Processing Complete
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-warning rounded-full animate-pulse"></div>
                        Analyzing Slope Stability
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                        Generating Risk Maps
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        ) : (
          /* Results Dashboard */
          <div className="space-y-8 animate-slide-up">
            {/* Alert Banner */}
            <Alert className="border-destructive/20 bg-destructive/5">
              <AlertTriangle className="h-4 w-4 text-destructive animate-pulse-danger" />
              <AlertTitle className="text-destructive">High Risk Areas Detected</AlertTitle>
              <AlertDescription className="text-destructive/80">
                Critical safety hazards identified in sectors 2, 5, and 7. Immediate attention required.
              </AlertDescription>
            </Alert>

            {/* Action Bar */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Safety Analysis Results</h2>
                <p className="text-muted-foreground">Generated on {new Date().toLocaleDateString()}</p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" onClick={resetAnalysis}>
                  New Analysis
                </Button>
                <Button>Export Report</Button>
              </div>
            </div>

            {/* Main Dashboard */}
            <Tabs defaultValue="heatmap" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4 bg-muted/50">
                <TabsTrigger value="heatmap">Risk Heatmap</TabsTrigger>
                <TabsTrigger value="metrics">Safety Metrics</TabsTrigger>
                <TabsTrigger value="analysis">Risk Analysis</TabsTrigger>
                <TabsTrigger value="recommendations">Actions</TabsTrigger>
              </TabsList>

              <TabsContent value="heatmap" className="space-y-6">
                <HeatmapVisualization selectedImage={selectedImage} />
              </TabsContent>

              <TabsContent value="metrics" className="space-y-6">
                <SafetyMetrics />
              </TabsContent>

              <TabsContent value="analysis" className="space-y-6">
                <RiskAnalysisCharts />
              </TabsContent>

              <TabsContent value="recommendations" className="space-y-6">
                <div className="grid gap-6">
                  <Card className="border-destructive/20">
                    <CardHeader>
                      <CardTitle className="text-destructive flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        Critical Actions Required
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3 p-3 bg-destructive/5 rounded-lg">
                          <div className="w-2 h-2 bg-destructive rounded-full mt-2"></div>
                          <div>
                            <p className="font-medium">Sector 2: Slope Instability</p>
                            <p className="text-sm text-muted-foreground">
                              Immediate evacuation and reinforcement required
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-warning/5 rounded-lg">
                          <div className="w-2 h-2 bg-warning rounded-full mt-2"></div>
                          <div>
                            <p className="font-medium">Sector 5: Water Accumulation</p>
                            <p className="text-sm text-muted-foreground">Install drainage systems within 48 hours</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-destructive/5 rounded-lg">
                          <div className="w-2 h-2 bg-destructive rounded-full mt-2"></div>
                          <div>
                            <p className="font-medium">Sector 7: Equipment Access Risk</p>
                            <p className="text-sm text-muted-foreground">Restrict heavy machinery access immediately</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </div>
    </div>
  )
}
