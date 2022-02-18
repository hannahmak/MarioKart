import '../styles/globals.css'
import { motion } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
    <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
      pageInitial: {
        opacity:0,
        
      },
      pageAnimate: {
        opacity:1,
        transition: {
          duration:2
        }
        
      }
    }}>
  <Component {...pageProps} />
    
    )
}

export default MyApp
