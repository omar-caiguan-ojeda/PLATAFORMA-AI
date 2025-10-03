"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { TrendingUp, ShoppingCart, MessageSquare } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

export function AIImpactCalculator() {
  const { t, language } = useI18n()
  const [monthlyVisitors, setMonthlyVisitors] = useState(10000)
  const [avgOrderValue, setAvgOrderValue] = useState(100)
  const [conversionRate, setConversionRate] = useState(2)

  // AI Impact Metrics (based on real industry data)
  const conversionImprovement = 12 // +12%
  const ticketsAutomated = 66 // 66%
  const aovIncrease = 5 // +5%

  // Calculations
  const currentRevenue = monthlyVisitors * (conversionRate / 100) * avgOrderValue
  const newConversionRate = conversionRate * (1 + conversionImprovement / 100)
  const newAOV = avgOrderValue * (1 + aovIncrease / 100)
  const newRevenue = monthlyVisitors * (newConversionRate / 100) * newAOV
  const revenueIncrease = newRevenue - currentRevenue
  const supportTickets = monthlyVisitors * 0.15 // Assume 15% of visitors need support
  const automatedTickets = supportTickets * (ticketsAutomated / 100)

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat(language === "es" ? "es-ES" : "en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat(language === "es" ? "es-ES" : "en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div className="max-w-5xl mx-auto">
      <Card className="border-2">
        <CardHeader className="text-center space-y-2 pb-8">
          <CardTitle className="text-2xl md:text-3xl">
            {language === "es" ? "Calculadora de Impacto AI" : "AI Impact Calculator"}
          </CardTitle>
          <p className="text-muted-foreground">
            {language === "es"
              ? "Descubre cuánto valor puede generar un agente AI en tu eCommerce"
              : "Discover how much value an AI agent can generate in your eCommerce"}
          </p>
          <p className="text-sm text-muted-foreground">
            {language === "es"
              ? "Cálculos basados en datos reales de la industria"
              : "Calculations based on real industry data"}
          </p>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Input Sliders */}
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium">
                  {language === "es" ? "Visitantes mensuales" : "Monthly visitors"}
                </label>
                <span className="text-lg font-bold text-primary">{formatNumber(monthlyVisitors)}</span>
              </div>
              <Slider
                value={[monthlyVisitors]}
                onValueChange={(value) => setMonthlyVisitors(value[0])}
                min={1000}
                max={100000}
                step={1000}
                className="w-full"
              />
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium">
                  {language === "es" ? "Valor promedio de orden (AOV)" : "Average Order Value (AOV)"}
                </label>
                <span className="text-lg font-bold text-primary">{formatCurrency(avgOrderValue)}</span>
              </div>
              <Slider
                value={[avgOrderValue]}
                onValueChange={(value) => setAvgOrderValue(value[0])}
                min={20}
                max={500}
                step={10}
                className="w-full"
              />
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium">
                  {language === "es" ? "Tasa de conversión actual" : "Current conversion rate"}
                </label>
                <span className="text-lg font-bold text-primary">{conversionRate}%</span>
              </div>
              <Slider
                value={[conversionRate]}
                onValueChange={(value) => setConversionRate(value[0])}
                min={0.5}
                max={10}
                step={0.5}
                className="w-full"
              />
            </div>
          </div>

          {/* Impact Metrics */}
          <div className="grid md:grid-cols-3 gap-4 pt-6 border-t">
            <div className="text-center p-6 bg-green-50 dark:bg-green-950/20 rounded-lg border-2 border-green-200 dark:border-green-900">
              <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-green-600 mb-1">+{conversionImprovement}%</div>
              <div className="text-sm text-muted-foreground">
                {language === "es" ? "Mejora en conversión" : "Conversion improvement"}
              </div>
            </div>

            <div className="text-center p-6 bg-blue-50 dark:bg-blue-950/20 rounded-lg border-2 border-blue-200 dark:border-blue-900">
              <MessageSquare className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-blue-600 mb-1">{ticketsAutomated}%</div>
              <div className="text-sm text-muted-foreground">
                {language === "es" ? "Tickets automatizados" : "Automated tickets"}
              </div>
            </div>

            <div className="text-center p-6 bg-purple-50 dark:bg-purple-950/20 rounded-lg border-2 border-purple-200 dark:border-purple-900">
              <ShoppingCart className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-purple-600 mb-1">+{aovIncrease}%</div>
              <div className="text-sm text-muted-foreground">
                {language === "es" ? "Aumento en AOV" : "AOV increase"}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4 pt-6 border-t">
            <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
              <span className="font-medium">
                {language === "es" ? "Ingresos mensuales actuales" : "Current monthly revenue"}
              </span>
              <span className="text-xl font-bold">{formatCurrency(currentRevenue)}</span>
            </div>

            <div className="flex justify-between items-center p-4 bg-primary/10 rounded-lg border-2 border-primary/20">
              <span className="font-medium">
                {language === "es" ? "Ingresos proyectados con AI" : "Projected revenue with AI"}
              </span>
              <span className="text-xl font-bold text-primary">{formatCurrency(newRevenue)}</span>
            </div>

            <div className="flex justify-between items-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg border-2 border-green-500">
              <div>
                <div className="font-bold text-lg mb-1">
                  {language === "es" ? "Aumento mensual de ingresos" : "Monthly revenue increase"}
                </div>
                <div className="text-sm text-muted-foreground">
                  {language === "es"
                    ? `${formatNumber(automatedTickets)} tickets automatizados/mes`
                    : `${formatNumber(automatedTickets)} automated tickets/month`}
                </div>
              </div>
              <span className="text-3xl font-bold text-green-600">+{formatCurrency(revenueIncrease)}</span>
            </div>

            <div className="text-center pt-4">
              <p className="text-sm text-muted-foreground">
                {language === "es"
                  ? `Esto representa un aumento anual de ${formatCurrency(revenueIncrease * 12)}`
                  : `This represents an annual increase of ${formatCurrency(revenueIncrease * 12)}`}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
