import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/src/layouts/Navbar";
import Footer from "@/src/layouts/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fabian Lisantti | Desarrollador Frontend",
  description: "Mi portafolio.",
  generator: "Portafolio",
  applicationName: "Portafolio",
  referrer: "origin-when-cross-origin",
  keywords: ["Portafolio", "Lisantti", "Rilpmcuni"],
  authors: [{ name: "Lisantti" }],
  colorScheme: "dark",
  creator: "Fabian Lisantti",
  publisher: "Fabian Lisantti",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Fabian Lisantti | Desarrollador Frontend",
    description: "Mi portafolio.",
    url: "http://www.fabian-lisantti.vercel.app",
    images: "./image.png",
    siteName: "Next.js",
    locale: "es_CL",
    type: "website",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  themeColor: "black",
  twitter: {
    card: "summary_large_image",
    title: "Fabian Lisantti | Desarrollador Frontend",
    description: "Mi portafolio.",
    siteId: "1467726470533754880",
    creator: "@Rilpmcuni",
    creatorId: "1467726470533754880",
        images: {
      url: './image.png',
      alt: '@Rilpmcuni',
    },
    
  },
    viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
    verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      me: ['fabian.lisantti@gmail.com', 'http://www.fabian-lisantti.vercel.app'],
    },
    
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
