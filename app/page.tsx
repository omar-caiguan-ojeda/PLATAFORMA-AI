"use client"

import {
  ArrowRight,
  Check,
  Code2,
  Zap,
  Shield,
  Sparkles,
  Package,
  Rocket,
  Star,
  Globe,
  TrendingUp,
  Search,
  MessageSquare,
  BarChart3,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { TypewriterEffect } from "@/components/typewriter-effect"
import { AnimatedCounter } from "@/components/animated-counter"
import { InfiniteMarquee } from "@/components/infinite-marquee"
import { AIImpactCalculator } from "@/components/ai-impact-calculator"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ContactForm } from "@/components/contact-form"
import { ImageModal } from "@/components/image-modal"
import { useI18n } from "@/lib/i18n-context"
import { useState } from "react"
import { ChatWidget } from "@/components/chat-widget" // Import ChatWidget
import { MobileNav } from "@/components/mobile-nav"

export default function Home() {
  const { t, language } = useI18n()
  const [isFormOpen, setIsFormOpen] = useState(false)

  const typewriterWords =
    language === "en"
      ? ["e-commerce", "retail", "shopping", "online stores"]
      : ["e-commerce", "comercio", "tiendas online", "ventas"]

  const features = [
    {
      icon: Code2,
      title: t("feature.headless.title"),
      description: t("feature.headless.desc"),
    },
    {
      icon: Zap,
      title: t("feature.fast.title"),
      description: t("feature.fast.desc"),
    },
    {
      icon: Shield,
      title: t("feature.security.title"),
      description: t("feature.security.desc"),
    },
    {
      icon: Package,
      title: t("feature.modular.title"),
      description: t("feature.modular.desc"),
    },
    {
      icon: Sparkles,
      title: t("feature.ai.title"),
      description: t("feature.ai.desc"),
    },
    {
      icon: Rocket,
      title: t("feature.deploy.title"),
      description: t("feature.deploy.desc"),
    },
  ]

  const aiFeatures = [
    {
      icon: Search,
      title: t("ai.search.title"),
      description: t("ai.search.desc"),
    },
    {
      icon: TrendingUp,
      title: t("ai.conversion.title"),
      description: t("ai.conversion.desc"),
    },
    {
      icon: MessageSquare,
      title: t("ai.support.title"),
      description: t("ai.support.desc"),
    },
    {
      icon: Sparkles,
      title: t("ai.recommendations.title"),
      description: t("ai.recommendations.desc"),
    },
    {
      icon: BarChart3,
      title: t("ai.pricing.title"),
      description: t("ai.pricing.desc"),
    },
    {
      icon: Globe,
      title: t("ai.nlp.title"),
      description: t("ai.nlp.desc"),
    },
    {
      icon: Search,
      title: t("ai.semantic.title"),
      description: t("ai.semantic.desc"),
    },
    {
      icon: Package,
      title: t("ai.tracking.title"),
      description: t("ai.tracking.desc"),
    },
    {
      icon: BarChart3,
      title: t("ai.comparison.title"),
      description: t("ai.comparison.desc"),
    },
  ]

  const stats = [
    { value: 50000, suffix: "+", label: t("stats.stores") },
    { value: 99.9, suffix: "%", label: t("stats.uptime") },
    { value: 300, suffix: "ms", label: t("stats.response") },
    { value: 40, suffix: "%", label: t("stats.revenue") },
  ]

  const techStack = ["Next.js", "React", "Node.js", "PostgreSQL", "Redis", "TypeScript", "Stripe", "Vercel"]

  const testimonials = [
    {
      name: t("testimonial1.name"),
      role: t("testimonial1.role"),
      content: t("testimonial1.content"),
      rating: 5,
    },
    {
      name: t("testimonial2.name"),
      role: t("testimonial2.role"),
      content: t("testimonial2.content"),
      rating: 5,
    },
    {
      name: t("testimonial3.name"),
      role: t("testimonial3.role"),
      content: t("testimonial3.content"),
      rating: 5,
    },
  ]

  const faqs = [
    {
      question: t("faq.q1"),
      answer: t("faq.a1"),
    },
    {
      question: t("faq.q2"),
      answer: t("faq.a2"),
    },
    {
      question: t("faq.q3"),
      answer: t("faq.a3"),
    },
    {
      question: t("faq.q4"),
      answer: t("faq.a4"),
    },
    {
      question: t("faq.q5"),
      answer: t("faq.a5"),
    },
    {
      question: t("faq.q6"),
      answer: t("faq.a6"),
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Package className="h-6 w-6" />
            <span className="text-xl font-bold">Medusa JS</span>
            <Badge variant="secondary" className="ml-2 hidden sm:inline-flex">
              Powered by eCommy AI
            </Badge>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              {t("nav.features")}
            </a>
            <a href="#ai" className="text-sm font-medium hover:text-primary transition-colors">
              {t("nav.ai")}
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
              {t("nav.pricing")}
            </a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
              {t("nav.faq")}
            </a>
          </nav>
          {/* <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Button variant="ghost" size="sm" onClick={() => setIsFormOpen(true)}>
              {t("nav.signin")}
            </Button>
            <Button size="sm" onClick={() => setIsFormOpen(true)}>
              {t("nav.getstarted")} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div> */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <LanguageSwitcher />
              <Button variant="ghost" size="sm" onClick={() => setIsFormOpen(true)}>
                {t("nav.signin")}
              </Button>
              <Button size="sm" onClick={() => setIsFormOpen(true)}>
                {t("nav.getstarted")} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <MobileNav isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-24 md:py-32">
        <div className="container mx-auto max-w-4xl text-center space-y-8 px-4">
          <Badge variant="outline" className="px-4 py-1">
            <Sparkles className="h-3 w-3 mr-2 inline" />
            {t("hero.badge")}
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            {t("hero.title")} <TypewriterEffect words={typewriterWords} className="text-primary" />
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">{t("hero.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg" onClick={() => setIsFormOpen(true)}>
              {t("hero.cta.trial")} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg bg-transparent" onClick={() => setIsFormOpen(true)}>
              {t("hero.cta.demo")}
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-muted-foreground pt-8">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-600" />
              <span>{t("hero.check.nocard")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-600" />
              <span>{t("hero.check.trial")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-600" />
              <span>{t("hero.check.cancel")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Ticker */}
      <section className="w-full border-y bg-muted/50 py-8">
        <div className="container mx-auto">
          <p className="text-center text-sm text-muted-foreground mb-6">{t("social.trusted")}</p>
          <InfiniteMarquee speed={30}>
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex items-center justify-center px-8 py-4 bg-background rounded-lg border min-w-[150px]"
              >
                <span className="font-semibold text-lg">{tech}</span>
              </div>
            ))}
          </InfiniteMarquee>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-primary">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2500} />
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* eCommy AI Widget Section */}
      <section className="w-full bg-gradient-to-b from-primary/5 to-background py-24">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-4 py-1">
              <MessageSquare className="h-3 w-3 mr-2 inline" />
              {t("widget.badge")}
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-balance">{t("widget.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">{t("widget.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Code2,
                title: t("widget.feature1.title"),
                description: t("widget.feature1.desc"),
              },
              {
                icon: MessageSquare,
                title: t("widget.feature2.title"),
                description: t("widget.feature2.desc"),
              },
              {
                icon: Zap,
                title: t("widget.feature3.title"),
                description: t("widget.feature3.desc"),
              },
              {
                icon: Sparkles,
                title: t("widget.feature4.title"),
                description: t("widget.feature4.desc"),
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-3 p-6 bg-background rounded-lg border"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto overflow-visible">
            <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-6 md:p-12 border-2 shadow-xl">
              <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-100/[0.04] rounded-2xl" />
              <div className="relative">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {language === "en" ? "See it in action" : "Míralo en acción"}
                  </h3>
                  <p className="text-muted-foreground">
                    {language === "en"
                      ? "The widget integrates seamlessly into your store interface"
                      : "El widget se integra perfectamente en la interfaz de tu tienda"}
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-950 rounded-xl shadow-2xl overflow-visible border-2">
                  {/* Browser mockup header */}
                  <div className="bg-slate-200 dark:bg-slate-800 px-4 py-3 flex items-center gap-2 border-b">
                    <div className="flex gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-500" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500" />
                      <div className="h-3 w-3 rounded-full bg-green-500" />
                    </div>
                    <div className="flex-1 mx-4 bg-white dark:bg-slate-900 rounded px-3 py-1 text-xs text-muted-foreground">
                      {language === "en" ? "Your eCommerce Store" : "Tu Tienda eCommerce"}
                    </div>
                  </div>

                  {/* Store content mockup */}
                  <div className="p-4 md:p-8 flex flex-col justify-between min-h-[500px]">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Package className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg">
                            {language === "en" ? "Your eCommerce Store" : "Tu Tienda eCommerce"}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {language === "en" ? "Widget integrates seamlessly" : "El widget se integra perfectamente"}
                          </p>
                        </div>
                      </div>
                      <div className="space-y-4 mb-8">
                        <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-3/4" />
                        <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-full" />
                        <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-5/6" />
                      </div>
                    </div>

                    {/* Chat Widget Visual */}
                    <div className="self-end w-full flex justify-end pr-4 pb-4">
                      <div className="relative w-48 sm:w-56 md:w-72">
                        {/* Chat bubble */}
                        <div className="mb-2 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border-2 border-primary/20 w-full overflow-hidden">
                          <div className="bg-primary text-primary-foreground p-2 sm:p-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-white/20 flex items-center justify-center">
                                <MessageSquare className="h-3 w-3" />
                              </div>
                              <div>
                                <div className="font-semibold text-xs">eCommy AI</div>
                                <div className="text-[10px] opacity-90">
                                  {language === "en" ? "Online now" : "En línea"}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="p-2 sm:p-3 space-y-2 max-h-36 sm:max-h-40 overflow-y-auto">
                            <div className="flex gap-2">
                              <div className="bg-primary/10 rounded-2xl rounded-tl-none p-1.5 sm:p-2 max-w-[75%]">
                                <p className="text-[10px] sm:text-xs">
                                  {language === "en"
                                    ? "Hi! How can I help you today?"
                                    : "¡Hola! ¿Cómo puedo ayudarte hoy?"}
                                </p>
                              </div>
                            </div>
                            <div className="flex gap-1 flex-wrap">
                              <button className="text-[8px] sm:text-[9px] bg-muted hover:bg-muted/80 rounded-full px-1.5 py-0.5 sm:px-2 sm:py-1 transition-colors">
                                {language === "en" ? "Track order" : "Rastrear pedido"}
                              </button>
                              <button className="text-[8px] sm:text-[9px] bg-muted hover:bg-muted/80 rounded-full px-1.5 py-0.5 sm:px-2 sm:py-1 transition-colors">
                                {language === "en" ? "Find products" : "Buscar productos"}
                              </button>
                            </div>
                          </div>
                          <div className="p-2 border-t">
                            <div className="flex items-center gap-1 bg-muted rounded-full px-2 py-1">
                              <input
                                type="text"
                                placeholder={language === "en" ? "Type a message..." : "Escribe un mensaje..."}
                                className="flex-1 bg-transparent text-[10px] outline-none"
                                disabled
                              />
                              <ArrowRight className="h-2.5 w-2.5 text-muted-foreground" />
                            </div>
                          </div>
                        </div>
                        {/* Chat button eliminado a petición del usuario */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-24">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-balance">{t("features.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">{t("features.subtitle")}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Medusa Admin Section */}
      <section className="w-full bg-muted/50 py-24">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-4 py-1">
              <Shield className="h-3 w-3 mr-2 inline" />
              {t("admin.badge")}
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-balance">{t("admin.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">{t("admin.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
            <ImageModal
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/admin-hero-image-CS62wUoHRcqPHt5k0V5fcjRDWr5iI6.webp"
              alt="Medusa Admin Product Management"
            >
              <div className="relative rounded-xl overflow-hidden border-2 shadow-lg hover:shadow-xl hover:border-primary transition-all cursor-pointer group">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/admin-hero-image-CS62wUoHRcqPHt5k0V5fcjRDWr5iI6.webp"
                  alt="Medusa Admin Product Management"
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 dark:bg-black/90 rounded-full p-3">
                    <Search className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </ImageModal>

            <ImageModal
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3b6ebaf7fcac40848a18cfe249486c320d026f29-3024x1034-nfXxMwqxqLEm8xgyaV0g83kDLp63ji.webp"
              alt="Medusa Admin Dashboard Analytics"
            >
              <div className="relative rounded-xl overflow-hidden border-2 shadow-lg hover:shadow-xl hover:border-primary transition-all cursor-pointer group">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3b6ebaf7fcac40848a18cfe249486c320d026f29-3024x1034-nfXxMwqxqLEm8xgyaV0g83kDLp63ji.webp"
                  alt="Medusa Admin Dashboard Analytics"
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 dark:bg-black/90 rounded-full p-3">
                    <Search className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </ImageModal>

            <ImageModal
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/front-N1PA4JMeVf6WpFHnh8L0QwcUlQSpgZ.webp"
              alt="Medusa Admin Order Management"
            >
              <div className="relative rounded-xl overflow-hidden border-2 shadow-lg hover:shadow-xl hover:border-primary transition-all cursor-pointer group">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/front-N1PA4JMeVf6WpFHnh8L0QwcUlQSpgZ.webp"
                  alt="Medusa Admin Order Management"
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 dark:bg-black/90 rounded-full p-3">
                    <Search className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </ImageModal>

            <ImageModal
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8c93e3c6c9d474acc511b4c8dd03dc4389f809e4-3024x1008-s7EfanNF9e3mdcYv1dXi8squTboTDV.webp"
              alt="Medusa Admin Locations & Shipping"
            >
              <div className="relative rounded-xl overflow-hidden border-2 shadow-lg hover:shadow-xl hover:border-primary transition-all cursor-pointer group">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8c93e3c6c9d474acc511b4c8dd03dc4389f809e4-3024x1008-s7EfanNF9e3mdcYv1dXi8squTboTDV.webp"
                  alt="Medusa Admin Locations & Shipping"
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 dark:bg-black/90 rounded-full p-3">
                    <Search className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </ImageModal>

            <ImageModal
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cart-high-nd0tmzdmLjEZYmg0UlqnUOfWz7sg7V.webp"
              alt="Medusa Store Cart Page"
            >
              <div className="relative rounded-xl overflow-hidden border-2 shadow-lg hover:shadow-xl hover:border-primary transition-all cursor-pointer group">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cart-high-nd0tmzdmLjEZYmg0UlqnUOfWz7sg7V.webp"
                  alt="Medusa Store Cart Page"
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 dark:bg-black/90 rounded-full p-3">
                    <Search className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </ImageModal>

            <ImageModal
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/399625ab9f5f42f50f9b1ba9b197418ad796fcde-2880x1964-gywlMXh2LrOqbmQi72LfQ8jPFUBtKK.webp"
              alt="Medusa Store Navigation"
            >
              <div className="relative rounded-xl overflow-hidden border-2 shadow-lg hover:shadow-xl hover:border-primary transition-all cursor-pointer group">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/399625ab9f5f42f50f9b1ba9b197418ad796fcde-2880x1964-gywlMXh2LrOqbmQi72LfQ8jPFUBtKK.webp"
                  alt="Medusa Store Navigation"
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 dark:bg-black/90 rounded-full p-3">
                    <Search className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </ImageModal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
            {[
              {
                title: t("admin.feature1.title"),
                description: t("admin.feature1.desc"),
              },
              {
                title: t("admin.feature4.title"),
                description: t("admin.feature4.desc"),
              },
              {
                title: t("admin.feature5.title"),
                description: t("admin.feature5.desc"),
              },
              {
                title: t("admin.feature6.title"),
                description: t("admin.feature6.desc"),
              },
            ].map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-5xl mx-auto mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {language === "en" ? "Complete Admin Functionality" : "Funcionalidades Completas del Admin"}
              </h3>
              <p className="text-muted-foreground">
                {language === "en"
                  ? "Explore all the powerful features available in the Medusa Admin dashboard"
                  : "Explora todas las características poderosas disponibles en el panel de administración de Medusa"}
              </p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="products" className="bg-background px-6 rounded-lg border-2">
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Package className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-lg">
                      {language === "en" ? "Product Management" : "Gestión de Productos"}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-muted-foreground pl-8">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        {language === "en"
                          ? "Product creation and editing with complete details, variants and attributes"
                          : "Creación y edición de productos con detalles completos, variantes y atributos"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        {language === "en"
                          ? "Variant management for different product options (sizes, colors, etc.)"
                          : "Gestión de variantes para diferentes opciones de producto (tallas, colores, etc.)"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        {language === "en"
                          ? "Real-time inventory control and product reservations"
                          : "Control de inventario en tiempo real y reservas de productos"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        {language === "en"
                          ? "Hierarchical category organization"
                          : "Organización jerárquica de categorías"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        {language === "en" ? "Thematic product collections" : "Gestión de colecciones temáticas"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>{language === "en" ? "Bulk import/export tools" : "Importación/exportación masiva"}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>{language === "en" ? "Batch product editor" : "Editor de productos en lotes"}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        {language === "en"
                          ? "Product types and tags management"
                          : "Gestión de tipos y etiquetas de productos"}
                      </span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="orders" className="bg-background px-6 rounded-lg border-2">
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center gap-3">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-lg">
                      {language === "en" ? "Order Management" : "Gestión de Pedidos"}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-muted-foreground pl-8">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        {language === "en"
                          ? "Complete order view with customer, payment and shipping details"
                          : "Vista completa de pedidos con detalles de clientes, pagos y envíos"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        {language === "en"
                          ? "Fulfillment management - picking, packing and shipping process"
                          : "Gestión de cumplimiento - proceso de picking, packing y envío"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        {language === "en"
                          ? "Complete order lifecycle control"
                          : "Control completo del ciclo de vida del pedido"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        {language === "en"
                          ? "Draft order creation for manual orders"
                          : "Creación de borradores de pedidos manuales"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        {language === "en"
                          ? "Returns and exchanges management"
                          : "Gestión de devoluciones e intercambios"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        {language === "en" ? "Claims and disputes handling" : "Gestión de reclamos y disputas"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>{language === "en" ? "Manual payment capture" : "Captura manual de pagos"}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        {language === "en"
                          ? "Complete order timeline and history"
                          : "Timeline completo e historial de cada pedido"}
                      </span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="customers" className="bg-background px-6 rounded-lg border-2">
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-lg">
                      {language === "en" ? "Customer Management" : "Gestión de Clientes"}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-muted-foreground pl-8">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        {language === "en"
                          ? "Complete customer database for registered and guest customers"
                          : "Base de datos completa de clientes registrados e invitados"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        {language === "en" ? "Order history view per customer" : "Historial de pedidos por cliente"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        {language === "en"
                          ? "Manual customer creation for offline orders"
                          : "Creación manual de clientes para pedidos offline"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        {language === "en"
                          ? "Billing and shipping address management"
                          : "Gestión de direcciones de facturación y envío"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        {language === "en"
                          ? "Customer segmentation - VIP groups and loyalty levels"
                          : "Segmentación de clientes - grupos VIP y niveles de lealtad"}
                      </span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="inventory" className="bg-background px-6 rounded-lg border-2">
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Package className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-lg">
                      {language === "en" ? "Inventory Management" : "Gestión de Inventario"}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-muted-foreground pl-8">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        {language === "en"
                          ? "Real-time stock tracking and control"
                          : "Seguimiento y control de stock en tiempo real"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        {language === "en"
                          ? "Multi-warehouse inventory management"
                          : "Gestión de inventario en múltiples almacenes"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        {language === "en"
                          ? "Reservation system to prevent overselling"
                          : "Sistema de reservas para prevenir sobreventa"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        {language === "en"
                          ? "Individual inventory item creation and management"
                          : "Creación y gestión individual de ítems de inventario"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        {language === "en"
                          ? "Automatic availability checks before processing orders"
                          : "Verificaciones automáticas de disponibilidad antes de procesar pedidos"}
                      </span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="store" className="bg-background px-6 rounded-lg border-2">
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-lg">
                      {language === "en" ? "Store Configuration" : "Configuración de Tienda"}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-muted-foreground pl-8">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        {language === "en"
                          ? "Store details and basic settings"
                          : "Detalles de tienda y configuraciones básicas"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        {language === "en"
                          ? "Multi-currency support with tax-inclusive/exclusive pricing"
                          : "Gestión de monedas con precios inclusivos/exclusivos de impuestos"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        {language === "en"
                          ? "Region management by geographic areas"
                          : "Gestión de regiones por áreas geográficas"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        {language === "en"
                          ? "Sales channels - multiple storefronts and channels"
                          : "Canales de venta - múltiples tiendas y canales"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        {language === "en"
                          ? "Custom metadata - additional key-value data"
                          : "Metadatos personalizados - datos adicionales key-value"}
                      </span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="shipping" className="bg-background px-6 rounded-lg border-2">
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Rocket className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-lg">
                      {language === "en" ? "Shipping Management" : "Gestión de Envíos"}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-muted-foreground pl-8">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        {language === "en"
                          ? "Shipping options per region with flat or calculated pricing"
                          : "Opciones de envío por región con precios planos o calculados"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        {language === "en"
                          ? "Specific return options and methods"
                          : "Opciones específicas para devoluciones"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        {language === "en"
                          ? "Shipping profiles for similar product grouping"
                          : "Perfiles de envío para agrupación de productos similares"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        {language === "en"
                          ? "Fulfillment provider integration - UPS and others"
                          : "Integración con proveedores de cumplimiento - UPS y otros"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        {language === "en"
                          ? "Location configuration - warehouses and shipping points"
                          : "Configuración de ubicaciones - almacenes y puntos de envío"}
                      </span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="promotions" className="bg-background px-6 rounded-lg border-2">
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-lg">
                      {language === "en" ? "Promotions & Discounts" : "Promociones y Descuentos"}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-muted-foreground pl-8">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        {language === "en"
                          ? "Advanced promotion engine with complex conditional logic"
                          : "Motor avanzado de promociones con lógica condicional compleja"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        {language === "en"
                          ? "Bundle discounts for product packages"
                          : "Descuentos por bundling de productos"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        {language === "en"
                          ? "Special pricing for VIP customers"
                          : "Precios especiales para clientes VIP"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        {language === "en"
                          ? "Conditional free shipping based on minimum amount"
                          : "Envío gratuito condicional basado en monto mínimo"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        {language === "en"
                          ? "Multiple discount types - percentage, fixed amount, free shipping"
                          : "Múltiples tipos de descuento - porcentaje, cantidad fija, envío gratis"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        {language === "en"
                          ? "Discount code creation and management"
                          : "Gestión de códigos de descuento y cupones"}
                      </span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="analytics" className="bg-background px-6 rounded-lg border-2">
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center gap-3">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-lg">
                      {language === "en" ? "Analytics & Reports" : "Análisis y Reportes"}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-muted-foreground pl-8">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        {language === "en"
                          ? "Analytics dashboard with sales and performance KPIs"
                          : "Dashboard de analytics con KPIs de ventas y rendimiento"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        {language === "en"
                          ? "Order analysis with sales charts over time"
                          : "Análisis de pedidos con gráficos de ventas a lo largo del tiempo"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        {language === "en"
                          ? "Product analysis - top selling products and low stock"
                          : "Análisis de productos - top selling y stock bajo"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        {language === "en"
                          ? "Regional analysis - sales by geographic area"
                          : "Análisis por región - ventas por área geográfica"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        {language === "en"
                          ? "Order status breakdown with visual charts"
                          : "Breakdown visual de estados de pedidos"}
                      </span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section id="ai" className="bg-muted/50 py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-4 py-1">
              <Sparkles className="h-3 w-3 mr-2 inline" />
              {t("ai.badge")}
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-balance">{t("ai.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">{t("ai.subtitle")}</p>
          </div>

          <div className="mb-24">
            <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border-2 border-primary/20 overflow-hidden">
              <CardContent className="p-12 md:p-16 text-center space-y-6 relative">
                <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-100/[0.04]" />
                <div className="relative z-10">
                  <Badge variant="secondary" className="mb-6 text-base px-6 py-2">
                    <TrendingUp className="h-4 w-4 mr-2 inline" />
                    {language === "en" ? "Cost Savings" : "Ahorro de Costos"}
                  </Badge>
                  <h3 className="text-4xl md:text-6xl font-bold text-balance mb-6">
                    {language === "en"
                      ? "Save up to 2 employees ($1,200/month)"
                      : "Ahorra hasta 2 empleados ($1,200 USD al mes)"}
                  </h3>
                  <p className="text-2xl md:text-3xl text-muted-foreground font-semibold text-balance mb-8">
                    {language === "en"
                      ? "Replace your workforce and sales team with AI"
                      : "Reemplaza tu fuerza laboral y de ventas con IA"}
                  </p>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance mb-8">
                    {language === "en"
                      ? "eCommy AI handles customer service inquiries 24/7, automates sales processes, and provides intelligent product recommendations - all while reducing operational costs significantly."
                      : "eCommy AI maneja consultas de servicio al cliente 24/7, automatiza procesos de ventas y proporciona recomendaciones inteligentes de productos - todo mientras reduce significativamente los costos operativos."}
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <div className="p-6 bg-background rounded-xl border-2 border-primary/20">
                      <div className="text-4xl font-bold text-primary mb-2">66%</div>
                      <p className="text-sm text-muted-foreground">
                        {language === "en" ? "Tickets Automated" : "Tickets Automatizados"}
                      </p>
                    </div>
                    <div className="p-6 bg-background rounded-xl border-2 border-primary/20">
                      <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                      <p className="text-sm text-muted-foreground">
                        {language === "en" ? "Customer Support" : "Soporte al Cliente"}
                      </p>
                    </div>
                    <div className="p-6 bg-background rounded-xl border-2 border-primary/20">
                      <div className="text-4xl font-bold text-primary mb-2">$1.2K</div>
                      <p className="text-sm text-muted-foreground">
                        {language === "en" ? "Monthly Savings" : "Ahorro Mensual"}
                      </p>
                    </div>
                  </div>
                  <Button size="lg" className="mt-8 text-lg" onClick={() => setIsFormOpen(true)}>
                    {language === "en" ? "Calculate Your Savings" : "Calcula tu Ahorro"}{" "}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <div className="text-center space-y-4 mb-8">
              <h3 className="text-2xl md:text-3xl font-bold">{t("ai.demo.title")}</h3>
              <p className="text-lg text-muted-foreground">{t("ai.demo.subtitle")}</p>
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="relative w-full aspect-[2.164] bg-background rounded-xl border-2 shadow-lg overflow-hidden">
                <iframe
                  src="https://app.supademo.com/embed/cmctexb5r17mo9st8dos81eb8?embed_v=2"
                  loading="lazy"
                  title="Demo eCommy AI"
                  allow="clipboard-write"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {aiFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-background rounded-lg border hover:border-primary transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <feature.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="w-full py-24">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">{t("comparison.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">{t("comparison.subtitle")}</p>
          </div>
          <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-4 text-center font-semibold pb-4 border-b">
            <div></div>
            <div className="text-primary">{t("comparison.medusa")}</div>
            <div className="text-muted-foreground">{t("comparison.traditional")}</div>
          </div>
          {[
            {
              feature: t("comparison.customization"),
              medusa: t("comparison.unlimited"),
              traditional: t("comparison.limited"),
            },
            {
              feature: t("comparison.performance"),
              medusa: t("comparison.optimized"),
              traditional: t("comparison.variable"),
            },
            {
              feature: t("comparison.scalability"),
              medusa: t("comparison.infinite"),
              traditional: t("comparison.restricted"),
            },
            {
              feature: t("comparison.aifeatures"),
              medusa: t("comparison.builtin"),
              traditional: t("comparison.addons"),
            },
            { feature: t("comparison.dx"), medusa: t("comparison.excellent"), traditional: t("comparison.complex") },
            { feature: t("comparison.cost"), medusa: t("comparison.transparent"), traditional: t("comparison.hidden") },
          ].map((row, index) => (
            <div key={index} className="grid grid-cols-3 gap-4 py-4 border-b text-center">
              <div className="font-medium text-left">{row.feature}</div>
              <div className="text-green-600 font-semibold">{row.medusa}</div>
              <div className="text-muted-foreground">{row.traditional}</div>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="w-full bg-muted/50 py-24">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">{t("timeline.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">{t("timeline.subtitle")}</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                week: t("timeline.week1"),
                title: t("timeline.week1.title"),
                description: t("timeline.week1.desc"),
              },
              {
                week: t("timeline.week2"),
                title: t("timeline.week2.title"),
                description: t("timeline.week2.desc"),
              },
              {
                week: t("timeline.week3"),
                title: t("timeline.week3.title"),
                description: t("timeline.week3.desc"),
              },
              {
                week: t("timeline.week4"),
                title: t("timeline.week4.title"),
                description: t("timeline.week4.desc"),
              },
            ].map((phase, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline">{phase.week}</Badge>
                    <h3 className="font-semibold text-xl">{phase.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container py-24">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">{t("testimonials.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">{t("testimonials.subtitle")}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex gap-1 mb-2">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-base">{testimonial.content}</CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ROI Calculator - REPLACED with AI Impact Calculator */}
      <section className="bg-muted/50 py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">{t("roi.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">{t("roi.subtitle")}</p>
          </div>
          <AIImpactCalculator />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-24">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">{t("pricing.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">{t("pricing.subtitle")}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Card 1 - Complete Package */}
          <Card className="border-primary border-2 relative">
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">{t("pricing.popular")}</Badge>
            <CardHeader>
              <CardTitle className="text-xl">{t("pricing.complete")}</CardTitle>
              <CardDescription className="text-sm">{t("pricing.complete.desc")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 bg-muted rounded-lg">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-2xl font-bold">{t("pricing.complete.medusa.price")}</span>
                    <span className="text-xs text-muted-foreground">{t("pricing.complete.medusa")}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{t("pricing.complete.medusa.desc")}</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-2xl font-bold">{t("pricing.complete.ecommy.price")}</span>
                    <span className="text-xs text-muted-foreground">{t("pricing.complete.ecommy")}</span>
                  </div>
                </div>
                <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <div className="font-semibold text-sm mb-1">{t("pricing.complete.monthly")}</div>
                  <div className="text-xl font-bold text-primary">{t("pricing.complete.monthly.price")}</div>
                  <p className="text-xs text-muted-foreground mt-1">{t("pricing.complete.monthly.desc")}</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg border-2 border-dashed">
                  <div className="font-semibold text-sm mb-1">{t("pricing.complete.addon")}</div>
                  <div className="text-lg font-bold">{t("pricing.complete.addon.price")}</div>
                  <p className="text-xs text-muted-foreground mt-1">{t("pricing.complete.addon.desc")}</p>
                </div>
              </div>
              <Button className="w-full" onClick={() => setIsFormOpen(true)}>
                {t("pricing.cta.start")}
              </Button>
            </CardContent>
          </Card>

          {/* Card 2 - Medusa Only */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">{t("pricing.medusa")}</CardTitle>
              <CardDescription className="text-sm">{t("pricing.medusa.desc")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 bg-muted rounded-lg">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-2xl font-bold">{t("pricing.medusa.setup.price")}</span>
                    <span className="text-xs text-muted-foreground">{t("pricing.medusa.setup")}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{t("pricing.medusa.setup.desc")}</p>
                </div>
                <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <div className="font-semibold text-sm mb-1">{t("pricing.medusa.monthly")}</div>
                  <div className="text-xl font-bold text-primary">{t("pricing.medusa.monthly.price")}</div>
                </div>
              </div>
              <Button className="w-full bg-transparent" variant="outline" onClick={() => setIsFormOpen(true)}>
                {t("pricing.cta.start")}
              </Button>
            </CardContent>
          </Card>

          {/* Card 3 - eCommy Only */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">{t("pricing.ecommy")}</CardTitle>
              <CardDescription className="text-sm">{t("pricing.ecommy.desc")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 bg-muted rounded-lg">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-2xl font-bold">{t("pricing.ecommy.setup.price")}</span>
                    <span className="text-xs text-muted-foreground">{t("pricing.ecommy.setup")}</span>
                  </div>
                </div>
                <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <div className="font-semibold text-sm mb-1">{t("pricing.ecommy.monthly")}</div>
                  <div className="text-xl font-bold text-primary">{t("pricing.ecommy.monthly.price")}</div>
                </div>
              </div>
              <Button className="w-full bg-transparent" variant="outline" onClick={() => setIsFormOpen(true)}>
                {t("pricing.cta.start")}
              </Button>
            </CardContent>
          </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full bg-muted/50 py-24">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">{t("faq.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">{t("faq.subtitle")}</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-background px-6 rounded-lg border">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full py-24">
        <div className="container mx-auto">
        <Card className="bg-primary text-primary-foreground border-0">
          <CardContent className="p-6 sm:p-8 md:p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">{t("cta.title")}</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto text-balance">{t("cta.subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="secondary" className="text-lg" onClick={() => setIsFormOpen(true)}>
                {t("cta.trial")} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => setIsFormOpen(true)}
              >
                {t("cta.demo")}
              </Button>
            </div>
          </CardContent>
        </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t bg-muted/50 py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Package className="h-6 w-6" />
                <span className="text-xl font-bold">Medusa JS</span>
              </div>
              <p className="text-sm text-muted-foreground">{t("footer.description")}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{t("footer.product")}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    API Reference
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{t("footer.company")}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{t("footer.legal")}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Compliance
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">{t("footer.copyright")}</p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* ChatWidget Component */}
      <ChatWidget />

      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  )
}
