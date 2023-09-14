import { useProductContext } from '../../contexts/product-context';
import { AiOutlineShoppingCart  } from 'react-icons/ai';

const Button = ({showCart, setShowCart}:any) => {
  const { cartCount } = useProductContext();
  return (
    <div className='cart button' onClick={() => setShowCart(!showCart)}>
      {cartCount > 0 && <div className='count'>
        <p>{cartCount}</p>
      </div>}
      <AiOutlineShoppingCart />
    </div>
  )
}

export default Button