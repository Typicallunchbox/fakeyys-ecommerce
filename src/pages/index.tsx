import { useNavigate } from "react-router-dom";
import AnimatedPage from "../AnimatedPage";
import { Helmet } from 'react-helmet';


const index = () => {
const navigate = useNavigate();

const cursor = {x:0, y:0}
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

  function parallax(){
    document.querySelectorAll(".cta-shadow").forEach(function(move:any){
      var moving_value:any = move.getAttribute("data-value");
      var x = (cursor.x * moving_value) * 5 ;
      var y = (cursor.y * moving_value) * 5;

      const parallaxX = cursor.x
      const parallaxY = - cursor.y

      x += (parallaxX - x) * 0.2
      y += (parallaxY - y) * 0.2
      move.style.transform = "translateX(" +  Math.round(-x) + "px) translateY(" +  Math.round(-y) + "px)";
    });
  }

  // onresize = (event) => {
  //   cursor.x = event.clientX / sizes.width - 0.5
  //   cursor.y = event.clientY / sizes.height - 0.5
  // };

  return (
    <AnimatedPage>
      <div className="page home">
        <Helmet>
          <title>Fakeyys - Homepage</title>
          <meta name="description" content="Fakeyys, home to high quality fashion handbags" />
        </Helmet>
        <div onClick={() => {navigate("/catalogue")}} className="cta">
          <h3>VIEW CATALOGUE</h3>
        </div>
        <div id="cta-shadow" className="cta-shadow" data-value="5">
          <h3>VIEW CATALOGUE</h3>
        </div>
        <div id="cta-shadow" className="cta-shadow blue" data-value="10">
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
    </AnimatedPage>
  )
}

export default index