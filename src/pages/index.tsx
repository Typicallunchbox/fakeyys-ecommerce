import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import { useNavigate } from "react-router-dom";
import AnimatedPage from "../AnimatedPage";
import { useDeviceContext } from "../contexts/device-context";
import { FaArrowRightLong  } from 'react-icons/fa6';
import { wrap } from "popmotion";
import { sliderVariants } from "../utils/animation-variants";
import { sliderTran } from "../utils/animation-transitions";

const Index = () => {
  //MOVE TO FILE
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

  const navigate = useNavigate();
  const { isMobile } = useDeviceContext();
  const [isCtaHover] = useState(false);
  const [[imageCount, direction], setImageCount] = useState([0, 0]);
  const activeImageIndex = wrap(0, IMAGES.length, imageCount);

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

  useEffect(() => {
    setTimeout(() => {
      swipeToImage(1)    
    }, 5000);
  });

  const swipeToImage = (swipeDirection:number) => {
    setImageCount([imageCount + swipeDirection, swipeDirection]);
  };

  return (
    <AnimatedPage>
      <div className="page home">
        <Helmet>
          <title>Fakeyys - Homepage</title>
          <meta name="description" content="Fakeyys, home to high quality fashion handbags" />
        </Helmet>
        <div className="grid">
          <div>
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
                  transition={sliderTran}
                  className="image"
                />
              </AnimatePresence>
            </div>
          </div>
          <div>
            <div className="header">
              <p>Embrace Elegance,</p>
              <p>Define Your Style.</p>
            </div>
            <p>Discover the latest fashion trends, curated for your unique taste. Explore, shop, and redefine your wardrobe effortlessly.</p>
.            <motion.div onClick={() => {navigate("/catalogue")}} className="btn icon">
              <motion.span>VIEW CATALOGUE</motion.span>
              <FaArrowRightLong />
            </motion.div>
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