import { motion } from "framer-motion";
import { Fragment, useState } from 'react';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';
import { LiaShoppingCartSolid } from 'react-icons/lia';
import { RxCross1 } from 'react-icons/rx';
import { useProductContext } from '../../contexts/product-context';
import { useDeviceContext } from "../../contexts/device-context";

const CartItem = ({item}:any) => {
	const { isMobile } = useDeviceContext();
	const { setItems, removeItems } = useProductContext();
  const [showControl, setShowControl] = useState(false);
  return (
    <motion.div onHoverEnd={() => setShowControl(false)} onHoverStart={() => setShowControl(true)} className='cart-item'>
      <motion.div initial={{opacity:0}} animate={showControl || isMobile ? {opacity:1}:{opacity:0}} className='delete-item' onClick={() => removeItems(item.id)}>
        <RxCross1 />
      </motion.div>
      <div>
        <img src={item.cover_image}/>
        <div className='quantity'>
        <div onClick={() => setItems({item, countDirection:'-'})}><BiSolidLeftArrow /></div>
        <p>{`x${item.count}`}</p>
        <div onClick={() => setItems({item, countDirection:'+'})}><BiSolidRightArrow /></div>
        </div>
      </div>
      <div className='info'>
        <p>{item.title}</p>
        <p className='tag'>{item.tag}</p>
      </div>
      <div className='price'>
        <p>${item.price}</p>
      </div>
    </motion.div>
  )
}

const Window = ({showCart, setShowCart}:any) => {
	const { totalPrice, cartItems, cartCount, clearCart } = useProductContext();
  const [checkoutMessage, setCheckoutMessage] = useState('');

  const variants = {
    show: {opacity: 1, x:0, transition: {duration: 1}},
    hide: {opacity: 0, x:400,transition: {duration: 1}}
  };

  const checkout = () => {
    clearCart();
    setCheckoutMessage('This is not an actual checkout process. Thanks for viewing my site :)')
    
  }
  
  return (
    <motion.div variants={variants} initial={'hide'} animate={showCart ? 'show' : 'hide'} className='cart window'>
      <div className='head'>
        <h3>Your Cart</h3>
        <div onClick={() => setShowCart(false)}><RxCross1 /></div>
      </div>
      <hr className='divider'/>
      {cartCount > 0 && <div className='sub-head'>
        <p>{cartCount} item/s</p>
        <p className='clear' onClick={() => cartCount > 0 ? clearCart() : null}>Clear all</p>
      </div>}
      <div className='cart-content'>
        {cartItems.length > 0 ? 
        cartItems.map((item:any) => (
          <Fragment key={item.id}>
            <CartItem item={item}/>
            <hr className='item-divider' />
          </Fragment>
        ))
        : 
        <div className='no-items'>
          <LiaShoppingCartSolid />
          <p>No items in cart...</p>
        </div>
        }
      </div>
      <div className='total'>
        <p>Total price</p>
        <p>${totalPrice > 0 ? totalPrice : '0'}</p>
      </div>
      <button onClick={() => checkout()} disabled={cartCount > 0 ? false : true} className={`btn ${cartCount === 0 ? 'disabled' : ''}`}>Check out</button>
      <p className='checkout-message'>{checkoutMessage}</p>
    </motion.div>
  )
}

export default Window