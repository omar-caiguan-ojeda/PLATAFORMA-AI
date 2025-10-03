"use client"

import { Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n-context"

export function LanguageSwitcher() {
  const { language, setLanguage } = useI18n()

  return (
    <Button variant="ghost" size="sm" onClick={() => setLanguage(language === "en" ? "es" : "en")} className="gap-2">
      <Languages className="h-4 w-4" />
      <span className="font-medium">{language === "en" ? "ES" : "EN"}</span>
    </Button>
  )
}
