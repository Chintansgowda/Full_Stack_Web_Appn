import React from "react";
import "./About.css";
import about_img from "../../assets/about-pic-4.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div id="about"className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        
     

        <p>
        Sharm El Sheikh, often called the “Jewel of the Red Sea,” 
        is one of Egypt’s most celebrated resort destinations—where desert landscapes meet crystal-clear waters and vibrant marine life. 
        Known for its year-round sunshine, luxurious resorts, and world-class diving spots, 
        Sharm offers a perfect blend of relaxation and adventure.
        </p>

        <p>
         From the iconic coral reefs of Ras Mohammed National Park to bustling bazaars, elegant promenade walks, 
         and a lively nightlife scene, the city caters to travelers of all styles. 
         Whether you're seeking underwater exploration, desert excursions, family-friendly activities,
          or simply a peaceful escape by the sea, Sharm El Sheikh delivers an unforgettable experience shaped by natural beauty, 
          warm hospitality, and endless opportunities for discovery.
        </p>
        
      </div>
    </div>
  );
};

export default About;
