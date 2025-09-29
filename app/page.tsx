"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Shield, Activity, MapPin, Zap } from "lucide-react"
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar
} from "recharts"

export default function MiningSafetyPlatform() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisComplete, setAnalysisComplete] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const sampleImages = [
    {
      id: "mine1",
      url: "/open-pit-copper-mine-aerial-view-with-terraced-lev.jpg",
      title: "Open Pit Mine - Aerial View",
      type: "Mine",
    },
  ]

  const handlePredict = async () => {
    setIsAnalyzing(true)
    await new Promise((resolve) => setTimeout(resolve, 3000)) // fake delay
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

  // Example graph data (hardcoded)
  const riskData = [
    { year: 2018, incidents: 12, severity: 30 },
    { year: 2019, incidents: 18, severity: 45 },
    { year: 2020, incidents: 9, severity: 20 },
    { year: 2021, incidents: 14, severity: 35 },
    { year: 2022, incidents: 20, severity: 50 },
  ]

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
                <h1 className="text-xl font-bold text-foreground">Mining Safety Platform</h1>
                <p className="text-sm text-muted-foreground">AI-Powered Hazard Detection</p>
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
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        ) : (
          /* Show result image + graphs */
          <div className="space-y-6 animate-fade-in text-center">
            <h2 className="text-2xl font-bold">Analysis Complete</h2>

            {/* Hardcoded Result Image */}
            <div className="aspect-[16/10] max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
              <img
                src="/mine.jpg"
                alt="Analysis Result"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Graph Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Incident Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={riskData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="incidents" stroke="#8884d8" />
                      <Line type="monotone" dataKey="severity" stroke="#82ca9d" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Risk Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={riskData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="incidents" fill="#8884d8" />
                      <Bar dataKey="severity" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Button variant="outline" onClick={resetAnalysis}>
              New Analysis
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
