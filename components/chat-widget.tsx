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
    // Cleanup
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen, isMobile]);


  return (
    <>
      {/* Botón flotante, siempre visible */}
      <Button
        size={isMobile ? "default" : "lg"}
        className={`fixed z-[60] rounded-full shadow-lg hover:scale-110 transition-transform ${isMobile ? 'h-14 w-14 bottom-4 right-4' : 'h-16 w-16 bottom-6 right-6'}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chat"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </Button>

      {/* Ventana del Chat */}
      {isOpen && (
        <div className={`fixed z-50 ${isMobile ? 'inset-0 bg-black/40' : 'bottom-24 right-6'}`}>
            <Card 
              className={`flex flex-col overflow-hidden shadow-2xl ${isMobile ? 'absolute bottom-0 left-4 right-4 h-[75vh] max-h-[550px]' : 'w-[380px] h-[600px]'}`}
            >
              {/* Header */}
              <div className="bg-slate-900 text-white p-4 flex items-center justify-between flex-shrink-0">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">eCommy AI</h3>
                    <p className="text-xs text-slate-300">Online</p>
                  </div>
                </div>
              </div>

              {/* Contenido del Chat (con scroll) */}
              <div className="flex-1 p-4 bg-slate-50 overflow-y-auto">
                <div className="space-y-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm border">
                    <p className="text-sm text-slate-700">
                      {language === "en" ? "👋 Hi! How can I help you today?" : "👋 ¡Hola! ¿Cómo puedo ayudarte hoy?"}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {categories.map((category, index) => (
                      <button key={index} className="bg-white p-3 rounded-lg border hover:border-primary hover:shadow-md transition-all text-left">
                        <div className="text-xl mb-1">{category.icon}</div>
                        <h4 className="font-semibold text-sm mb-1">{category.title}</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">{category.subtitle}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Input Area */}
              <div className="p-3 border-t bg-white flex-shrink-0">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder={language === "en" ? "Type a message..." : "Escribe un mensaje..."}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                  <Button size="icon" className="px-3 flex-shrink-0">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
        </div>
      )}
    </>
  )
}

// "use client"

// import { useState, useEffect } from "react"
// import { MessageSquare, X, Send, Sparkles } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import { useI18n } from "@/lib/i18n-context"

// export function ChatWidget() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [message, setMessage] = useState("")
//   const [isMobile, setIsMobile] = useState(false)
//   const { language } = useI18n()

//   // Detect mobile devices
//   useEffect(() => {
//     const checkIsMobile = () => {
//       setIsMobile(window.innerWidth < 768)
//     }

//     checkIsMobile()
//     window.addEventListener("resize", checkIsMobile)

//     return () => window.removeEventListener("resize", checkIsMobile)
//   }, [])

//   const categories = [
//     {
//       icon: "🔍",
//       title: language === "en" ? "SEO Tips" : "Tips SEO",
//       subtitle: language === "en" ? "How can I improve my blog on tech" : "Cómo mejorar mi blog de tecnología",
//     },
//     {
//       icon: "💻",
//       title: language === "en" ? "Code" : "Código",
//       subtitle: language === "en" ? "How to center a div with Tailwind CSS" : "Cómo centrar un div con Tailwind CSS",
//     },
//     {
//       icon: "💬",
//       title: language === "en" ? "Communication" : "Comunicación",
//       subtitle:
//         language === "en" ? "How to improve communication with my team" : "Cómo mejorar comunicación con mi equipo",
//     },
//     {
//       icon: "⚡",
//       title: language === "en" ? "Productivity" : "Productividad",
//       subtitle:
//         language === "en" ? "How to increase productivity in my work" : "Cómo aumentar productividad en mi trabajo",
//     },
//   ]

//   return (
//     <>
//       {/* Chat Widget Button */}
//       <div className={`fixed ${isMobile ? 'bottom-6 right-6' : 'bottom-6 right-6'} z-50`}>
//         {!isOpen && (
//           <Button
//             size={isMobile ? "default" : "lg"}
//             className={`${isMobile ? 'h-12 w-12' : 'h-14 w-14'} rounded-full shadow-lg hover:scale-110 transition-transform`}
//             onClick={() => setIsOpen(true)}
//           >
//             <MessageSquare className={`${isMobile ? 'h-5 w-5' : 'h-6 w-6'}`} />
//           </Button>
//         )}
//         {/* Chat Window */}
//         {isOpen && (
//           <Card className={`${isMobile ? 'w-[320px] h-[450px]' : 'w-[380px] h-[600px]'} shadow-2xl flex flex-col overflow-hidden fixed bottom-4 right-4`}>
//             {/* Header */}
//             <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
//                   <Sparkles className="h-5 w-5" />
//                 </div>
//                 <div className={`${isMobile ? 'min-w-0' : ''}`}>
//                   <h3 className="font-semibold truncate">eCommy AI</h3>
//                   <p className="text-xs text-slate-300 truncate">
//                     {language === "en" ? "Online • Ready to help" : "En línea • Listo para ayudar"}
//                   </p>
//                 </div>
//               </div>
//               <Button
//                 variant="ghost"
//                 size="sm"
//                 className="text-white hover:bg-slate-800 flex-shrink-0"
//                 onClick={() => setIsOpen(false)}
//               >
//                 <X className="h-5 w-5" />
//               </Button>
//             </div>

//             {/* Chat Content */}
//             <div className="flex-1 p-4 bg-slate-50 overflow-y-auto">
//               <div className="space-y-4">
//                 {/* Welcome Message */}
//                 <div className="bg-white p-4 rounded-lg shadow-sm border">
//                   <p className="text-sm text-slate-700">
//                     {language === "en"
//                       ? "👋 Hi! I'm your AI shopping assistant. How can I help you today?"
//                       : "👋 ¡Hola! Soy tu asistente de compras IA. ¿Cómo puedo ayudarte hoy?"}
//                   </p>
//                 </div>

//                 {/* Category Cards */}
//                 <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-3`}>
//                   {categories.map((category, index) => (
//                     <button
//                       key={index}
//                       className="bg-white p-3 rounded-lg border hover:border-primary hover:shadow-md transition-all text-left"
//                     >
//                       <div className="text-2xl mb-2">{category.icon}</div>
//                       <h4 className="font-semibold text-sm mb-1">{category.title}</h4>
//                       <p className="text-xs text-slate-500 line-clamp-2">{category.subtitle}</p>
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Input Area */}
//             <div className="p-4 border-t bg-white">
//               <div className="flex gap-2">
//                 <input
//                   type="text"
//                   placeholder={language === "en" ? "Type a message..." : "Escribe un mensaje..."}
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                   className={`flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm ${isMobile ? 'text-base' : ''}`}
//                 />
//                 <Button size="sm" className="px-4 flex-shrink-0">
//                   <Send className="h-4 w-4" />
//                 </Button>
//               </div>
//             </div>
//           </Card>
//         )}
//       </div>
//     </>
//   )
// }
