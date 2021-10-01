import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";


import image1 from "../../images/img1.jpg";
import image2 from "../../images/img2.jpg";
import image3 from "../../images/img3.jpg";
import image4 from "../../images/img4.jpg";

import "./HomePage.css";

function HomePage() {
  return (
    <div>
        <img src={image1} className="slider"></img>
    </div>
  );
}

export default HomePage;
