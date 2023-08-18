import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AnimatedPage from "../AnimatedPage";
import { textVariant, variants } from "../utils/animation-variants";
import { fakeyysProducts } from "../static/product-list";
import { useProductContext } from "../contexts/product-context";
import { BsArrowLeft } from 'react-icons/bs';

interface Product {
    id: string,
    title: string,
    price: number,
    description: string,
    cover_image: string 
}

const Catalogue = () => {
  const [selectedId, setSelectedId] = useState<string>('');
  const [productList, setProductList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState<Product>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [showModalContent, setShowModalContent] = useState<boolean>(false);
  const [lockScroll, setLockScroll] = useState<boolean>(false);
  const { viewProduct, setViewProduct } = useProductContext();

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

  useEffect(() => {
    if(selectedId){
      window.history.pushState(null,'JavaScript',`/catalogue/${selectedId}`);
    }else{
      window.history.pushState(null,'JavaScript',`/catalogue`);
    }
  },[selectedProduct])
  
 
  function timeout(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  const openModal = async(item:Product) => {
    
    setViewProduct(true);
    setSelectedId(item.id); 
    setSelectedProduct(item);
    setIsModalOpen(true); 
    setLockScroll(true);

    await timeout(1000);
    setShowModalContent(true);
  }

  const closeModal = async() => {
    setShowModalContent(false); 
    setViewProduct(false);

    
    await timeout(1000);
    setSelectedId(''); 
    setSelectedProduct(undefined); 
    setIsModalOpen(false); 
    setLockScroll(false);
    return;
  }

  
  return (
    <AnimatedPage>
      <motion.div className="page catalogue" initial="initial" exit="exit">
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
              {productList.map(item => {
              const title = item.title.toUpperCase()
              
              return(
                <motion.div
                key={item.id} 
                className='product'
                variants={variants} 
                animate={isModalOpen ? 'hide' : 'show'} 
                layoutId={item.id} 
                onClick={()=> openModal(item)}  
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

              {selectedId && selectedProduct && isModalOpen && (
                <>
                  <div onClick={() => closeModal()} className="backdrop">
                      {viewProduct && <BsArrowLeft className='back-arrow' />}
                  </div>
                  <motion.div 
                    className="popup"
                    onClick={()=> closeModal()} 
                    layoutId={selectedId}
                    // variants={modalVariants} 
                    animate={isModalOpen ? 'hide' : 'hide'} 

                  >
                    <motion.div className='image-container'>
                        <motion.img src={selectedProduct.cover_image}/>
                      </motion.div>
                      <motion.div className='content'>
                          <motion.div className='head'>
                            <motion.p className="product-title">{selectedProduct.title}</motion.p>
                            <motion.p>${selectedProduct.price}</motion.p>
                          </motion.div>
                          <motion.div initial={{display: 'none', opacity:'0'}} animate={showModalContent ? {display: 'block', opacity:'1'} : {opacity:'0', display: 'none'}}  className='foot'>
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
          </motion.div>}
        </div>
      </motion.div>
    </AnimatedPage>
  )
}

export default Catalogue