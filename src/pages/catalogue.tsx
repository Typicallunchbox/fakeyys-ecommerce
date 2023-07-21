import AnimatedPage from "../AnimatedPage";

const catalogue = () => {
  const fakeyysProducts = [
    {
      id: 0,
      title: 'Dark Cosmic Purple',
      cover_image: './images/glasses.jpg',
      product_images: '',
      price: 120.00,
      description: ''
    },
    {
      id: 1,
      title: 'Dark Cosmic Purple',
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
      <div className="page catalogue">
        <div className="content">
          <h2>FAKEYYS GLASSES</h2>
          <p>CHECKOUT OUR NEW RANGE OF LIMITED EDITION GLASSES.</p>
          <p>EACH HAND MADE IN GERMANY BY OUR SKILLED CRAFTSMEN.</p>
          <div className="product-list">
            {fakeyysProducts.map((item) => {
              const title = item.title.toUpperCase();
              return(
                <div className="product" key={item.id}>
                  <img src={item.cover_image}/>
                  <div>
                    <p>{title}</p>
                    <p>${item.price}</p>
                  </div>  
                </div>
              )})}
          <div className="product">
              <img src={'./images/comingSoon.png'}/>  
          </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  )
}

export default catalogue