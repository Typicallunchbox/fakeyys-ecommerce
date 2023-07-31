import AnimatedPage from "../AnimatedPage";
import { motion, AnimatePresence } from "framer-motion";
import Product from "../components/product";
import { useState } from "react";

const catalogue = () => {
  const [isSelected, setIsSelected] = useState(null)
  const [selectedId, setSelectedId] = useState<string>('')
  const [selectedProduct, setSelectedProduct] = useState<object>({})
  const fakeyysProducts = [
    {
      id: '0',
      title: '0',
      cover_image: './images/glasses.jpg',
      product_images: '',
      price: 120.00,
      description: ''
    },
    {
      id: '1',
      title: '1',
      cover_image: './images/glasses.jpg',
      product_images: '',
      price: 120.00,
      description: ''
    },
    {
      id: '2',
      title: 'Dark Cosmic Purple',
      cover_image: './images/glasses.jpg',
      product_images: '',
      price: 120.00,
      description: ''
    },
    {
      id: '3',
      title: 'Dark Cosmic Purple',
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
      <motion.div className="page catalogue" initial="initial" animate="animate" exit="exit">
        <div className="content">
          <h2>FAKEYYS GLASSES</h2>
          <p>CHECKOUT OUR NEW RANGE OF LIMITED EDITION GLASSES.</p>
          <p>EACH HAND MADE IN GERMANY BY OUR SKILLED CRAFTSMEN.</p>
          <div className="product-list">
              {fakeyysProducts.map(item => {
              const title = item.title.toUpperCase()

              return(
                <motion.div layoutId={item.id} onClick={()=>{setSelectedId(item.id); setSelectedProduct(item)}}  className='product'>
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

              {selectedId && selectedProduct && (
                <motion.div onClick={()=>{setSelectedId(''); setSelectedProduct({})}} layoutId={selectedId} className="popup">
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