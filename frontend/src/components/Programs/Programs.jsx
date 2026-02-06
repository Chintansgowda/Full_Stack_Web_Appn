import React from "react";
import "./Programs.css";
import program_1 from "../../assets/scuba-diving.png";
import program_2 from "../../assets/quad-biking.png";
import program_3 from "../../assets/camel-trekking.png";

const Programs = () => {
  return (
    <div id="things-we-do" className="programs-section">
      <p className="programs-intro">
        From thrilling quad biking and peaceful camel rides across golden desert
        dunes to world-class scuba diving, snorkeling, and an exciting range of
        water sports in the crystal-clear waters of the Red Sea—there’s
        something for every explorer. Uncover breathtaking coral formations,
        swim among colorful marine life, and embrace the excitement of both
        desert and ocean adventures. Experience Sharm El Sheikh like never
        before with unforgettable activities designed to make every moment
        extraordinary.
      </p>

      <div className="programs">
        <div className="program">
          <img src={program_1} alt="" />
        </div>
        <div className="program">
          <img src={program_2} alt="" />
        </div>
        <div className="program">
          <img src={program_3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Programs;
