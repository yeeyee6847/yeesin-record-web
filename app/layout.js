import NavigationBar from '@/components/navigation/NavigationBar'
import { exo2, tiltPrism } from './fonts'
import './globals.css'
import Footer from '@/components/footer/Footer'

export const metadata = {
  title: {
    default: 'Yeesin',
    template: '%s | Yeesin'
  },
  description: 'Recording your spending then you will know where the money goes.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${exo2.variable} ${tiltPrism.variable}`}>
      <body className='flex flex-col min-h-screen bg-slate-950'>
        <NavigationBar />
        <main className='grow container px-5'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
