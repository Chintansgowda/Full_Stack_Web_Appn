import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }

    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }

    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div id="testimonials" className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <div>
                  <h3> Emma Thompson </h3>
                  <em>📍 Manchester, United Kingdom</em>
                </div>
              </div>
              <p>
                "My trip with Sharm El-Sheikh Tourism Group was unforgettable!
                The quad biking through the desert at sunset left me
                breathless—in the best way. Our guide was professional and made
                us feel safe the entire time. And the fresh koshari we had
                afterward? Absolutely delicious! I’ll be back next year."
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <div>
                  <h3>Luca Rossi</h3>
                  <em>📍 Rome, Italy</em>
                </div>
              </div>
              <p>
                "As a diving enthusiast, I’ve explored reefs all over the
                world—but Ras Mohammed in Sharm El Sheikh is truly magical. The
                scuba diving tour arranged by your team was flawless: top-notch
                gear, knowledgeable dive master, and crystal-clear water teeming
                with life. Plus, the camel ride along the beach at sunrise was
                pure magic!"
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <div>
                  <h3>Aisha Nkosi</h3>
                  <em>📍 Cape Town, South Africa</em>
                </div>
              </div>
              <p>
                "From the moment we booked until the last goodbye, everything
                was seamless. We did the full desert adventure—quad biking,
                sandboarding, and a sunset camel ride—and finished with an
                authentic Egyptian dinner under the stars. The molokhia and
                grilled lamb were out of this world. Thank you for showing us
                the soul of Sinai!"
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <div>
                  <h3>James O’Connor</h3>
                  <em>📍 Sydney, Australia</em>
                </div>
              </div>
              <p>
                "I came for the diving but stayed for the food! Your Red Sea
                snorkeling trip was incredible—turtles, reef sharks, and vibrant
                coral everywhere. And I never expected Egyptian cuisine to be so
                flavorful! The stuffed grape leaves and fresh bread at the
                Bedouin-style dinner had me coming back for seconds. Highly
                recommend your tours!"
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
