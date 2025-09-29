"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts"
import { TrendingUp, BarChart3, PieChartIcon, Activity } from "lucide-react"

export function RiskAnalysisCharts() {
  // Sample data for different charts
  const riskByZone = [
    { zone: "Sector 1", risk: 25, incidents: 2 },
    { zone: "Sector 2", risk: 94, incidents: 8 },
    { zone: "Sector 3", risk: 45, incidents: 3 },
    { zone: "Sector 4", risk: 32, incidents: 1 },
    { zone: "Sector 5", risk: 87, incidents: 6 },
    { zone: "Sector 6", risk: 38, incidents: 2 },
    { zone: "Sector 7", risk: 91, incidents: 7 },
    { zone: "Sector 8", risk: 28, incidents: 1 },
  ]

  const riskTrend = [
    { time: "00:00", overall: 45, slope: 35, water: 25, equipment: 55 },
    { time: "04:00", overall: 52, slope: 48, water: 32, equipment: 58 },
    { time: "08:00", overall: 67, slope: 72, water: 45, equipment: 62 },
    { time: "12:00", overall: 78, slope: 85, water: 67, equipment: 65 },
    { time: "16:00", overall: 85, slope: 91, water: 78, equipment: 68 },
    { time: "20:00", overall: 89, slope: 94, water: 87, equipment: 71 },
    { time: "24:00", overall: 91, slope: 94, water: 89, equipment: 73 },
  ]

  const riskDistribution = [
    { name: "Slope Instability", value: 45, color: "#ef4444" },
    { name: "Water Accumulation", value: 25, color: "#f97316" },
    { name: "Equipment Hazards", value: 15, color: "#eab308" },
    { name: "Access Routes", value: 10, color: "#22c55e" },
    { name: "Other Factors", value: 5, color: "#6b7280" },
  ]

  const safetyMetrics = [
    { metric: "Personnel at Risk", current: 45, previous: 12, change: 275 },
    { metric: "Equipment Exposure", current: 23, previous: 18, change: 28 },
    { metric: "Critical Zones", current: 3, previous: 1, change: 200 },
    { metric: "Response Time", current: 15, previous: 25, change: -40 },
  ]

  return (
    <div className="space-y-6">
      {/* Risk Level by Zone */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-primary" />
            Risk Assessment by Mining Zone
          </CardTitle>
          <CardDescription>
            Current risk levels and historical incident data across all operational sectors
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              risk: {
                label: "Risk Level (%)",
                color: "hsl(var(--chart-1))",
              },
              incidents: {
                label: "Past Incidents",
                color: "hsl(var(--chart-2))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={riskByZone}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="zone" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="risk" fill="var(--color-risk)" name="Risk Level (%)" />
                <Bar dataKey="incidents" fill="var(--color-incidents)" name="Past Incidents" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Risk Trend Over Time */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-destructive" />
            Risk Escalation Timeline
          </CardTitle>
          <CardDescription>24-hour progression of safety risks across different hazard categories</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              overall: {
                label: "Overall Risk",
                color: "hsl(var(--chart-1))",
              },
              slope: {
                label: "Slope Stability",
                color: "hsl(var(--chart-2))",
              },
              water: {
                label: "Water Hazards",
                color: "hsl(var(--chart-3))",
              },
              equipment: {
                label: "Equipment Safety",
                color: "hsl(var(--chart-4))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={riskTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area
                  type="monotone"
                  dataKey="overall"
                  stackId="1"
                  stroke="var(--color-overall)"
                  fill="var(--color-overall)"
                  fillOpacity={0.6}
                />
                <Area
                  type="monotone"
                  dataKey="slope"
                  stackId="2"
                  stroke="var(--color-slope)"
                  fill="var(--color-slope)"
                  fillOpacity={0.6}
                />
                <Area
                  type="monotone"
                  dataKey="water"
                  stackId="3"
                  stroke="var(--color-water)"
                  fill="var(--color-water)"
                  fillOpacity={0.6}
                />
                <Area
                  type="monotone"
                  dataKey="equipment"
                  stackId="4"
                  stroke="var(--color-equipment)"
                  fill="var(--color-equipment)"
                  fillOpacity={0.6}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Risk Distribution and Safety Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChartIcon className="w-5 h-5 text-primary" />
              Risk Factor Distribution
            </CardTitle>
            <CardDescription>Breakdown of primary safety hazards by category</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                value: {
                  label: "Risk Percentage",
                },
              }}
              className="h-[250px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={riskDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {riskDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
            <div className="mt-4 space-y-2">
              {riskDistribution.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span>{item.name}</span>
                  </div>
                  <span className="font-medium">{item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-primary" />
              Safety Performance Metrics
            </CardTitle>
            <CardDescription>Key performance indicators compared to previous period</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {safetyMetrics.map((metric, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium">{metric.metric}</p>
                    <p className="text-2xl font-bold text-primary">{metric.current}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">vs Previous</p>
                    <p className={`text-sm font-medium ${metric.change > 0 ? "text-destructive" : "text-success"}`}>
                      {metric.change > 0 ? "+" : ""}
                      {metric.change}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
