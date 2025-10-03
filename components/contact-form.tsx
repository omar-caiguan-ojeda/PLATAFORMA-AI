"use client"

import { useState } from "react"
import { ArrowRight, X, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useI18n } from "@/lib/i18n-context"

interface ContactFormProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const { t } = useI18n()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    package: "",
    message: "",
  })

  if (!isOpen) return null

  const totalSteps = 5

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = () => {
    console.log("[v0] Form submitted:", formData)
    // Here you would handle the form submission
    setStep(totalSteps + 1) // Show success message
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-2xl bg-background rounded-2xl shadow-2xl overflow-hidden">
        {/* Close Button */}
        <Button variant="ghost" size="icon" className="absolute top-4 right-4 z-10" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>

        {/* Progress Bar */}
        {step <= totalSteps && (
          <div className="h-2 bg-muted">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        )}

        <div className="p-8 md:p-12">
          {/* Success State */}
          {step === totalSteps + 1 && (
            <div className="text-center space-y-6 py-8">
              <div className="flex justify-center">
                <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h2 className="text-3xl font-bold">{t("form.success.title")}</h2>
              <p className="text-muted-foreground text-lg">{t("form.success.message")}</p>
              <Button onClick={onClose} size="lg">
                {t("form.success.close")}
              </Button>
            </div>
          )}

          {/* Step 1: Name */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">{t("form.step1.title")}</h2>
                <p className="text-muted-foreground">{t("form.step1.subtitle")}</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">{t("form.step1.label")}</Label>
                <Input
                  id="name"
                  placeholder={t("form.step1.placeholder")}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="text-lg p-6"
                  autoFocus
                />
              </div>
              <Button onClick={handleNext} disabled={!formData.name} size="lg" className="w-full">
                {t("form.next")} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          )}

          {/* Step 2: Email */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">{t("form.step2.title")}</h2>
                <p className="text-muted-foreground">{t("form.step2.subtitle")}</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{t("form.step2.label")}</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t("form.step2.placeholder")}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="text-lg p-6"
                  autoFocus
                />
              </div>
              <div className="flex gap-4">
                <Button onClick={handleBack} variant="outline" size="lg" className="flex-1 bg-transparent">
                  {t("form.back")}
                </Button>
                <Button onClick={handleNext} disabled={!formData.email} size="lg" className="flex-1">
                  {t("form.next")} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Company */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">{t("form.step3.title")}</h2>
                <p className="text-muted-foreground">{t("form.step3.subtitle")}</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">{t("form.step3.label")}</Label>
                <Input
                  id="company"
                  placeholder={t("form.step3.placeholder")}
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="text-lg p-6"
                  autoFocus
                />
              </div>
              <div className="flex gap-4">
                <Button onClick={handleBack} variant="outline" size="lg" className="flex-1 bg-transparent">
                  {t("form.back")}
                </Button>
                <Button onClick={handleNext} disabled={!formData.company} size="lg" className="flex-1">
                  {t("form.next")} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 4: Package Selection */}
          {step === 4 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">{t("form.step4.title")}</h2>
                <p className="text-muted-foreground">{t("form.step4.subtitle")}</p>
              </div>
              <RadioGroup
                value={formData.package}
                onValueChange={(value) => setFormData({ ...formData, package: value })}
              >
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 border rounded-lg p-4 hover:border-primary cursor-pointer">
                    <RadioGroupItem value="complete" id="complete" />
                    <Label htmlFor="complete" className="flex-1 cursor-pointer">
                      <div className="font-semibold">{t("form.step4.option1")}</div>
                      <div className="text-sm text-muted-foreground">{t("form.step4.option1.desc")}</div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 border rounded-lg p-4 hover:border-primary cursor-pointer">
                    <RadioGroupItem value="medusa" id="medusa" />
                    <Label htmlFor="medusa" className="flex-1 cursor-pointer">
                      <div className="font-semibold">{t("form.step4.option2")}</div>
                      <div className="text-sm text-muted-foreground">{t("form.step4.option2.desc")}</div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 border rounded-lg p-4 hover:border-primary cursor-pointer">
                    <RadioGroupItem value="ecommy" id="ecommy" />
                    <Label htmlFor="ecommy" className="flex-1 cursor-pointer">
                      <div className="font-semibold">{t("form.step4.option3")}</div>
                      <div className="text-sm text-muted-foreground">{t("form.step4.option3.desc")}</div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 border rounded-lg p-4 hover:border-primary cursor-pointer">
                    <RadioGroupItem value="datascience" id="datascience" />
                    <Label htmlFor="datascience" className="flex-1 cursor-pointer">
                      <div className="font-semibold">{t("form.step4.option4")}</div>
                      <div className="text-sm text-muted-foreground">{t("form.step4.option4.desc")}</div>
                    </Label>
                  </div>
                </div>
              </RadioGroup>
              <div className="flex gap-4">
                <Button onClick={handleBack} variant="outline" size="lg" className="flex-1 bg-transparent">
                  {t("form.back")}
                </Button>
                <Button onClick={handleNext} disabled={!formData.package} size="lg" className="flex-1">
                  {t("form.next")} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 5: Message */}
          {step === 5 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">{t("form.step5.title")}</h2>
                <p className="text-muted-foreground">{t("form.step5.subtitle")}</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">{t("form.step5.label")}</Label>
                <Textarea
                  id="message"
                  placeholder={t("form.step5.placeholder")}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="text-lg p-6 min-h-[150px]"
                  autoFocus
                />
              </div>
              <div className="flex gap-4">
                <Button onClick={handleBack} variant="outline" size="lg" className="flex-1 bg-transparent">
                  {t("form.back")}
                </Button>
                <Button onClick={handleSubmit} size="lg" className="flex-1">
                  {t("form.submit")} <Check className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
