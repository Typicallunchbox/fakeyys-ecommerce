import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import video from './videos/mubien_clip.webm'

type VideoPopupProps = {
    video: string
}

const VideoPopup = ({video}:VideoPopupProps) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updateMousePosition = (e:any) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  const style = {
    width: '450px',
    left: '180px',
    top: '80px',
    overflow: 'hidden',
    opacity: 0.9,
    zIndex: 2,
  };

  const variants = {
    default: {
      x: mousePosition.x - 200,
      y: mousePosition.y - 200,
      scale: 1,
      // rotate: [0, 0, 0, 0, 270],
      // borderRadius: ['20%', '20%', '50%', '50%', '20%'],
    },
  };


  return (
    <motion.div
      className={`fixed-playground`}
      style={style}
      variants={variants}
      animate="default"
      transition={{
        x: {
          duration: 0.3,
          ease: 'linear',
          repeat: 0,
          type: 'spring',
          stiffness: 80,
        },
        y: {
          duration: 0.3,
          ease: 'linear',
          repeat: 0,
          type: 'spring',
          stiffness: 80,
        },
        default: {
          duration: 2.5,
          repeat: Infinity,
        },
      }}
    >
      <video src={`./videos/${video}`} controls autoPlay muted loop></video> 
    </motion.div>
  );
};


export default VideoPopup;
