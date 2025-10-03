"use client"

import React, { useState, useEffect } from "react"
import { MessageSquare, X, Send, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useI18n } from "@/lib/i18n-context"

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [isMobile, setIsMobile] = useState(false)
  const { language } = useI18n()

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768)
    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)
    return () => window.removeEventListener("resize", checkIsMobile)
  }, [])

  const categories = [
    { icon: "🔍", title: language === "en" ? "SEO Tips" : "Tips SEO", subtitle: language === "en" ? "How can I improve my blog on tech" : "Cómo mejorar mi blog de tecnología" },
    { icon: "💻", title: language === "en" ? "Code" : "Código", subtitle: language === "en" ? "How to center a div" : "Cómo centrar un div" },
    { icon: "💬", title: language === "en" ? "Communication" : "Comunicación", subtitle: language === "en" ? "Improve team communication" : "Mejorar comunicación de equipo" },
    { icon: "⚡", title: language === "en" ? "Productivity" : "Productividad", subtitle: language === "en" ? "Increase work productivity" : "Aumentar productividad" },
  ]

  // Prevenir scroll en el body cuando el chat está abierto en móviles
  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen, isMobile]);

  return (
    <>
      {/* Ventana del Chat */}
      {isOpen && (
        <div className={`fixed inset-0 z-[55] bg-black/40 flex ${isMobile ? 'items-end justify-end' : 'items-center justify-center'} p-2`}>
          <Card
            className={`flex flex-col overflow-hidden shadow-2xl ${isMobile ? 'w-[85vw] max-w-sm h-[75vh] max-h-[450px]' : 'w-[380px] h-[600px]'}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-slate-900 text-white p-3 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-2 min-w-0">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-sm truncate">eCommy AI</h3>
                  <p className="text-xs text-slate-300 truncate">
                    {language === "en" ? "Online" : "En línea"}
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-slate-800 flex-shrink-0"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Contenido del Chat */}
            <div className="flex-1 p-3 bg-slate-50 overflow-y-auto">
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg shadow-sm border">
                  <p className="text-sm text-slate-700">
                    {language === "en" ? "👋 Hi! How can I help you today?" : "👋 ¡Hola! ¿Cómo puedo ayudarte hoy?"}
                  </p>
                </div>
                <div className={`grid ${isMobile ? 'grid-cols-1 gap-2' : 'grid-cols-2 gap-3'}`}>
                  {categories.map((category, index) => (
                    <button key={index} className="bg-white p-2 rounded-lg border hover:border-primary hover:shadow-md transition-all text-left">
                      <div className="text-lg mb-1">{category.icon}</div>
                      <h4 className="font-semibold text-xs mb-1">{category.title}</h4>
                      <p className="text-xs text-slate-500 line-clamp-2">{category.subtitle}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="border-t bg-white flex-shrink-0 p-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder={language === "en" ? "Type a message..." : "Escribe un mensaje..."}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
                <Button size="sm" className="flex-shrink-0">
                  <Send className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  )
}
