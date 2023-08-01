import AnimatedPage from "../AnimatedPage";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    cover_image: string
}

const catalogue = () => {
  const [selectedId, setSelectedId] = useState<string>('')
  const [selectedProduct, setSelectedProduct] = useState<Product | {}>({})
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [lockScroll, setLockScroll] = useState<boolean>(false);

  useEffect(() => {
    if(openModal) {
      document.querySelector("body")!.classList.add('no-scroll');
    }else{
      document.querySelector("body")!.classList.remove('no-scroll');
    }
}, [lockScroll])

useCallback(
  () => {
    const title = selectedProduct.title.toUpperCase()
    setSelectedProduct({...selectedProduct, title: title})
  },
  [selectedProduct],
)

  // Framer Animations
  const transition = {duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9]}
  const variants = {
    load: {opacity: 1, transition: {duration: 0.5}},
    show: {opacity: 1, transition: {duration: 0}},
    hide: {opacity: 0,transition: {duration: 0.5}}
  };
  const textVariant = {
    initial: {opacity: 1, transition: {duration: 0}},
    show: {opacity: 0,transition: {duration: 0.5}},
    hide: {opacity: 0,transition: {duration: 0.5}}
  };

  //Test Payload Data
  const fakeyysProducts = [
    {
      id: '0',
      title: 'Dark Cosmic Red',
      cover_image: './images/glasses.jpg',
      product_images: '',
      price: 120.00,
      description: ''
    },
    {
      id: '1',
      title: 'Dark Cosmic Blue',
      cover_image: './images/glasses.jpg',
      product_images: '',
      price: 120.00,
      description: ''
    },
    {
      id: '2',
      title: 'Dark Wood Yellow',
      cover_image: './images/glasses.jpg',
      product_images: '',
      price: 120.00,
      description: ''
    },
    {
      id: '3',
      title: 'Dark Wood Cyan',
      cover_image: './images/glasses.jpg',
      product_images: '',
      price: 120.00,
      description: ''
    },
    {
      id: '4',
      title: 'Dark Cosmic Purple',
      cover_image: './images/glasses.jpg',
      product_images: '',
      price: 120.00,
      description: ''
    },
    {
      id: '5',
      title: 'Dark Cosmic Purple',
      cover_image: './images/glasses.jpg',
      product_images: '',
      price: 120.00,
      description: ''
    },
    {
      id: '6',
      title: 'Dark Cosmic Purple',
      cover_image: './images/glasses.jpg',
      product_images: '',
      price: 120.00,
      description: ''
    },
    {
      id: '7',
      title: 'Dark Cosmic Purple',
      cover_image: './images/glasses.jpg',
      product_images: '',
      price: 120.00,
      description: ''
    }
  ]
  return (
    <AnimatedPage>
      <motion.div className="page catalogue" initial="initial" exit="exit">
        <div className="content">
          <motion.div 
            variants={textVariant} 
            initial={'load'} 
            animate={openModal ? 'hide' : 'start'} 
            className="page-header"
            >
            <motion.h2>FAKEYYS GLASSES</motion.h2>
            <motion.p>CHECKOUT OUR NEW RANGE OF LIMITED EDITION GLASSES.</motion.p>
            <motion.p>EACH HAND MADE IN GERMANY BY OUR SKILLED CRAFTSMEN.</motion.p>
          </motion.div>
          <div className="product-list">
              {fakeyysProducts.map(item => {
              const title = item.title.toUpperCase()

              return(
                <motion.div
                key={item.id} 
                className='product'
                variants={variants} 
                animate={openModal ? 'hide' : 'show'} 
                layoutId={item.id} 
                onClick={()=>{setSelectedId(item.id); setSelectedProduct(item); setOpenModal(true); setLockScroll(true)}}  
                >
                    <motion.div className='image-container'>
                        <motion.img src={item.cover_image}/>
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
              )})}

              {selectedId && selectedProduct && openModal && (
                <>
                  <div onClick={() => {setOpenModal(false)}} className="backdrop"></div>
                  <motion.div 
                    className="popup"
                    onClick={()=>{setSelectedId(''); setSelectedProduct({}); setOpenModal(false); setLockScroll(false)}} 
                    layoutId={selectedId} 
                  >
                    <motion.div className='image-container'>
                        <motion.img src={selectedProduct.cover_image}/>
                      </motion.div>
                      <motion.div className='content'>
                          <motion.div className='head'>
                            <motion.p>{selectedProduct.title}</motion.p>
                            <motion.p>${selectedProduct.price}</motion.p>
                          </motion.div>
                          <motion.div className='foot'>
              
                          </motion.div>
                      </motion.div>
                  </motion.div>
                </>
              )}
          <div className="product">
              <img src={'./images/comingSoon.png'}/>  
          </div>
          </div>
        </div>
      </motion.div>
    </AnimatedPage>
  )
}

export default catalogue