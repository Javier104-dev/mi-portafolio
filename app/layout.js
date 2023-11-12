import { Inter } from 'next/font/google'
import '@/styles/globals/reset.css'
import '@/styles/globals/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

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
