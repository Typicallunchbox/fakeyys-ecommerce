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
  const {item, key, isSelected, setIsSelected} = props;
  const title = item.title.toUpperCase()

  const setProductId = (id:number) => {
    setIsSelected(id)
  }
  
  return (
    <motion.div onClick={()=>{setProductId(item.id)}} initial={{width: '50vw', maxWidth:'800px', height:'auto', scale:1, }} animate={isSelected===item.id?{scale:1,top:0, left:'50%', transform:'translateX(-50%)', position: 'fixed'}:''}  className='product'>
        <div className='image-container'>
          <img src={item.cover_image}/>
        </div>
        <div className='content'>
            <div className='head'>
              <p>{title}</p>
              <p>${item.price}</p>
            </div>
            <div className='foot'>

            </div>
        </div>
    </motion.div>
  )
}

export default product