import { Link } from "react-router-dom";  // Use react-router-dom for routing
import imageMap from "../../../utlis/helper";

export default function Calltoaction() {
  return (
    <div className="relative z-10 py-5">
      <div className="container">
        <div className="relative overflow-hidden rounded-2.5xl md:px-16 px-6 pt-16 pb-0 lg:px-24">

          <div className="items-center justify-between md:flex">
            <div className="mb-6 md:w-1/2">
              <h2 data-aos="fade-down" data-aos-duration={600}
                className="mb-4 font-display md:text-2xl text-xl text-white sm:text-3xl uppercase">
                discover your potential and become a trader
              </h2>
              <p className="mb-8 text-lg  text-white ">
                Join the Leading Prop Firm<br />
              </p>
              <div className="call-links">
                <a
                  data-aos="fade-up" data-aos-duration={600}
                  href="#pricing"
                  className=" md:w-44 w-30 block md:text-md text-sm rounded-full bg-accent py-3
             md:px-5 px-2 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                >
                  Start Challenge
                </a>
                <Link
                  data-aos="fade-up" data-aos-duration={600}
                  href="/create"
                  className="md:mx-3 mx-1 block rtl:!mr-6  md:w-44 w-30  md:text-md  text-sm rounded-full bg-white py-3 md:px-5 px-2 text-center font-semibold text-accent shadow-white-volume transition-all hover:bg-accent-dark hover:text-white hover:shadow-accent-volume"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <img
              data-aos="fade-down" data-aos-duration={600}
              width={440}
              height={300}
              src='img/upgrate.png'
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
