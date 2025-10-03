"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "es"

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

const translations = {
  en: {
    // Header
    "nav.features": "Features",
    "nav.ai": "AI Capabilities",
    "nav.pricing": "Pricing",
    "nav.faq": "FAQ",
    "nav.signin": "Sign In",
    "nav.getstarted": "Get Started",

    // Hero
    "hero.badge": "Now with AI-Powered Intelligence",
    "hero.title": "Build the future of",
    "hero.subtitle":
      "Medusa JS is the open-source headless commerce platform that gives you complete control. Enhanced with eCommy AI for intelligent automation and growth.",
    "hero.cta.trial": "Start Free Trial",
    "hero.cta.demo": "View Demo",
    "hero.check.nocard": "No credit card required",
    "hero.check.trial": "14-day free trial",
    "hero.check.cancel": "Cancel anytime",

    // Social Proof
    "social.trusted": "Trusted by leading brands worldwide",

    // Stats
    "stats.stores": "Active Stores",
    "stats.uptime": "Uptime SLA",
    "stats.response": "Avg Response Time",
    "stats.revenue": "Revenue Increase",

    // Widget Section
    "widget.badge": "Easy Integration",
    "widget.title": "Add AI to your store in minutes",
    "widget.subtitle":
      "Integrate the eCommy AI chat widget into your ecommerce store. Instant AI-powered customer support with zero configuration.",
    "widget.feature1.title": "One-Line Integration",
    "widget.feature1.desc": "Copy and paste a single script tag into your store. Works with any platform.",
    "widget.feature2.title": "Instant AI Assistant",
    "widget.feature2.desc": "Your customers get 24/7 AI-powered support the moment you install.",
    "widget.feature3.title": "Zero Configuration",
    "widget.feature3.desc": "The widget automatically learns from your product catalog and starts helping customers.",
    "widget.feature4.title": "Fully Customizable",
    "widget.feature4.desc": "Match your brand with custom colors, position, and behavior settings.",
    "widget.code.title": "Simple JavaScript Integration",
    "widget.code.subtitle": "Add this snippet before the closing </body> tag in your store:",
    "widget.code.comment": "Replace YOUR_STORE_ID with your unique identifier",

    // Admin Section
    "admin.badge": "Powerful Admin",
    "admin.title": "Customizable dashboard to manage your commerce",
    "admin.subtitle":
      "Manage all aspects of your commerce operations from a single place. Make your custom logic and workflows easily accessible for your team.",
    "admin.feature1.title": "Detailed Product Control",
    "admin.feature1.desc":
      "Craft detailed product pages and handle product assortments with the bulk editor and advanced category control.",
    "admin.feature2.title": "Omnichannel Order Handling",
    "admin.feature2.desc":
      "Manage orders across web, POS, apps and more. Use Medusa's APIs to build storefronts and integrate your other sales channels.",
    "admin.feature3.title": "Inventory & Multi-Warehouse",
    "admin.feature3.desc":
      "Make order reservations, set up advanced inventory handling, and manage stock across multiple warehouse locations.",
    "admin.feature4.title": "Unlimited Pricing Options",
    "admin.feature4.desc":
      "Use Price Lists to create campaigns, add special B2B price lists, or set up region-based pricing.",
    "admin.feature5.title": "Multi-Regional Support",
    "admin.feature5.desc":
      "Add multiple currencies, and local shipping and payment options to your store directly from your Admin.",
    "admin.feature6.title": "Advanced Promotion Engine",
    "admin.feature6.desc":
      "Set up advanced conditional logic for promotions like bundled discounts, special customer pricing, free shipping, and more.",
    "admin.extensions.title": "Powerful system for extensions",
    "admin.extensions.subtitle":
      "Support your custom logic and unique business workflows with a powerful extension system and native UI components.",

    // Features
    "features.title": "Everything you need to succeed",
    "features.subtitle": "Built for developers, designed for growth, optimized for performance",
    "feature.headless.title": "Headless Architecture",
    "feature.headless.desc": "Complete flexibility to build unique shopping experiences with any frontend framework.",
    "feature.fast.title": "Lightning Fast",
    "feature.fast.desc": "Optimized performance with sub-second response times and efficient caching strategies.",
    "feature.security.title": "Enterprise Security",
    "feature.security.desc": "Built-in security features, compliance ready, and regular security audits.",
    "feature.modular.title": "Modular Design",
    "feature.modular.desc": "Use only what you need. Add or remove features without breaking your store.",
    "feature.ai.title": "AI-Powered",
    "feature.ai.desc": "eCommy AI integration for intelligent product recommendations and personalization.",
    "feature.deploy.title": "Easy Deployment",
    "feature.deploy.desc": "Deploy anywhere - Vercel, AWS, Google Cloud, or your own infrastructure.",

    // AI Features
    "ai.badge": "eCommy AI",
    "ai.title": "Intelligent commerce, automated",
    "ai.subtitle": "Let AI handle the complexity while you focus on growth",
    "ai.demo.title": "Live Demo: eCommy AI in Action",
    "ai.demo.subtitle": "See how our AI assistant transforms the shopping experience",
    "ai.search.title": "Search Optimization",
    "ai.search.desc": "Precise and relevant results based on user intent, not just keywords.",
    "ai.conversion.title": "35% Conversion Boost",
    "ai.conversion.desc": "Proven increase in conversion rates thanks to personalized AI recommendations.",
    "ai.support.title": "24/7 Support Automation",
    "ai.support.desc": "Automated assistance to answer questions and guide customers through their journey.",
    "ai.recommendations.title": "Smart Product Recommendations",
    "ai.recommendations.desc": "AI analyzes customer behavior to suggest the perfect products at the right time.",
    "ai.pricing.title": "Dynamic Pricing Optimization",
    "ai.pricing.desc": "Automatically adjust prices based on demand, inventory, and market conditions.",
    "ai.nlp.title": "Contextual Language Model",
    "ai.nlp.desc": "Understands the context and intent behind user queries to deliver accurate answers.",
    "ai.semantic.title": "Semantic Search Engine",
    "ai.semantic.desc": "Goes beyond keywords to grasp the meaning and intent of searches.",
    "ai.tracking.title": "Order Tracking Integration",
    "ai.tracking.desc": "Real-time connection with shipping providers for up-to-date order tracking.",
    "ai.comparison.title": "Smart Product Comparison",
    "ai.comparison.desc": "Side-by-side product analysis to simplify customer decisions.",

    // Comparison
    "comparison.title": "Why choose Medusa JS?",
    "comparison.subtitle": "See how we compare to traditional platforms",
    "comparison.medusa": "Medusa JS",
    "comparison.traditional": "Traditional Platforms",
    "comparison.customization": "Customization",
    "comparison.performance": "Performance",
    "comparison.scalability": "Scalability",
    "comparison.aifeatures": "AI Features",
    "comparison.dx": "Developer Experience",
    "comparison.cost": "Total Cost",
    "comparison.unlimited": "Unlimited",
    "comparison.limited": "Limited",
    "comparison.optimized": "Optimized",
    "comparison.variable": "Variable",
    "comparison.infinite": "Infinite",
    "comparison.restricted": "Restricted",
    "comparison.builtin": "Built-in",
    "comparison.addons": "Add-ons",
    "comparison.excellent": "Excellent",
    "comparison.complex": "Complex",
    "comparison.transparent": "Transparent",
    "comparison.hidden": "Hidden Fees",

    // Timeline
    "timeline.title": "Launch in weeks, not months",
    "timeline.subtitle": "Our proven implementation process gets you to market fast",
    "timeline.week1": "Week 1-2",
    "timeline.week1.title": "Discovery & Setup",
    "timeline.week1.desc": "Requirements gathering, architecture planning, and initial setup",
    "timeline.week2": "Week 3-4",
    "timeline.week2.title": "Development",
    "timeline.week2.desc": "Core features implementation, custom integrations, and AI configuration",
    "timeline.week3": "Week 5-6",
    "timeline.week3.title": "Testing & Refinement",
    "timeline.week3.desc": "Quality assurance, performance optimization, and user acceptance testing",
    "timeline.week4": "Week 7-8",
    "timeline.week4.title": "Launch & Support",
    "timeline.week4.desc": "Production deployment, team training, and ongoing support",

    // Testimonials
    "testimonials.title": "Loved by developers and businesses",
    "testimonials.subtitle": "See what our customers have to say",
    "testimonial1.content":
      "Medusa JS transformed our e-commerce platform. The flexibility and performance are unmatched.",
    "testimonial1.name": "Sarah Johnson",
    "testimonial1.role": "CTO at StyleHub",
    "testimonial2.content":
      "The AI features from eCommy have increased our conversion rate by 35%. Absolutely game-changing.",
    "testimonial2.name": "Michael Chen",
    "testimonial2.role": "Founder of TechGear",
    "testimonial3.content": "Best decision we made was switching to Medusa. Developer experience is incredible.",
    "testimonial3.name": "Emma Williams",
    "testimonial3.role": "Head of Engineering at FashionForward",

    // ROI
    "roi.title": "Calculate your potential ROI",
    "roi.subtitle": "See how much revenue you could generate with Medusa JS + eCommy AI",

    // Pricing
    "pricing.title": "Simple, transparent pricing",
    "pricing.subtitle": "Choose the plan that fits your business",
    "pricing.popular": "Most Popular",
    "pricing.complete": "Complete Package",
    "pricing.complete.desc": "Medusa JS + eCommy AI - Full solution for your ecommerce",
    "pricing.complete.medusa": "Medusa JS Setup",
    "pricing.complete.medusa.price": "$1,500",
    "pricing.complete.medusa.desc": "with default templates",
    "pricing.complete.ecommy": "eCommy AI Setup",
    "pricing.complete.ecommy.price": "$1,900",
    "pricing.complete.monthly": "Monthly Maintenance",
    "pricing.complete.monthly.price": "From $400/month",
    "pricing.complete.monthly.desc": "Maintenance for both platforms",
    "pricing.complete.addon": "Add-on: Custom Design",
    "pricing.complete.addon.price": "From $3,000",
    "pricing.complete.addon.desc": "Personalized Medusa JS design",
    "pricing.medusa": "Medusa JS Only",
    "pricing.medusa.desc": "Complete ecommerce platform with default templates",
    "pricing.medusa.setup": "Setup",
    "pricing.medusa.setup.price": "$1,500",
    "pricing.medusa.setup.desc": "with default templates",
    "pricing.medusa.monthly": "Monthly Maintenance",
    "pricing.medusa.monthly.price": "$150/month",
    "pricing.ecommy": "eCommy AI Only",
    "pricing.ecommy.desc": "AI-powered customer support and automation",
    "pricing.ecommy.setup": "Setup",
    "pricing.ecommy.setup.price": "$1,900",
    "pricing.ecommy.monthly": "Monthly Maintenance",
    "pricing.ecommy.monthly.price": "$300/month",
    "pricing.datascience": "Data Science for eCommerce",
    "pricing.datascience.desc":
      "Visualize the real impact of AI on your business with advanced metrics and ML predictive models",
    "pricing.datascience.setup": "Setup",
    "pricing.datascience.setup.price": "From $1,490",
    "pricing.datascience.monthly": "Monthly Support",
    "pricing.datascience.monthly.price": "$289/month",
    "pricing.datascience.monthly.desc": "support and maintenance",
    "pricing.datascience.feature1": "Research, data extraction, basic ETL",
    "pricing.datascience.feature2": "Complete EDA and opportunity documentation",
    "pricing.datascience.feature3": "Feature Engineering & Data Preparation",
    "pricing.datascience.feature4": "Model Selection and Training (Classic ML)",
    "pricing.datascience.feature5": "Results Visualization (basic Dashboard with Streamlit)",
    "pricing.cta.start": "Get Started",
    "pricing.cta.contact": "Contact Sales",

    // FAQ
    "faq.title": "Frequently asked questions",
    "faq.subtitle": "Everything you need to know about Medusa JS",
    "faq.q1": "What is Medusa JS?",
    "faq.a1":
      "Medusa JS is an open-source headless commerce platform built with Node.js. It provides a flexible, modular architecture that allows you to build custom e-commerce experiences without the limitations of traditional platforms.",
    "faq.q2": "How does eCommy AI integration work?",
    "faq.a2":
      "eCommy AI seamlessly integrates with Medusa JS to provide intelligent features like product recommendations, dynamic pricing, and automated inventory management. It learns from your store data to continuously improve performance.",
    "faq.q3": "Can I migrate from my current platform?",
    "faq.a3":
      "Yes! We provide comprehensive migration tools and support to help you transition from platforms like Shopify, WooCommerce, Magento, and others. Our team can assist with data migration and custom integrations.",
    "faq.q4": "What kind of support do you offer?",
    "faq.a4":
      "We offer multiple support tiers: community support for free plans, priority email/chat support for Professional plans, and dedicated support with SLA guarantees for Enterprise customers.",
    "faq.q5": "Is Medusa JS suitable for large enterprises?",
    "faq.a5":
      "Medusa JS is built to scale. Many enterprise companies use Medusa to handle millions of orders. With features like horizontal scaling, caching, and microservices architecture, it can handle any load.",
    "faq.q6": "How long does implementation take?",
    "faq.a6":
      "Implementation time varies based on complexity. A basic store can be set up in 2-4 weeks, while complex enterprise implementations typically take 2-3 months. Our team works with you to ensure a smooth launch.",

    // Final CTA
    "cta.title": "Ready to transform your e-commerce?",
    "cta.subtitle": "Join thousands of businesses already growing with Medusa JS and eCommy AI",
    "cta.trial": "Start Free Trial",
    "cta.demo": "Schedule Demo",

    // Footer
    "footer.description": "The open-source headless commerce platform for the modern web.",
    "footer.product": "Product",
    "footer.company": "Company",
    "footer.legal": "Legal",
    "footer.copyright": "© 2025 Medusa JS. All rights reserved.",

    // Contact Form
    "form.step1.title": "Let's start with your name",
    "form.step1.subtitle": "What should we call you?",
    "form.step1.label": "Full Name",
    "form.step1.placeholder": "John Doe",
    "form.step2.title": "What's your email?",
    "form.step2.subtitle": "We'll use this to get in touch with you",
    "form.step2.label": "Email Address",
    "form.step2.placeholder": "john@company.com",
    "form.step3.title": "Tell us about your company",
    "form.step3.subtitle": "What's the name of your business?",
    "form.step3.label": "Company Name",
    "form.step3.placeholder": "Acme Inc.",
    "form.step4.title": "Which package interests you?",
    "form.step4.subtitle": "Select the option that best fits your needs",
    "form.step4.option1": "Complete Package",
    "form.step4.option1.desc": "Medusa JS + eCommy AI",
    "form.step4.option2": "Medusa JS Only",
    "form.step4.option2.desc": "eCommerce platform",
    "form.step4.option3": "eCommy AI Only",
    "form.step4.option3.desc": "AI assistant",
    "form.step4.option4": "Data Science",
    "form.step4.option4.desc": "Analytics & ML",
    "form.step5.title": "Anything else we should know?",
    "form.step5.subtitle": "Tell us about your project or any specific requirements",
    "form.step5.label": "Message (Optional)",
    "form.step5.placeholder": "Tell us about your project, timeline, or any questions you have...",
    "form.next": "Next",
    "form.back": "Back",
    "form.submit": "Submit",
    "form.success.title": "Thank you!",
    "form.success.message": "We've received your request and will get back to you within 24 hours.",
    "form.success.close": "Close",
  },
  es: {
    // Header
    "nav.features": "Características",
    "nav.ai": "Capacidades IA",
    "nav.pricing": "Precios",
    "nav.faq": "Preguntas",
    "nav.signin": "Iniciar Sesión",
    "nav.getstarted": "Comenzar",

    // Hero
    "hero.badge": "Ahora con Inteligencia Artificial",
    "hero.title": "Construye el futuro del",
    "hero.subtitle":
      "Medusa JS es la plataforma de comercio headless de código abierto que te da control completo. Potenciada con eCommy AI para automatización inteligente y crecimiento.",
    "hero.cta.trial": "Prueba Gratis",
    "hero.cta.demo": "Ver Demo",
    "hero.check.nocard": "Sin tarjeta de crédito",
    "hero.check.trial": "Prueba de 14 días",
    "hero.check.cancel": "Cancela cuando quieras",

    // Social Proof
    "social.trusted": "Confiado por marcas líderes en todo el mundo",

    // Stats
    "stats.stores": "Tiendas Activas",
    "stats.uptime": "SLA de Disponibilidad",
    "stats.response": "Tiempo de Respuesta",
    "stats.revenue": "Aumento de Ingresos",

    // Widget Section
    "widget.badge": "Integración Fácil",
    "widget.title": "Agrega IA a tu tienda en minutos",
    "widget.subtitle":
      "Integra el widget de chat de eCommy AI en tu tienda de ecommerce. Soporte instantáneo con IA sin configuración.",
    "widget.feature1.title": "Integración de Una Línea",
    "widget.feature1.desc": "Copia y pega una sola etiqueta script en tu tienda. Funciona con cualquier plataforma.",
    "widget.feature2.title": "Asistente IA Instantáneo",
    "widget.feature2.desc": "Tus clientes obtienen soporte IA 24/7 en el momento que instalas.",
    "widget.feature3.title": "Cero Configuración",
    "widget.feature3.desc":
      "El widget aprende automáticamente de tu catálogo de productos y comienza a ayudar a los clientes.",
    "widget.feature4.title": "Totalmente Personalizable",
    "widget.feature4.desc": "Adapta tu marca con colores personalizados, posición y configuraciones de comportamiento.",
    "widget.code.title": "Integración Simple con JavaScript",
    "widget.code.subtitle": "Agrega este fragmento antes de la etiqueta </body> en tu tienda:",
    "widget.code.comment": "Reemplaza TU_ID_TIENDA con tu identificador único",

    // Admin Section
    "admin.badge": "Admin Poderoso",
    "admin.title": "Panel personalizable para gestionar tu comercio",
    "admin.subtitle":
      "Gestiona todos los aspectos de tus operaciones comerciales desde un solo lugar. Haz que tu lógica personalizada y flujos de trabajo sean fácilmente accesibles para tu equipo.",
    "admin.feature1.title": "Control Detallado de Productos",
    "admin.feature1.desc":
      "Crea páginas de productos detalladas y maneja surtidos con el editor masivo y control avanzado de categorías.",
    "admin.feature2.title": "Gestión Omnicanal de Pedidos",
    "admin.feature2.desc":
      "Gestiona pedidos en web, POS, apps y más. Usa las APIs de Medusa para construir tiendas e integrar otros canales de venta.",
    "admin.feature3.title": "Inventario y Multi-Almacén",
    "admin.feature3.desc":
      "Haz reservas de pedidos, configura gestión avanzada de inventario y administra stock en múltiples ubicaciones de almacén.",
    "admin.feature4.title": "Opciones de Precios Ilimitadas",
    "admin.feature4.desc":
      "Usa Listas de Precios para crear campañas, agregar listas de precios B2B especiales o configurar precios por región.",
    "admin.feature5.title": "Soporte Multi-Regional",
    "admin.feature5.desc":
      "Agrega múltiples monedas y opciones locales de envío y pago a tu tienda directamente desde tu Admin.",
    "admin.feature6.title": "Motor Avanzado de Promociones",
    "admin.feature6.desc":
      "Configura lógica condicional avanzada para promociones como descuentos agrupados, precios especiales para clientes, envío gratis y más.",
    "admin.extensions.title": "Sistema poderoso para extensiones",
    "admin.extensions.subtitle":
      "Soporta tu lógica personalizada y flujos de trabajo únicos con un sistema de extensiones poderoso y componentes UI nativos.",

    // Features
    "features.title": "Todo lo que necesitas para tener éxito",
    "features.subtitle": "Construido para desarrolladores, diseñado para crecer, optimizado para rendimiento",
    "feature.headless.title": "Arquitectura Headless",
    "feature.headless.desc":
      "Flexibilidad completa para construir experiencias de compra únicas con cualquier framework frontend.",
    "feature.fast.title": "Súper Rápido",
    "feature.fast.desc": "Rendimiento optimizado con tiempos de respuesta inferiores a un segundo.",
    "feature.security.title": "Seguridad Empresarial",
    "feature.security.desc": "Características de seguridad integradas, listo para cumplimiento y auditorías regulares.",
    "feature.modular.title": "Diseño Modular",
    "feature.modular.desc": "Usa solo lo que necesitas. Agrega o elimina características sin romper tu tienda.",
    "feature.ai.title": "Potenciado por IA",
    "feature.ai.desc": "Integración con eCommy AI para recomendaciones inteligentes y personalización.",
    "feature.deploy.title": "Despliegue Fácil",
    "feature.deploy.desc": "Despliega en cualquier lugar - Vercel, AWS, Google Cloud, o tu propia infraestructura.",

    // AI Features
    "ai.badge": "eCommy AI",
    "ai.title": "Comercio inteligente, automatizado",
    "ai.subtitle": "Deja que la IA maneje la complejidad mientras te enfocas en crecer",
    "ai.demo.title": "Demo en Vivo: eCommy AI en Acción",
    "ai.demo.subtitle": "Mira cómo nuestro asistente IA transforma la experiencia de compra",
    "ai.search.title": "Optimización de Búsqueda",
    "ai.search.desc": "Resultados precisos y relevantes basados en la intención del usuario, no solo palabras clave.",
    "ai.conversion.title": "35% Aumento en Conversión",
    "ai.conversion.desc":
      "Incremento comprobado en tasas de conversión gracias a recomendaciones personalizadas por IA.",
    "ai.support.title": "Soporte 24/7 Automatizado",
    "ai.support.desc": "Asistencia automatizada para responder preguntas y guiar a los clientes en su viaje.",
    "ai.recommendations.title": "Recomendaciones Inteligentes",
    "ai.recommendations.desc":
      "La IA analiza el comportamiento del cliente para sugerir los productos perfectos en el momento adecuado.",
    "ai.pricing.title": "Optimización Dinámica de Precios",
    "ai.pricing.desc": "Ajusta automáticamente los precios según la demanda, inventario y condiciones del mercado.",
    "ai.nlp.title": "Modelo de Lenguaje Contextual",
    "ai.nlp.desc": "Comprende el contexto y la intención detrás de las consultas para entregar respuestas precisas.",
    "ai.semantic.title": "Motor de Búsqueda Semántica",
    "ai.semantic.desc": "Va más allá de las palabras clave para captar el significado e intención de las búsquedas.",
    "ai.tracking.title": "Integración de Tracking",
    "ai.tracking.desc": "Conexión en tiempo real con proveedores de envío para seguimiento actualizado de pedidos.",
    "ai.comparison.title": "Comparación Inteligente",
    "ai.comparison.desc": "Análisis de productos lado a lado para simplificar las decisiones del cliente.",

    // Comparison
    "comparison.title": "¿Por qué elegir Medusa JS?",
    "comparison.subtitle": "Mira cómo nos comparamos con plataformas tradicionales",
    "comparison.medusa": "Medusa JS",
    "comparison.traditional": "Plataformas Tradicionales",
    "comparison.customization": "Personalización",
    "comparison.performance": "Rendimiento",
    "comparison.scalability": "Escalabilidad",
    "comparison.aifeatures": "Características IA",
    "comparison.dx": "Experiencia Desarrollador",
    "comparison.cost": "Costo Total",
    "comparison.unlimited": "Ilimitado",
    "comparison.limited": "Limitado",
    "comparison.optimized": "Optimizado",
    "comparison.variable": "Variable",
    "comparison.infinite": "Infinito",
    "comparison.restricted": "Restringido",
    "comparison.builtin": "Integrado",
    "comparison.addons": "Complementos",
    "comparison.excellent": "Excelente",
    "comparison.complex": "Complejo",
    "comparison.transparent": "Transparente",
    "comparison.hidden": "Tarifas Ocultas",

    // Timeline
    "timeline.title": "Lanza en semanas, no meses",
    "timeline.subtitle": "Nuestro proceso de implementación probado te lleva al mercado rápido",
    "timeline.week1": "Semana 1-2",
    "timeline.week1.title": "Descubrimiento y Configuración",
    "timeline.week1.desc": "Recopilación de requisitos, planificación de arquitectura y configuración inicial",
    "timeline.week2": "Semana 3-4",
    "timeline.week2.title": "Desarrollo",
    "timeline.week2.desc":
      "Implementación de características principales, integraciones personalizadas y configuración de IA",
    "timeline.week3": "Semana 5-6",
    "timeline.week3.title": "Pruebas y Refinamiento",
    "timeline.week3.desc": "Aseguramiento de calidad, optimización de rendimiento y pruebas de aceptación",
    "timeline.week4": "Semana 7-8",
    "timeline.week4.title": "Lanzamiento y Soporte",
    "timeline.week4.desc": "Despliegue en producción, capacitación del equipo y soporte continuo",

    // Testimonials
    "testimonials.title": "Amado por desarrolladores y empresas",
    "testimonials.subtitle": "Mira lo que dicen nuestros clientes",
    "testimonial1.content":
      "Medusa JS transformó nuestra plataforma de e-commerce. La flexibilidad y rendimiento son incomparables.",
    "testimonial1.name": "Sarah Johnson",
    "testimonial1.role": "CTO en StyleHub",
    "testimonial2.content":
      "Las características de IA de eCommy han aumentado nuestra tasa de conversión en 35%. Absolutamente revolucionario.",
    "testimonial2.name": "Michael Chen",
    "testimonial2.role": "Fundador de TechGear",
    "testimonial3.content":
      "La mejor decisión que tomamos fue cambiar a Medusa. La experiencia del desarrollador es increíble.",
    "testimonial3.name": "Emma Williams",
    "testimonial3.role": "Jefa de Ingeniería en FashionForward",

    // ROI
    "roi.title": "Calcula tu ROI potencial",
    "roi.subtitle": "Mira cuántos ingresos podrías generar con Medusa JS + eCommy AI",

    // Pricing
    "pricing.title": "Precios simples y transparentes",
    "pricing.subtitle": "Elige el plan que se ajuste a tu negocio",
    "pricing.popular": "Más Popular",
    "pricing.complete": "Paquete Completo",
    "pricing.complete.desc": "Medusa JS + eCommy AI - Solución completa para tu ecommerce",
    "pricing.complete.medusa": "Setup Medusa JS",
    "pricing.complete.medusa.price": "$1,500",
    "pricing.complete.medusa.desc": "con templates por defecto",
    "pricing.complete.ecommy": "Setup eCommy AI",
    "pricing.complete.ecommy.price": "$1,900",
    "pricing.complete.monthly": "Fee Mensual",
    "pricing.complete.monthly.price": "Desde $400/mes",
    "pricing.complete.monthly.desc": "Mantenimiento de ambos",
    "pricing.complete.addon": "Add-on: Diseño Personalizado",
    "pricing.complete.addon.price": "Desde $3,000",
    "pricing.complete.addon.desc": "Diseño personalizado Medusa JS",
    "pricing.medusa": "Solo Medusa JS",
    "pricing.medusa.desc": "Plataforma de ecommerce completa con templates por defecto",
    "pricing.medusa.setup": "Setup",
    "pricing.medusa.setup.price": "$1,500",
    "pricing.medusa.setup.desc": "con templates por defecto",
    "pricing.medusa.monthly": "Fee Mensual",
    "pricing.medusa.monthly.price": "$150/mes",
    "pricing.ecommy": "Solo eCommy AI",
    "pricing.ecommy.desc": "Soporte al cliente y automatización con IA",
    "pricing.ecommy.setup": "Setup",
    "pricing.ecommy.setup.price": "$1,900",
    "pricing.ecommy.monthly": "Fee Mensual",
    "pricing.ecommy.monthly.price": "$300/mes",
    "pricing.datascience": "Data Science para eCommerce",
    "pricing.datascience.desc":
      "Visualiza el impacto real de la inteligencia artificial en tu negocio con métricas avanzadas y análisis con modelos predictivos de ML",
    "pricing.datascience.setup": "Setup",
    "pricing.datascience.setup.price": "Desde $1,490",
    "pricing.datascience.monthly": "Soporte Mensual",
    "pricing.datascience.monthly.price": "$289/mes",
    "pricing.datascience.monthly.desc": "soporte y mantenimiento",
    "pricing.datascience.feature1": "Investigación, extracción de datos, ETL básico",
    "pricing.datascience.feature2": "EDA completo y documentación de oportunidades",
    "pricing.datascience.feature3": "Feature Engineering & Preparación de Datos",
    "pricing.datascience.feature4": "Selección y Entrenamiento de Modelos (ML Clásicos)",
    "pricing.datascience.feature5": "Visualización de Resultados (Dashboard básico con Streamlit)",
    "pricing.cta.start": "Comenzar",
    "pricing.cta.contact": "Contactar Ventas",

    // FAQ
    "faq.title": "Preguntas frecuentes",
    "faq.subtitle": "Todo lo que necesitas saber sobre Medusa JS",
    "faq.q1": "¿Qué es Medusa JS?",
    "faq.a1":
      "Medusa JS es una plataforma de comercio headless de código abierto construida con Node.js. Proporciona una arquitectura flexible y modular que te permite construir experiencias de e-commerce personalizadas sin las limitaciones de las plataformas tradicionales.",
    "faq.q2": "¿Cómo funciona la integración con eCommy AI?",
    "faq.a2":
      "eCommy AI se integra perfectamente con Medusa JS para proporcionar características inteligentes como recomendaciones de productos, precios dinámicos y gestión automatizada de inventario. Aprende de los datos de tu tienda para mejorar continuamente el rendimiento.",
    "faq.q3": "¿Puedo migrar desde mi plataforma actual?",
    "faq.a3":
      "¡Sí! Proporcionamos herramientas de migración completas y soporte para ayudarte a hacer la transición desde plataformas como Shopify, WooCommerce, Magento y otras. Nuestro equipo puede asistir con la migración de datos e integraciones personalizadas.",
    "faq.q4": "¿Qué tipo de soporte ofrecen?",
    "faq.a4":
      "Ofrecemos múltiples niveles de soporte: soporte comunitario para planes gratuitos, soporte prioritario por email/chat para planes Profesionales, y soporte dedicado con garantías SLA para clientes Empresariales.",
    "faq.q5": "¿Es Medusa JS adecuado para grandes empresas?",
    "faq.a5":
      "Medusa JS está construido para escalar. Muchas empresas grandes usan Medusa para manejar millones de pedidos. Con características como escalado horizontal, caché y arquitectura de microservicios, puede manejar cualquier carga.",
    "faq.q6": "¿Cuánto tiempo toma la implementación?",
    "faq.a6":
      "El tiempo de implementación varía según la complejidad. Una tienda básica puede configurarse en 2-4 semanas, mientras que implementaciones empresariales complejas típicamente toman 2-3 meses. Nuestro equipo trabaja contigo para asegurar un lanzamiento sin problemas.",

    // Final CTA
    "cta.title": "¿Listo para transformar tu e-commerce?",
    "cta.subtitle": "Únete a miles de negocios que ya están creciendo con Medusa JS y eCommy AI",
    "cta.trial": "Prueba Gratis",
    "cta.demo": "Agendar Demo",

    // Footer
    "footer.description": "La plataforma de comercio headless de código abierto para la web moderna.",
    "footer.product": "Producto",
    "footer.company": "Empresa",
    "footer.legal": "Legal",
    "footer.copyright": "© 2025 Medusa JS. Todos los derechos reservados.",

    // Contact Form
    "form.step1.title": "Comencemos con tu nombre",
    "form.step1.subtitle": "¿Cómo deberíamos llamarte?",
    "form.step1.label": "Nombre Completo",
    "form.step1.placeholder": "Juan Pérez",
    "form.step2.title": "¿Cuál es tu email?",
    "form.step2.subtitle": "Lo usaremos para ponernos en contacto contigo",
    "form.step2.label": "Correo Electrónico",
    "form.step2.placeholder": "juan@empresa.com",
    "form.step3.title": "Cuéntanos sobre tu empresa",
    "form.step3.subtitle": "¿Cuál es el nombre de tu negocio?",
    "form.step3.label": "Nombre de la Empresa",
    "form.step3.placeholder": "Mi Empresa S.A.",
    "form.step4.title": "¿Qué paquete te interesa?",
    "form.step4.subtitle": "Selecciona la opción que mejor se ajuste a tus necesidades",
    "form.step4.option1": "Paquete Completo",
    "form.step4.option1.desc": "Medusa JS + eCommy AI",
    "form.step4.option2": "Solo Medusa JS",
    "form.step4.option2.desc": "Plataforma eCommerce",
    "form.step4.option3": "Solo eCommy AI",
    "form.step4.option3.desc": "Asistente IA",
    "form.step4.option4": "Data Science",
    "form.step4.option4.desc": "Analítica & ML",
    "form.step5.title": "¿Algo más que debamos saber?",
    "form.step5.subtitle": "Cuéntanos sobre tu proyecto o requisitos específicos",
    "form.step5.label": "Mensaje (Opcional)",
    "form.step5.placeholder": "Cuéntanos sobre tu proyecto, cronograma o cualquier pregunta que tengas...",
    "form.next": "Siguiente",
    "form.back": "Atrás",
    "form.submit": "Enviar",
    "form.success.title": "¡Gracias!",
    "form.success.message": "Hemos recibido tu solicitud y te responderemos en las próximas 24 horas.",
    "form.success.close": "Cerrar",
  },
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  return <I18nContext.Provider value={{ language, setLanguage, t }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
