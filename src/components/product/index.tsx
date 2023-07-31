import React, {useState} from 'react'
import './style.scss';
import { motion } from 'framer-motion';

interface Props {
  item: {
    id: number,
    title: string,
    price: number,
    description: string,
    cover_image: string
  },
  key: number,
  isSelected: number,
  setIsSelected: number,
}



const product = (props:Props) => {
  const {item, key, isSelected, setIsSelected, layoutId} = props;
  const title = item.title.toUpperCase()

  const setProductId = (id:number) => {
    setIsSelected(id)
  }
const transition = {duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9]}


  const animation = {
    initial: {
      width: '50vw', 
      maxWidth:'800px', 
      height:'auto', 
      scale:1,
    }
  }
  
  return (
    <motion.div layoutId={layoutId} onClick={()=>{setProductId(item.id)}} {...animation}  animate={isSelected===item.id?{scale:1,top:0, left:'50%', transform:'translateX(-50%)', position: 'fixed'}:''}  className='product'>
        <motion.div className='image-container'>
          <img src={item.cover_image}/>
        </motion.div>
        <motion.div className='content'>
            <motion.div className='head'>
              <motion.p>{title}</motion.p>
              <motion.p>${item.price}</motion.p>
            </motion.div>
            <motion.div className='foot'>

            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default product