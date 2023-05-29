import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/src/layouts/Navbar'
import Footer from '@/src/layouts/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fabian Lisantti | Desarrollador Frontend',
  description: 'Mi portafolio.',
}




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
      <Navbar/>
        
        {children}
        <Footer/>
        </body>
    </html>
  )
}
