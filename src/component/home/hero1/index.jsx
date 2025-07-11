import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";  // Use react-router-dom for routing
import { ShadeImage } from "../../common/iconImage";
import imageMap from "../../../utlis/helper";
import CoverFlowSlider from "../CoverFlowSlider";

export default function Hero1() {
  const videoRef = useRef(null);


  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <section className="hero relative py-20 md:pt-32">
      <picture className="pointer-events-none absolute top-0 left-0 roated-90 z-10"  >
        <ShadeImage />
      </picture>
      <picture className="pointer-events-none absolute top-0 right-0 z-10" >
        <ShadeImage />
      </picture>
        <div className=" text-center m-auto  content-wrapped">
          <h1 data-aos="fade-up" data-aos-duration={800} className="main-heading">
            Built for Traders, <br />Backed by
            <span className="animate-gradient"> Professionals!</span>
          </h1>
          <div className="two-grid">
            <div className="four-cards">
              <div className="card-value">
                <img src={imageMap['allocation.png']} alt="icon" />
                <h3>Up to 90%</h3>
                <span>of profit split</span>
              </div>
              <div className="card-value">
                <img src={imageMap['doller.png']} alt="icon" />
                <h3>Up to 300k</h3>
                <span>trading accounts</span>
              </div>
              <div className="card-value">
                <img src={imageMap['time-left.png']} alt="icon" />
                <h3>No time</h3>
                <span>limit in challenge phase</span>
              </div>
              <div className="card-value">
                <img src={imageMap['increase.png']} alt="icon" />
                <h3>Gateway to</h3>
                <span>Real Market Liquidity</span>
              </div>
            </div>
          </div>
          <a className="fnx-purple-btn" href="#pricing">
            <span className="btn-label">Start Challenge</span>
            <span className="btn-shine"></span>
          </a>

        </div>
        <CoverFlowSlider />
        <div className="bg-img">
          <img src={imageMap['glob-bg.jpg']} alt='glob' />
      </div>
    </section>
  );
}
