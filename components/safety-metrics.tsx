"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Shield, Activity, Users, Clock, TrendingDown } from "lucide-react"

export function SafetyMetrics() {
  const metrics = [
    {
      title: "Overall Safety Score",
      value: 34,
      max: 100,
      status: "critical",
      icon: Shield,
      description: "Based on current risk assessment",
    },
    {
      title: "Slope Stability Index",
      value: 23,
      max: 100,
      status: "critical",
      icon: TrendingDown,
      description: "Multiple unstable zones detected",
    },
    {
      title: "Equipment Safety Rating",
      value: 67,
      max: 100,
      status: "warning",
      icon: Activity,
      description: "Some areas require restricted access",
    },
    {
      title: "Personnel Risk Level",
      value: 89,
      max: 100,
      status: "critical",
      icon: Users,
      description: "High risk to worker safety",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "critical":
        return "text-destructive"
      case "warning":
        return "text-warning"
      case "success":
        return "text-success"
      default:
        return "text-muted-foreground"
    }
  }

  const getProgressColor = (status: string) => {
    switch (status) {
      case "critical":
        return "bg-destructive"
      case "warning":
        return "bg-warning"
      case "success":
        return "bg-success"
      default:
        return "bg-primary"
    }
  }

  return (
    <div className="space-y-6">
      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon
          return (
            <Card
              key={index}
              className={`${metric.status === "critical" ? "border-destructive/20 bg-destructive/5" : ""}`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Icon className={`w-5 h-5 ${getStatusColor(metric.status)}`} />
                  <Badge variant={metric.status === "critical" ? "destructive" : "outline"}>{metric.status}</Badge>
                </div>
                <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`text-2xl font-bold ${getStatusColor(metric.status)}`}>{metric.value}</span>
                    <span className="text-sm text-muted-foreground">/{metric.max}</span>
                  </div>
                  <Progress value={metric.value} className="h-2" />
                  <p className="text-xs text-muted-foreground">{metric.description}</p>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Detailed Safety Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-destructive" />
              Critical Risk Factors
            </CardTitle>
            <CardDescription>Primary safety concerns requiring immediate attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 bg-destructive/5 rounded-lg">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2 animate-pulse-danger"></div>
                <div className="flex-1">
                  <p className="font-medium text-destructive">Slope Failure Risk</p>
                  <p className="text-sm text-muted-foreground">94% probability in Sector 2</p>
                  <div className="mt-2">
                    <Progress value={94} className="h-1" />
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-destructive/5 rounded-lg">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2 animate-pulse-danger"></div>
                <div className="flex-1">
                  <p className="font-medium text-destructive">Water Accumulation</p>
                  <p className="text-sm text-muted-foreground">87% risk in Sector 5</p>
                  <div className="mt-2">
                    <Progress value={87} className="h-1" />
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-destructive/5 rounded-lg">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2 animate-pulse-danger"></div>
                <div className="flex-1">
                  <p className="font-medium text-destructive">Equipment Access Danger</p>
                  <p className="text-sm text-muted-foreground">91% risk in Sector 7</p>
                  <div className="mt-2">
                    <Progress value={91} className="h-1" />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Time-Critical Actions
            </CardTitle>
            <CardDescription>Immediate response timeline for safety measures</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-destructive/5 rounded-lg">
                <div className="flex items-center justify-center w-8 h-8 bg-destructive text-destructive-foreground rounded-full text-xs font-bold">
                  0h
                </div>
                <div>
                  <p className="font-medium">Immediate Evacuation</p>
                  <p className="text-sm text-muted-foreground">Clear all personnel from critical zones</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-warning/5 rounded-lg">
                <div className="flex items-center justify-center w-8 h-8 bg-warning text-warning-foreground rounded-full text-xs font-bold">
                  2h
                </div>
                <div>
                  <p className="font-medium">Equipment Relocation</p>
                  <p className="text-sm text-muted-foreground">Move heavy machinery to safe zones</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                <div className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-xs font-bold">
                  24h
                </div>
                <div>
                  <p className="font-medium">Structural Assessment</p>
                  <p className="text-sm text-muted-foreground">Complete engineering evaluation</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center justify-center w-8 h-8 bg-muted text-muted-foreground rounded-full text-xs font-bold">
                  48h
                </div>
                <div>
                  <p className="font-medium">Remediation Planning</p>
                  <p className="text-sm text-muted-foreground">Develop long-term safety solutions</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
