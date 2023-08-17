
import { useState } from "react";
import AnimatedPage from "../AnimatedPage";
import ImagePopup from '../components/imagePopup';
import { motion } from "framer-motion";


const about = () => {
  const [showImage, setShowImage]= useState(false);

  const variants = {
    show: {opacity: 1,transition: {duration: 0.5}},
    hide: {opacity: 0,transition: {duration: 0.25}}
  }
  return (
    <AnimatedPage>
      <motion.div variants={variants} animate={showImage ? 'show' : 'hide'} initial={{opacity:0}} exit={{opacity:0}}>
        <ImagePopup />
      </motion.div>
      <div className="page about">
        <div className="content">
          <h2>FAKEYYS ORIGIN</h2>
          <p>FAKEEYS IS A FAKE ECOMMERCE STORE CREATED WITH A MODERN DESIGN. THIS IS A WEB DEVELOPMENT PORTFOLIO PIECE BY : <motion.span onHoverEnd={() => setShowImage(false)} onHoverStart={() => setShowImage(true)}>KEEGAN LAUNSPACH</motion.span> </p>
          <br />
          <p>INSPIRATION FOR THIS PROJECT COMES FROM:</p>
          <div className="inspirations">
            <motion.a onHoverEnd={() => setShowImage(false)} onHoverStart={() => setShowImage(true)} href="https://mubien.com/" target="_blank">MUBIEN.COM</motion.a>
            <motion.a onHoverEnd={() => setShowImage(false)} onHoverStart={() => setShowImage(true)} href="http://taotajima.jp" target="_blank">TAOTAJIMA.JP</motion.a>
          </div>
        </div>
      </div>
    </AnimatedPage>
  )
}

export default about