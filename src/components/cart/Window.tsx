import { useState, Fragment } from 'react'
import { RxCross1  } from 'react-icons/rx';
import { motion } from "framer-motion";


type CartItemProps = {
  image: string,
  name: string,
  tag: string,
  price: number
}

const CartItem = ({image, name, tag, price}:CartItemProps) => {
  return (
    <div className='cart-item'>
      <img src={image}/>
      <div className='info'>
        <p>{name}</p>
        <p className='tag'>{tag}</p>
      </div>
      <div className='price'>
        <p>${price}</p>
      </div>
    </div>
  )
}

const variants = {
  show: {opacity: 1, x:0, transition: {duration: 1}},
  hide: {opacity: 0, x:400,transition: {duration: 1}}
};

const Window = ({showCart, setShowCart}:any) => {
  const [cartProducts, setCartProducts] = useState([])
  const cartItems = [
    {
      id: 0,
      image: './images/black-white-handbag.jpg',
      name:"Super Clean Cotton Red Socks",
      tag:"Everyones Favourite",
      price: 120
    },
    {
      id: 1,
      image: './images/green-black-handbag.jpg',
      name:"Gucci Black Handbag",
      tag:"Mysterious like.",
      price: 182
    },
    {
      id: 2,
      image: './images/maroon-white-handbag.jpg',
      name:"Dark Red Velvet Purse",
      tag:"For the bold",
      price: 99
    },
    
  ];

  return (
    <motion.div variants={variants} initial={'hide'} animate={showCart ? 'show' : 'hide'} className='cart window'>
      <div className='head'>
        <h3>Your Cart</h3>
        <div onClick={() => setShowCart(false)}><RxCross1 /></div>
      </div>
      <hr className='divider'/>
      <div className='sub-head'>
        <p>1 item</p>
        <p>Clear all</p>
      </div>
      <div className='cart-content'>
        {cartItems.length > 0 && cartItems.map((item) => (
          <Fragment key={item.id}>
            <CartItem {...item}/>
            <hr className='item-divider' />
          </Fragment>
        ))}
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