import { Link } from "react-router-dom";  // Use react-router-dom for routing
import imageMap from "../../../utlis/helper";

export default function Calltoaction() {
  return (
    <div className="relative z-10 -mt-10 bg-white dark:bg-jacarta-900">
      <div className="container">
        <div className="relative overflow-hidden rounded-2.5xl px-16 pt-16 pb-8 shadow-md lg:px-24">
          <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden" data-aos="fade-down" data-aos-duration={600}>
            <img
              width={1920}
              height={789}
              src="/img/gradient_light.jpg"
              
              priority
              alt="gradient"
              className="h-full w-full"
            />
          </picture>
          <picture className="pointer-events-none absolute inset-0 -z-10 hidden dark:block" data-aos="fade-down" data-aos-duration={600}>
            <img
              width={1920}
              height={900}
              src="/img/gradient_dark.jpg"
              alt="gradient dark"
              className="h-full w-full"
            />
          </picture>
          <div className="items-center justify-between md:flex">
            <div className="mb-6 md:w-1/2">
              <h2 data-aos="fade-down" data-aos-duration={600} className="mb-4 font-display text-2xl text-jacarta-700 dark:text-white sm:text-3xl uppercase">
                discover your potential and become a trader
              </h2>
              <p className="mb-8 text-lg dark:text-jacarta-300">
                Join the Leading Prop Firm<br />
              </p>
              <div className="flex items-center">
                <Link
                  data-aos="fade-up" data-aos-duration={600}
                  href="/create"
                  className=" w-44 block text-md rounded-full bg-accent py-3
             px-5 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                >
                  Start Challenge
                </Link>
                <Link
                  data-aos="fade-up" data-aos-duration={600}
                  href="/create"
                  className="mx-3 block rtl:!mr-6 w-44 rounded-full bg-white py-3 px-5 text-center font-semibold text-accent shadow-white-volume transition-all hover:bg-accent-dark hover:text-white hover:shadow-accent-volume"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <img
              data-aos="fade-down" data-aos-duration={600}
              width={340}
              height={300}
              src='img/start.svg'
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
