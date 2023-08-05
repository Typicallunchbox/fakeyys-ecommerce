import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AnimatedPage from "../AnimatedPage";
import { D2standard } from "../utils/animation-transitions";
import { textVariant, variants } from "../utils/animation-variants";

interface Product {
    id: string,
    title: string,
    price: number,
    description: string,
    cover_image: string 
}

const catalogue = () => {
  const [selectedId, setSelectedId] = useState<string>('')
  const [selectedProduct, setSelectedProduct] = useState<Product>()
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [lockScroll, setLockScroll] = useState<boolean>(false);

  useEffect(() => {
    if(openModal) {
      document.querySelector("body")!.classList.add('no-scroll');
    }else{
      document.querySelector("body")!.classList.remove('no-scroll');
    }
}, [lockScroll])

useEffect(() => {
  console.log(selectedId)
  if(selectedId){
    window.history.pushState(null,'JavaScript',`/catalogue/${selectedId}`);
  }else{
    window.history.pushState(null,'JavaScript',`/catalogue`);
  }
  },[selectedProduct])
  
  //Test Payload Data
  const fakeyysProducts = [
    {
      id: '0',
      title: 'Dark Cosmic Red',
      cover_image: './images/black-white-handbag.jpg',
      product_images: '',
      price: 120.00,
      description: `Introducing the epitome of timeless elegance, our black and white fashion handbag effortlessly blends 
                    sophistication with versatility. Crafted from premium vegan leather, its sleek monochrome design exudes 
                    class, making it the perfect accessory for any occasion. With ample storage space and a thoughtfully designed 
                    interior, organizing your essentials becomes a breeze. The bag's detachable shoulder strap adds practicality, 
                    allowing you to switch effortlessly between a handheld and crossbody style. Whether it's a formal event or a 
                    casual outing, this handbag complements any ensemble, making a bold statement that transcends seasons and trends. 
                    Elevate your style with this iconic piece today.`
    },
    {
      id: '1',
      title: 'Dark Cosmic Blue',
      cover_image: './images/green-black-handbag.jpg',
      product_images: '',
      price: 120.00,
      description: `Behold the embodiment of opulence and sophistication – our dark crocodile skin green fashion handbag. 
                    Meticulously handcrafted from genuine crocodile leather, its rich emerald hue adds a captivating touch to any 
                    outfit. The exotic texture exudes luxury, while the spacious interior accommodates all your essentials with ease. 
                    Accentuated with gold-tone hardware and a sturdy handle, this bag showcases unrivaled durability and style. From 
                    upscale soirees to chic evenings out, this statement piece commands attention and elevates your fashion game. 
                    Own a piece of timeless allure that embodies the epitome of high-end fashion and artistry.`
    },
    {
      id: '2',
      title: 'Dark Wood Yellow',
      cover_image: './images/maroon-white-handbag.jpg',
      product_images: '',
      price: 120.00,
      description: ''
    },
    {
      id: '3',
      title: 'Dark Wood Cyan',
      cover_image: './images/yellow-black-handbagv2.jpg',
      product_images: '',
      price: 120.00,
      description: ''
    },
    {
      id: '4',
      title: 'Dark Cosmic Purple',
      cover_image: './images/red-black-handbagv2.jpg',
      product_images: '',
      price: 120.00,
      description: ''
    },
    {
      id: '5',
      title: 'Dark Cosmic Purple',
      cover_image: './images/yellow-black-handbag.jpg',
      product_images: '',
      price: 120.00,
      description: ''
    },
    {
      id: '6',
      title: 'Dark Cosmic Purple',
      cover_image: './images/orange-black-handbag.jpg',
      product_images: '',
      price: 120.00,
      description: ''
    },
    {
      id: '7',
      title: 'Dark Cosmic Purple',
      cover_image: './images/red-black-handbagv2.jpg',
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
                  <div onClick={() => {setSelectedId(''); setSelectedProduct(undefined); setOpenModal(false); setLockScroll(false)}} className="backdrop"></div>
                  <motion.div 
                    className="popup"
                    onClick={()=>{setSelectedId(''); setSelectedProduct(undefined); setOpenModal(false); setLockScroll(false)}} 
                    layoutId={selectedId} 
                  >
                    <motion.div className='image-container'>
                        <motion.img src={selectedProduct.cover_image}/>
                      </motion.div>
                      <motion.div className='content'>
                          <motion.div className='head'>
                            <motion.p className="product-title">{selectedProduct.title}</motion.p>
                            <motion.p>${selectedProduct.price}</motion.p>
                          </motion.div>
                          <motion.div initial={{display:'none'}} animate={{display:'block'}} transition={D2standard} className='foot'>
                            <motion.p>{selectedProduct.description}</motion.p>
                            <motion.p>${selectedProduct.price}</motion.p>
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