import React from "react";
import "./Photos.css";
import gallery_1 from "../../assets/gallery-pic-1.png";
import gallery_2 from "../../assets/gallery-pic-2.png";
import gallery_3 from "../../assets/gallery-pic-3.png";
import gallery_4 from "../../assets/gallery-pic-4.png";
import white_arrow from "../../assets/white-arrow.png";

const Photos = () => {
  return (
    <div id="photo-gallery" className="photo-gallery">
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
    </div>
  );
};

export default Photos;
