import { Inter } from 'next/font/google'
import '@/styles/globals/reset.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mi porfolio',
  description: 'Porfolio creado con Next.js',
}

const Layout = ({ children }) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

export default Layout;
