import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AnimatedPage from "../AnimatedPage";
import { Helmet } from 'react-helmet';
import { motion, useAnimate } from "framer-motion";

const index = () => {
const navigate = useNavigate();
const [scope, animate] = useAnimate();
const transition = {duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9]}

const ctaAnimation = {
  initial: {
    opacity: 1, 
    scale:1, 
    backgroundColor: 'rgba(255, 255, 255, 0)',
  },
  animate: {
    opacity: 1
  },
  exit: {
    opacity: 1, 
    scale:10, 
    border: 'rgba(255, 255, 255)',
    backgroundColor: 'rgba(255, 255, 255)', 
    color: 'rgba(255, 255, 255)'
  }
}

const cursor = {x:0, y:0}
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}
  //Mouse move event listener
  onmousemove = (event) => {
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = event.clientY / sizes.height - 0.5
  
    parallax()

  };

  function parallax(){
    document.querySelectorAll(".cta-shadow").forEach(function(move:any){
      var moving_value:any = move.getAttribute("data-value");
      var x = (cursor.x * moving_value) * 5 ;
      var y = (cursor.y * moving_value) * 5;

      const parallaxX = cursor.x
      const parallaxY = - cursor.y

      x += (parallaxX - x) * 0.2
      y += (parallaxY - y) * 0.2
      move.style.transform = "translateX(" +  Math.round(-x) + "px) translateY(" +  Math.round(-y) + "px)";
    });

    // document.querySelectorAll(".cta").forEach(function(move:any){
    //   var moving_value:any = 1;
    //   var x = (cursor.x * moving_value) * 5 ;
    //   var y = (cursor.y * moving_value) * 5;

    //   const parallaxX = cursor.x
    //   const parallaxY = - cursor.y

    //   x += (parallaxX - x) * 0.2
    //   y += (parallaxY - y) * 0.2
    //   move.style.transform = "translateX(" +  Math.round(-x) + "px) translateY(" +  Math.round(-y) + "px)";
    // });
  }

  // onresize = (event) => {
  //   cursor.x = event.clientX / sizes.width - 0.5
  //   cursor.y = event.clientY / sizes.height - 0.5
  // };

  //FOR THREEJS BACKGROUND REFER TO BLENDER FILE MOCKUP YOU DID

  async function myAnimation() {
    await animate(scope.current, { rotate: -90 });
    await animate(scope.current, { scale: 1.5 });
    await animate(scope.current, { rotate: 0 });
    await animate(scope.current, { scale: 1 });
    animate(
      scope.current,
      {
        x: 100
      },
      {
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        duration: 1
      }
    );
  }

  useEffect(() => {
    myAnimation();
  }, []);

  return (
    // <AnimatedPage>
      <div className="page home">
        <Helmet>
          <title>Fakeyys - Homepage</title>
          <meta name="description" content="Fakeyys, home to high quality fashion handbags" />
        </Helmet>
        <img className="ThreeJSImg" src={'./images/landingMockup.png'} alt="landingMock" />
        <motion.div ref={scope} variants={ctaAnimation} exit={'exit'} animate={'animate'} initial={'initial'} transition={transition} onClick={() => {navigate("/catalogue")}} className="cta">
          <h3>VIEW CATALOGUE</h3>
        </motion.div>
        <motion.div exit={{opacity: 0}} transition={transition} id="cta-shadow" className="cta-shadow" data-value="5">
          <h3>VIEW CATALOGUE</h3>
        </motion.div>
        <motion.div exit={{opacity: 0}} transition={transition} id="cta-shadow" className="cta-shadow blue" data-value="10">
          <h3>VIEW CATALOGUE</h3>
        </motion.div>
        <div className="creators">
          <h3>GERMAN MADE</h3>
          <h3>SWISS DESIGNED</h3>
        </div>
        <div className="time">
          <h3>ES 08:52 PM</h3>
        </div>
      </div>
      // </AnimatedPage>
  )
}

export default index