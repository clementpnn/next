import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/provider/theme"
import MainContainer from "@/components/containers/mainContainer"
import { DarkMode } from "@/components/buttons/darkMode"

export const metadata: Metadata = {
  title: "WebAuthN Demo",
  description: "WebAuthN Demo"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <MainContainer>
            <main className="h-page-screen flex flex-col">
              <div className="flex justify-end">
                <DarkMode />
              </div>
              <div className="flex flex-col justify-center items-center flex-grow">{children}</div>
            </main>
          </MainContainer>
        </ThemeProvider>
      </body>
    </html>
  )
}
