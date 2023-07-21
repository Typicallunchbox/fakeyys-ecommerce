const index = () => {

  /**
 * Cursor
 */
const cursor = {x:0, y:0}
cursor.x = 0
cursor.y = 0

  /**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}
  //Mouse move event listener
  onmousemove = (event) => {
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = event.clientY / sizes.height - 0.5
  
    parallax()

  };

  function parallax(e){
    document.querySelectorAll(".cta-shadow").forEach(function(move){
      var x = (cursor.x * 50) ;
      var y = (cursor.y * 50) ;

      const parallaxX = cursor.x
      const parallaxY = - cursor.y

      x += (parallaxX - x) * 0.2
      y += (parallaxY - y) * 0.2
      move.style.transform = "translateX(" +  Math.round(x) + "px) translateY(" +  Math.round(y) + "px)";
    });
  }

  // onresize = (event) => {
  //   cursor.x = event.clientX / sizes.width - 0.5
  //   cursor.y = event.clientY / sizes.height - 0.5
  // };

  return (
    <div className="page home">
      <div className="cta">
        <h3>VIEW CATALOGUE</h3>
      </div>
      <div id="cta-shadow" className="cta-shadow">
        <h3>VIEW CATALOGUE</h3>
      </div>
      <div className="creators">
        <h3>GERMAN MADE</h3>
        <h3>SWISS DESIGNED</h3>
      </div>
      <div className="time">
        <h3>ES 08:52 PM</h3>
      </div>
    </div>
  )
}

export default index