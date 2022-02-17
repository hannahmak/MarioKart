import '../styles/globals.css'
import { motion } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
    <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
      pageInitial: {
        opacity:0,
        x:'-100',
        
      },
      pageAnimate: {
        opacity:1,
        x:0,
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
