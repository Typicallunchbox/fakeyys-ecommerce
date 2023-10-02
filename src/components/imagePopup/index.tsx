import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ImagePopupTran } from '../../utils/animation-transitions';

type ImagePopupProps = {
    image: string
}

const ImagePopup = ({image}:ImagePopupProps) => {
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

  const variants = {
    default: {
      x: mousePosition.x - 200,
      y: mousePosition.y - 200,
      scale: 1,
    },
  };

  return (
    <motion.div
      className={`fixed-playground`}
      variants={variants}
      animate="default"
      transition={ImagePopupTran}
    ></motion.div>
  );
};


export default ImagePopup;
