import { useState } from 'react'
import { RxCross1  } from 'react-icons/rx';

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

const Window = () => {
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
    <div className='window'>
      <div className='head'>
        <h3>Your Cart</h3>
        <RxCross1 />
      </div>
      <hr className='divider'/>
      <div className='sub-head'>
        <p>1 item</p>
        <p>Clear all</p>
      </div>
      {cartItems.length > 0 && cartItems.map((item) => (
        <CartItem {...item}/>
      ))}
    </div>
  )
}

export default Window