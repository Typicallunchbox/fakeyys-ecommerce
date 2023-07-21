import { motion } from "framer-motion"
type AnimatedPageProps = {
  children: any
}

const AnimatedPage = (props: AnimatedPageProps) => {
  const animations = {
    initial: {opacity: 0, x: 100},
    animate: {opacity: 1, x: 0},
    exit: {opacity: 0, x: -100}
  }
  return (
    <motion.div 
      variants={animations} 
      initial="initial" 
      animate="animate"
      exit="exit"
      transition={{duration:1}}
      >
        {props.children}
    </motion.div>
  )
}

export default AnimatedPage