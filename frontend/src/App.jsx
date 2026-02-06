import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Title from "./components/Title/Title";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";

import About from "./components/About/About";
import Photos from "./components/Photos/Photos";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />

      <Hero />
      <div className="container">
        <Title
          title="Things we do"
          subTitle="Adventure  awaits  in  Sharm El Sheikh!"
        />
        <Programs />
        <Title
          title="About us"
          subTitle="Desert Adventure Meets Red Sea Beauty Here At Sharm El-Sheikh Tourism Group"
        />
        <About setPlayState={setPlayState} />

        <Title title="Photo gallery" subTitle="Explore Sharm El Sheikh" />

        <Photos />
        <Title title="Testimonials" subTitle="What Visitors Say" />
        <Testimonials />
        <Title title="Contact us" subTitle="Get in touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
