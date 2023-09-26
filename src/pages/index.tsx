import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import { useNavigate } from "react-router-dom";
import AnimatedPage from "../AnimatedPage";
import { useDeviceContext } from "../contexts/device-context";
import { variants } from "../utils/animation-variants";

const Index = () => {
const navigate = useNavigate();
// const [scope] = useAnimate();
const { isMobile } = useDeviceContext();
const [isCtaHover] = useState(false);
// const transition = {duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9]}
// const [ctaTrigger, setCtatrigger] = useState(false);

const cursor = {x:0, y:0}
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}


  // const ctaAnimation = {
  //   initial: {
  //     opacity: 1, 
  //     scale:1, 
  //     backgroundColor: 'rgba(255, 255, 255, 0)',
  //   },
  //   animate: {
  //     opacity: 1
  //   },
  //   exit: {
  //     opacity: 1, 
  //     scaleX:10, 
  //     scaleY:10, 
  //     border: 'rgba(255, 255, 255)',
  //     backgroundColor: 'rgba(255, 255, 255)', 
  //     color: 'rgba(255, 255, 255)',
  //     transition: {
        
  //       color: { duration: 0.2 },
  //       border: { duration: 0.2 },
  //       backgroundColor: { duration: 0.2 },
  //       scaleX: { duration: 2 },
  //       scaleY: { duration: 2 },
  //     },
  //   },
  //   // exit: {
  //   //   opacity: 0,
  //   //   y: -50,
  //   //   scale: 1.2,
  //   //   backgroundColor: "green", // Color change during exit
  //   //   transition: {
  //   //     y: { duration: 0.5 },
  //   //     scale: { duration: 0.5 },
  //   //     backgroundColor: { duration: 0.5 }, // Color change duration
  //   //   },
  //   // },
  //   transition: transition
  // }

  // const ctaAnimation2 = {
  //   initial: {
  //     opacity: 1, 
  //     scale:1, 
  //     backgroundColor: 'rgba(255, 255, 255, 0)',
  //   },
  //   animate: {
  //     opacity: 1
  //   },
  //   exit: ctaTrigger ? {
  //     opacity: 1, 
  //     scaleX:10, 
  //     scaleY:10, 
  //     border: 'rgba(255, 255, 255)',
  //     backgroundColor: 'rgba(255, 255, 255)', 
  //     color: 'rgba(255, 255, 255)',
      
  //     transition: {
        
  //       color: { duration: 0.2 },
  //       border: { duration: 0.2 },
  //       backgroundColor: { duration: 0.2 },
  //       scaleX: { duration: 2 },
  //       scaleY: { duration: 2 },
  //     },
  //   }:{},
  //   // exit: {
  //   //   opacity: 0,
  //   //   y: -50,
  //   //   scale: 1.2,
  //   //   backgroundColor: "green", // Color change during exit
  //   //   transition: {
  //   //     y: { duration: 0.5 },
  //   //     scale: { duration: 0.5 },
  //   //     backgroundColor: { duration: 0.5 }, // Color change duration
  //   //   },
  //   // },
  //   transition: transition
  // }

  // const customExitAnimation = async () => {
  //   return new Promise((resolve: any) => {
  //     setTimeout(() => {
  //       resolve();
  //     }, 300); // Adjust the duration to control the delay between animations
  //   });
  // };

  let counter = 0;
  const updateRate = 10;
  const limit = 45;
  const tiltable = document.getElementById("tiltable");

  function updateNow() {
      return counter++ % updateRate === 0;
  };

  //ATTACH TO MOBILE CTA IN ORDER TO TEST IF ITS WORKING!
  window.addEventListener("deviceorientation", function(event:any) {
    if (updateNow()) {
      let position = Math.round(event.gamma);
      if (Math.abs(position) > limit) {
        if (position > limit) {
              position = limit;
          } else {
              position = -limit;
                  }
          }
      position = position / -100;
      let style = "rotateY(" + position + "deg)";
      tiltable!.style.transform = style;
      }
  });

  
  onmousemove = (event) => {
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = event.clientY / sizes.height - 0.5  
    parallax();
  };

  function parallax(){
    document.querySelectorAll(".cta-shadow").forEach(function(move:any){
      const moving_value:number = move.getAttribute("data-value");
      let x = (cursor.x * moving_value) * 5 ;
      let y = (cursor.y * moving_value) * 5;

      const parallaxX = cursor.x
      const parallaxY = - cursor.y

      x += (parallaxX - x) * 0.2
      y += (parallaxY - y) * 0.2
      move.style.transform = "translateX(" +  Math.round(-x).toString() + "px) translateY(" +  Math.round(-y).toString() + "px)";
    });

    document.querySelectorAll(".cta").forEach(function(move:any){
      const moving_value:any = 2;
      let x = (cursor.x * moving_value) * 5 ;
      let y = (cursor.y * moving_value) * 5;

      const parallaxX = cursor.x
      const parallaxY = - cursor.y

      x += (parallaxX - x) * 0.2
      y += (parallaxY - y) * 0.2
      move.style.transform = "translateX(" +  Math.round(-x).toString() + "px) translateY(" +  Math.round(-y).toString() + "px)";
    });
  }

  // onresize = (event) => {
  //   cursor.x = event.clientX / sizes.width - 0.5
  //   cursor.y = event.clientY / sizes.height - 0.5
  // };

  //FOR THREEJS BACKGROUND REFER TO BLENDER FILE MOCKUP YOU DID

  // async function myAnimation() {
  //   await animate(scope.current, { rotate: -90 });
  //   await animate(scope.current, { scale: 1.5 });
  //   await animate(scope.current, { rotate: 0 });
  //   await animate(scope.current, { scale: 1 });
  //   await animate(
  //     scope.current,
  //     {
  //       x: 100
  //     },
  //     {
  //       repeat: Infinity,
  //       repeatType: "mirror",
  //       ease: "easeInOut",
  //       duration: 1
  //     }
  //   );
  // }

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

  

  return (
    <AnimatedPage>
      <div className="page home">
        <Helmet>
          <title>Fakeyys - Homepage</title>
          <meta name="description" content="Fakeyys, home to high quality fashion handbags" />
        </Helmet>
        <div className="grid">
          <div>
            <div></div>
            <img src={'/images/landing_image.png'}/>
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