import AnimatedPage from "../AnimatedPage";
import { motion } from "framer-motion";
import Product from "../components/product";
import { useState } from "react";

const catalogue = () => {
  const [isSelected, setIsSelected] = useState(null)
  const fakeyysProducts = [
    {
      id: 0,
      title: '0',
      cover_image: './images/glasses.jpg',
      product_images: '',
      price: 120.00,
      description: ''
    },
    {
      id: 1,
      title: '1',
      cover_image: './images/glasses.jpg',
      product_images: '',
      price: 120.00,
      description: ''
    },
    {
      id: 2,
      title: 'Dark Cosmic Purple',
      cover_image: './images/glasses.jpg',
      product_images: '',
      price: 120.00,
      description: ''
    },
    {
      id: 3,
      title: 'Dark Cosmic Purple',
      cover_image: './images/glasses.jpg',
      product_images: '',
      price: 120.00,
      description: ''
    },
    {
      id: 4,
      title: 'Dark Cosmic Purple',
      cover_image: './images/glasses.jpg',
      product_images: '',
      price: 120.00,
      description: ''
    },
    {
      id: 5,
      title: 'Dark Cosmic Purple',
      cover_image: './images/glasses.jpg',
      product_images: '',
      price: 120.00,
      description: ''
    },
    {
      id: 6,
      title: 'Dark Cosmic Purple',
      cover_image: './images/glasses.jpg',
      product_images: '',
      price: 120.00,
      description: ''
    },
    {
      id: 7,
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
            {fakeyysProducts.map((item) => {
              const title = item.title.toUpperCase();
              if(item.id === isSelected){
                return(
                //   <motion.div className='product'>
                //     <div className='image-container'>
                //       <img src={item.cover_image}/>
                //     </div>
                //     <div className='content'>
                //         <div className='head'>
                //           <p>{title}</p>
                //           <p>${item.price}</p>
                //         </div>
                //         <div className='foot'>

                //         </div>
                //     </div>
                // </motion.div>
                <>
                <div className="product">
                <button type="button" onClick={() => setIsSelected(null)}>Back</button>

                </div>
                <Product setIsSelected={setIsSelected} isSelected={isSelected} item={item} key={item.id} />
                </>
                )
              }else{
                return(
                  <Product setIsSelected={setIsSelected} isSelected={isSelected} item={item} key={item.id} />
                  // <div></div>  
             )}
             })}
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