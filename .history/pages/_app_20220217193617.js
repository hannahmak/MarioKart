import '../styles/globals.css'
import { motion } from 'framer-motion'
import AppProvider from '../utils/provider'

function MyApp({ Component, pageProps, router }) {
  return (
    <App
    <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
      pageInitial: {
        opacity:0,
      },
      pageAnimate: {
        opacity:1,
        transition: {
          duration:0.5
        }
      }
    }}>
      <Component {...pageProps} />
    </motion.div>
    
    )
}

export default MyApp