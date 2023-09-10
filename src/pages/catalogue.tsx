import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AnimatedPage from "../AnimatedPage";
import { textVariant, variants } from "../utils/animation-variants";
import { fakeyysProducts } from "../static/product-list";
import { useProductContext } from "../contexts/product-context";
import { BsArrowLeft } from 'react-icons/bs';
import Scene from '../components/canvas/catalogue-canvas';
import { Product } from '../typings/index';


const Catalogue = () => {
  //page variables
  const [selectedId, setSelectedId] = useState<string>('');
  const [productList, setProductList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState<Product>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [showModalContent, setShowModalContent] = useState<boolean>(false);
  const [lockScroll, setLockScroll] = useState<boolean>(false);
  const [hoveredProduct, setHoveredProduct] = useState<Product>();
  const { viewProduct, setViewProduct, setCartItems } = useProductContext();

  useEffect(() => {
    if(fakeyysProducts && fakeyysProducts.length > 0){
      setProductList(fakeyysProducts)
    }
    if(isModalOpen) {
      document.querySelector("body")!.classList.add('no-scroll');
    }else{
      document.querySelector("body")!.classList.remove('no-scroll');
    }
}, [lockScroll])

  // useEffect(() => {
  //   if(selectedId){
  //     window.history.pushState(null,'JavaScript',`/catalogue/${selectedId}`);
  //   }else{
  //     window.history.pushState(null,'JavaScript',`/catalogue`);
  //   }
  // },[selectedProduct])
  
 
  function timeout(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  const openModal = async(item:Product) => {
    
    setViewProduct(true);
    setSelectedId(item.id); 
    setSelectedProduct(item);
    setIsModalOpen(true); 
    setLockScroll(true);

    await timeout(600);
    setShowModalContent(true);
  }

  const closeModal = async() => {
    setShowModalContent(false); 
    setViewProduct(false);
    setHoveredProduct(null);

    
    await timeout(600);
    setSelectedId(''); 
    setSelectedProduct(undefined); 
    setIsModalOpen(false); 
    setLockScroll(false);
    return;
  }

  const addItem = (item) => {
    setCartItems(item);
  }

  
  return (
    <AnimatedPage>
      <motion.div className="page catalogue" initial="initial" exit="exit">
        <div className="viewport"></div>
        <Scene selectedProduct={selectedProduct} hoveredProduct={hoveredProduct}/>
        <BsArrowLeft onClick={() => closeModal()} className={`back-arrow ${viewProduct ? 'show' : 'hide'}`} />
        <div className="content">
          <motion.div 
            variants={textVariant} 
            initial={'load'} 
            animate={isModalOpen ? 'hide' : 'start'} 
            className="page-header"
            >
            <motion.h2>FAKEYYS HANDBAGS</motion.h2>
            <motion.p>CHECKOUT OUR NEW RANGE OF LIMITED EDITION HANDBAGS.</motion.p>
            <motion.p>EACH HAND MADE IN GERMANY BY OUR SKILLED CRAFTSMEN.</motion.p>
          </motion.div>
          {productList && <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{delay:0.25}}} className="product-list">
              {productList.map((item:Product) => {
              const title = item.title.toUpperCase()
              
              return(
                <motion.div
                key={item.id} 
                className='product'
                variants={variants} 
                animate={isModalOpen ? 'hide' : 'show'} 
                layoutId={item.id} 
                onClick={()=> {openModal(item); setHoveredProduct(item)}}
                onHoverEnd={() => {setHoveredProduct(null);}} onHoverStart={() => {setHoveredProduct(item);}}
                >
                    <motion.div className='image-container'>
                        <motion.img src={item.cover_image}/>
                    </motion.div>
                    <motion.div className='content' animate={hoveredProduct?.id === item.id ? {background: `rgb(40,40,40)`, color: 'white'} : {background: `transparent`, color: 'black'}}>
                        <motion.div className='head' initial={{opacity:1}} animate={hoveredProduct?.id === item.id ? {scale: 1.0} : !hoveredProduct ? {opacity:1} : {opacity:0}}>
                          <motion.p>{title}</motion.p>
                          <motion.p>${item.price}</motion.p>
                        </motion.div>
                        <motion.div className='foot'>
            
                        </motion.div>
                    </motion.div>
                </motion.div>
              )})}

              {selectedId && selectedProduct && isModalOpen && (
                <>
                  <div onClick={() => closeModal()} className="backdrop"></div>
                  <motion.div 
                    className="popup"
                    // onClick={()=> closeModal()} 
                    layoutId={selectedId}
                    initial={{translateX: '50% !important'}}
                    // style={{left: '50%', transformOrigin: 'none'}}
                    // variants={modalVariants} 
                    // animate={isModalOpen ? 'hide' : 'hide'} 

                  >
                    <motion.div className='image-container'>
                        <motion.img src={selectedProduct.cover_image}/>
                      </motion.div>
                      <motion.div className='content'>
                          <motion.div className='head'>
                            <motion.p className="product-title">{selectedProduct.title}</motion.p>
                            <motion.p>${selectedProduct.price}</motion.p>
                          </motion.div>
                          <motion.div initial={{display: 'none', opacity:'0'}} animate={showModalContent ? {display: 'flex', opacity:'1'} : {opacity:'0', display: 'none'}}  className='foot'>
                            <motion.p>{selectedProduct.description}</motion.p>
                            {/* Add fabric texture animation on hover of button */}
                            <motion.button onClick={() => {addItem(selectedProduct)}}>ADD TO CART</motion.button>
                          </motion.div>
                      </motion.div>
                  </motion.div>
                </>
              )}
          {isModalOpen && <div className="product">
              <img src={'./images/comingSoon.png'}/>  
          </div>}
          </motion.div>}
        </div>
      </motion.div>
    </AnimatedPage>
  )
}

export default Catalogue