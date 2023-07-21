import { motion } from "framer-motion"
type AnimatedPageProps = {
  children: any
}

const AnimatedPage = (props: AnimatedPageProps) => {
  const animations = {
    initial: {opacity: 0},
    animate: {opacity: 1},
    exit: {opacity: 0}
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