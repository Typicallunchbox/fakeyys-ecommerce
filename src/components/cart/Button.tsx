import { AiOutlineShoppingCart  } from 'react-icons/ai';

const Button = ({showCart, setShowCart}:any) => {
  return (
    <div className='cart button' onClick={() => setShowCart(!showCart)}>
      <AiOutlineShoppingCart />
    </div>
  )
}

export default Button