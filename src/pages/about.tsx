
import { useState } from "react";
import AnimatedPage from "../AnimatedPage";
import ImagePopup from '../components/imagePopup';
import VideoPopup from '../components/videoPopup';
import { motion } from "framer-motion";
import { useDeviceContext } from "../contexts/device-context";
import { AiFillLinkedin, AiOutlineLink } from 'react-icons/ai';



const about = () => {
  const { isMobile } = useDeviceContext();
  const [showImage, setShowImage]= useState(false);
  const [image, setImage]= useState<string>('');

  const variants = {
    show: {opacity: 1,transition: {duration: 0.5}},
    hide: {opacity: 0,transition: {duration: 0.25}}
  }

  const loadImage = (image:string) => {
    setImage(image);
    setShowImage(true);
  }

  return (
    <AnimatedPage>
      <motion.div
        variants={variants}
        animate={showImage ? "show" : "hide"}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
      >
        {/* <ImagePopup image={image} /> */}
        <VideoPopup video={image} />
      </motion.div>
      <div className="page about">
        <div className="content">
          <h2>FAKEYYS ORIGIN</h2>
          <p>
            FAKEEYS IS A FAKE ECOMMERCE STORE CREATED WITH A MODERN DESIGN IN MIND. THIS
            IS A WEB DEVELOPMENT PORTFOLIO PIECE BY:
            <motion.a
              onHoverEnd={() => setShowImage(false)}
              onHoverStart={() => loadImage("linkedin_clip.webm")}
              href="https://www.linkedin.com/in/keegan-launspach/"
              target="_blank"
            >
              KEEGAN LAUNSPACH <AiFillLinkedin />
            </motion.a>
          </p>
          <br />
          <div className={`inspirations ${isMobile ? "mobile" : "desktop"}`}>
            <p>INSPIRATION FOR THIS PROJECT COMES FROM:</p>
            <motion.a
              onHoverEnd={() => setShowImage(false)}
              onHoverStart={() => loadImage("mubien_clip.webm")}
              href="https://mubien.com/"
              target="_blank"
            >
              MUBIEN.COM <AiOutlineLink />
            </motion.a>
            <motion.a
              onHoverEnd={() => setShowImage(false)}
              onHoverStart={() => loadImage("arfake_sneakers_clip.webm")}
              href="https://webxr-sneakers.lusion.co/"
              target="_blank"
            >
              WEBXR-SNEAKERS.LUSION.CO <AiOutlineLink />
            </motion.a>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default about