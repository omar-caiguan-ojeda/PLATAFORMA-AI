import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import { I18nProvider } from "@/lib/i18n-context"
import { ScrollToTop } from "@/components/scroll-to-top"

// export const metadata: Metadata = {
//   title: "Medusa JS - Headless Commerce Platform | Powered by eCommy AI",
//   description:
//     "Build the future of e-commerce with Medusa JS, the open-source headless commerce platform enhanced with eCommy AI for intelligent automation and growth.",
//   generator: "v0.app",
// }
export const metadata: Metadata = {
  title: "Medusa JS - Headless Commerce Platform | Powered by eCommy AI",
  description:
    "Build the future of e-commerce with Medusa JS, the open-source headless commerce platform enhanced with eCommy AI for intelligent automation and growth.",
  generator: "v0.app",
  keywords: ["medusa js", "headless commerce", "ecommerce platform", "ecommy ai", "ai shopping assistant", "open source commerce"],
  authors: [{ name: "eCommy AI" }],
  openGraph: {
    title: "Medusa JS - Headless Commerce Platform | Powered by eCommy AI",
    description: "Build the future of e-commerce with Medusa JS and eCommy AI for intelligent automation",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <I18nProvider>
          <ScrollToTop />
          <Suspense fallback={null}>{children}</Suspense>
        </I18nProvider>
        <Analytics />
      </body>
    </html>
  )
}
