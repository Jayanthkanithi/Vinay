import './globals.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

export const metadata = {
  title: 'Yamini Durga Gudiganti | Portfolio',
  description: 'Personal portfolio of Yamini Durga Gudiganti',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
