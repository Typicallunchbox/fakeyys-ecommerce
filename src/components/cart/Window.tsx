import { useState, useEffect, Fragment } from 'react'
import { RxCross1  } from 'react-icons/rx';
import { BiSolidLeftArrow, BiSolidRightArrow  } from 'react-icons/bi';
import { motion, usePresence } from "framer-motion";
import { useProductContext } from '../../contexts/product-context';
import { iCartItem } from '../../typings/index';


const CartItem = ({cover_image, title, tag, price, count}:iCartItem) => {
  return (
    <div className='cart-item'>
      <div className='delete-item'>
        <RxCross1 />
      </div>
      <div>
        <img src={cover_image}/>
        <div className='quantity'>
        <BiSolidLeftArrow />
        <p>{`x${count}`}</p>
        <BiSolidRightArrow />
        </div>
      </div>
      <div className='info'>
        <p>{title}</p>
        <p className='tag'>{tag}</p>
      </div>
      <div className='price'>
        <p>${price}</p>
      </div>
    </div>
  )
}


const Window = ({showCart, setShowCart}:any) => {
	const { cartItems, removeItems } = useProductContext();

  const removeSelf = (n:any) => {
    removeItems(n);
  }

  const variants = {
    show: {opacity: 1, x:0, transition: {duration: 1}},
    hide: {opacity: 0, x:400,transition: {duration: 1}}
  };
  
  return (
    <motion.div variants={variants} initial={'hide'} animate={showCart ? 'show' : 'hide'} className='cart window'>
      <div className='head'>
        <h3>Your Cart</h3>
        <div onClick={() => setShowCart(false)}><RxCross1 /></div>
      </div>
      <hr className='divider'/>
      <div className='sub-head'>
        <p>1 item</p>
        <p className='clear'>Clear all</p>
      </div>
      <div className='cart-content'>
        {cartItems.length > 0 ? 
        cartItems.map((item) => (
          <Fragment key={item.id}>
            <CartItem {...item}/>
            <hr className='item-divider' />
          </Fragment>
        ))
        : 
        <div>
          <p>No items in cart...</p>
        </div>
        }
      </div>
      <div className='total'>
        <p>Total price</p>
        <p>$345</p>
      </div>
      <button className='btn'>Check out</button>
    </motion.div>
  )
}

export default Window