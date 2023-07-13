const catalogue = () => {
  const fakeyysProducts = [
    {
      id: 0,
      title: 'Dark Cosmic Purple',
      cover_image: '',
      product_images: '',
      price: 120.00,
      description: ''
    },
    {
      id: 1,
      title: 'Dark Cosmic Purple',
      cover_image: '',
      product_images: '',
      price: 120.00,
      description: ''
    },
    {
      id: 2,
      title: 'Dark Cosmic Purple',
      cover_image: '',
      product_images: '',
      price: 120.00,
      description: ''
    },
    {
      id: 3,
      title: 'Dark Cosmic Purple',
      cover_image: '',
      product_images: '',
      price: 120.00,
      description: ''
    }
  ]
  return (
    <div className="page catalogue">
      <div className="content">
        <h2>FAKEYYS GLASSES</h2>
        <p>CHECKOUT OUR NEW RANGE OF LIMITED EDITION GLASSES.</p>
        <p>EACH HAND MADE IN GERMANY BY OUR SKILLED CRAFTSMEN.</p>
        <div className="product-list">
          {fakeyysProducts.map((item) => (
            <div className="product" key={item.id}>
              <img/>
              <div>
                <p>{item.title}</p>
                <p>{item.price}</p>
              </div>  
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default catalogue