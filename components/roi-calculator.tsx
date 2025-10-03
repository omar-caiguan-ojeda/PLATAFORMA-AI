"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export function ROICalculator() {
  const [monthlyOrders, setMonthlyOrders] = useState(1000)
  const [averageOrderValue, setAverageOrderValue] = useState(100)
  const [conversionIncrease, setConversionIncrease] = useState(15)

  const currentRevenue = monthlyOrders * averageOrderValue
  const newRevenue = currentRevenue * (1 + conversionIncrease / 100)
  const additionalRevenue = newRevenue - currentRevenue
  const annualIncrease = additionalRevenue * 12

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>ROI Calculator</CardTitle>
        <CardDescription>Calculate your potential revenue increase with Medusa JS + eCommy AI</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <div className="flex justify-between">
            <Label htmlFor="orders">Monthly Orders</Label>
            <span className="text-sm font-medium">{monthlyOrders.toLocaleString()}</span>
          </div>
          <Slider
            id="orders"
            min={100}
            max={10000}
            step={100}
            value={[monthlyOrders]}
            onValueChange={(value) => setMonthlyOrders(value[0])}
          />
        </div>

        <div className="space-y-3">
          <div className="flex justify-between">
            <Label htmlFor="aov">Average Order Value ($)</Label>
            <span className="text-sm font-medium">${averageOrderValue}</span>
          </div>
          <Slider
            id="aov"
            min={10}
            max={500}
            step={10}
            value={[averageOrderValue]}
            onValueChange={(value) => setAverageOrderValue(value[0])}
          />
        </div>

        <div className="space-y-3">
          <div className="flex justify-between">
            <Label htmlFor="conversion">Expected Conversion Increase (%)</Label>
            <span className="text-sm font-medium">{conversionIncrease}%</span>
          </div>
          <Slider
            id="conversion"
            min={5}
            max={50}
            step={5}
            value={[conversionIncrease]}
            onValueChange={(value) => setConversionIncrease(value[0])}
          />
        </div>

        <div className="pt-6 border-t space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Current Monthly Revenue</span>
            <span className="text-lg font-semibold">${currentRevenue.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">New Monthly Revenue</span>
            <span className="text-lg font-semibold text-green-600">${newRevenue.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center pt-4 border-t">
            <span className="font-medium">Additional Annual Revenue</span>
            <span className="text-2xl font-bold text-primary">${annualIncrease.toLocaleString()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
