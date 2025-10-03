import { Menu, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useI18n } from "@/lib/i18n-context"

interface MobileNavProps {
  isFormOpen: boolean
  setIsFormOpen: (open: boolean) => void
}

export function MobileNav({ isFormOpen, setIsFormOpen }: MobileNavProps) {
  const { t } = useI18n()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader className="text-left">
          <div className="flex items-center gap-2">
            <Package className="h-6 w-6" />
            <SheetTitle className="text-xl font-bold">Medusa JS</SheetTitle>
          </div>
        </SheetHeader>
        <nav className="flex flex-col gap-6 mt-8">
          <a
            href="#features"
            className="text-lg font-medium hover:text-primary transition-colors py-2"
            onClick={() => {
              // Close sheet when link is clicked
              const sheet = document.querySelector('[data-state="open"]') as HTMLElement
              if (sheet) {
                sheet.click()
              }
            }}
          >
            {t("nav.features")}
          </a>
          <a
            href="#ai"
            className="text-lg font-medium hover:text-primary transition-colors py-2"
            onClick={() => {
              const sheet = document.querySelector('[data-state="open"]') as HTMLElement
              if (sheet) {
                sheet.click()
              }
            }}
          >
            {t("nav.ai")}
          </a>
          <a
            href="#pricing"
            className="text-lg font-medium hover:text-primary transition-colors py-2"
            onClick={() => {
              const sheet = document.querySelector('[data-state="open"]') as HTMLElement
              if (sheet) {
                sheet.click()
              }
            }}
          >
            {t("nav.pricing")}
          </a>
          <a
            href="#faq"
            className="text-lg font-medium hover:text-primary transition-colors py-2"
            onClick={() => {
              const sheet = document.querySelector('[data-state="open"]') as HTMLElement
              if (sheet) {
                sheet.click()
              }
            }}
          >
            {t("nav.faq")}
          </a>
          <div className="flex flex-col gap-4 mt-6 pt-6 border-t">
            <div className="flex items-center justify-center">
              <LanguageSwitcher />
            </div>
            <Button
              variant="ghost"
              className="justify-start text-lg"
              onClick={() => {
                setIsFormOpen(true)
                const sheet = document.querySelector('[data-state="open"]') as HTMLElement
                if (sheet) {
                  sheet.click()
                }
              }}
            >
              {t("nav.signin")}
            </Button>
            <Button
              className="justify-start text-lg"
              onClick={() => {
                setIsFormOpen(true)
                const sheet = document.querySelector('[data-state="open"]') as HTMLElement
                if (sheet) {
                  sheet.click()
                }
              }}
            >
              {t("nav.getstarted")}
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
