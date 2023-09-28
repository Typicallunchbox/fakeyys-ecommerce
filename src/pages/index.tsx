import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import { useNavigate } from "react-router-dom";
import AnimatedPage from "../AnimatedPage";
import { useDeviceContext } from "../contexts/device-context";
import { variants } from "../utils/animation-variants";
import { wrap } from "popmotion";


const Index = () => {
const navigate = useNavigate();
const { isMobile } = useDeviceContext();
const [isCtaHover] = useState(false);


const IMAGES = [
  {
    id: 0,
    imageSrc:
      "/images/carousel-1.jpg"
  },
  {
    id: 1,
    imageSrc:
    "/images/carousel-2.jpg"

  },
  {
    id: 2,
    imageSrc:
    "/images/carousel-3.jpg"

  },
  {
    id: 3,
    imageSrc:
    "/images/carousel-4.jpg"

  },
  {
    id: 4,
    imageSrc:
    "/images/carousel-5.jpg"
  }
]

  useEffect(() => {
    if (document.getElementById("cta_video"))
      {
        let videoTemp:any = document.getElementById("cta_video")
        videoTemp.currentTime = 0;
        videoTemp.pla
        videoTemp.playbackRate = 0.80;
        videoTemp.play();
      }
  }, [isCtaHover]);

  //CAROUSEL LOGIC

  const [[imageCount, direction], setImageCount] = useState([0, 0]);
  const activeImageIndex = wrap(0, IMAGES.length, imageCount);

  const swipeToImage = (swipeDirection:number) => {
    setImageCount([imageCount + swipeDirection, swipeDirection]);
  };

  const sliderVariants = {
    incoming: (direction:number) => ({
      x: direction > 0 ? "100%" : "-100%",
      scale: 1.2,
      opacity: 0
    }),
    active: { x: 0, scale: 1, opacity: 1 },
    exit: (direction:number) => ({
      x: direction > 0 ? "-100%" : "100%",
      scale: 1,
      opacity: 0.2
    })
  };
  
  const sliderTransition = {
    duration: 1,
    ease: [0.56, 0.03, 0.12, 1.04]
  };
  


  useEffect(() => {
    setTimeout(() => {
      swipeToImage(1)    
    }, 5000);
  });

  return (
    <AnimatedPage>
      <div className="page home">
        <Helmet>
          <title>Fakeyys - Homepage</title>
          <meta name="description" content="Fakeyys, home to high quality fashion handbags" />
        </Helmet>
        <div className="grid">
          <div>
            {/* <img src={'/images/landing_image.png'}/> */}
            <div className="slider">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={imageCount}
              style={{
                backgroundImage: `url(${IMAGES[activeImageIndex].imageSrc})`
              }}
              custom={direction}
              variants={sliderVariants}
              initial="incoming"
              animate="active"
              exit="exit"
              transition={sliderTransition}
              className="image"
            />
          </AnimatePresence>
        </div>
          </div>
          <div>
            <div className="header">
             <motion.video id="cta_video" initial={{opacity:1}} animate={isCtaHover ? {opacity:1} : {opacity:1}} variants={variants} src={`./videos/landing_clip.webm`} controls={false} autoPlay muted loop></motion.video>
              <p>Embrace Elegance,</p>
              <p>Define Your Style.</p>
            </div>
            <p>Discover the latest fashion trends, curated for your unique taste. Explore, shop, and redefine your wardrobe effortlessly.</p>
            <button onClick={() => {navigate("/catalogue")}} className="btn">VIEW CATALOGUE</button>
          </div>
        </div>
        <div className={`creators ${isMobile ? 'mobile' : 'desktop'}`}>
          <h3>GERMAN MADE</h3>
          <h3>SWISS DESIGNED</h3>
        </div>
        {!isMobile && <div className="time">
          <h3>ES 08:52 PM</h3>
        </div>}
      </div>
    </AnimatedPage>
  )
}

export default Index