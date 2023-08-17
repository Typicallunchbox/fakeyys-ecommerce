import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import ismage from '../../../public/images/black-white-handbag.jpg'

type ImagePopupProps = {
    image: string
}

const ImagePopup = ({image}:ImagePopupProps) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updateMousePosition = (e) => {
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
    transform: 'translate(-50%, -50%)',
    width: '285px',
    height: '450px',
    borderRadius: '20px',
    // filter: ' blur(20px)',
    backgroundColor: 'rgb(255, 67, 75)',
    backgroundImage: `url('./images/${image}')`,
    opacity: 0.6,
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
    ></motion.div>
  );
};


export default ImagePopup;
