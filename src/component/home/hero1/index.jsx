import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";  // Use react-router-dom for routing

export default function Hero1() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <section className="hero relative py-20 md:pt-32">

      <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden">
        <img
          width={1920}
          height={900}
          src="img/gradient.jpg"
          alt="gradient"
          className="w-full"
        />
      </picture>
      <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block">
        <img
          width={1920}
          height={900}
          src="img/gradient_dark.jpg"
          alt="gradient dark"
          className="w-full"
        />
      </picture>

      <div className="container">
        <div className="pt-16 text-center m-auto max-w-4xl">
          <h1 className="mb-10 font-display text-4xl text-jacarta-700 dark:text-white md:text-5xl lg:text-6xl xl:text-7xl xxl:text-7xl">
            Built for Traders, Backed by 
            <span className="animate-gradient"> Professionals!</span>
          </h1>
        </div>
        <div className="flex items-center justify-center mb-20">
          <Link
          cla
            to="/create"
            className="liquid-button w-44 block text-md rounded-full bg-accent py-3 px-5 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
          >
            Start Challenge
          </Link>
          <Link
            to="/create"
            className="mx-3 block rtl:!mr-6 w-44 rounded-full bg-white py-3 px-5 text-center font-semibold text-accent shadow-white-volume transition-all hover:bg-accent-dark hover:text-white hover:shadow-accent-volume"
          >
            Free Trial
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-4 text-center m-auto max-w-4xl four-cards">
          <div className=" main-cards hover-text-white p-5 pt-0 relative pink hover:bg-[#ff59e2] hover:text-white rounded-2.5xl border hover:shadow-[0_16px_24px_-8px_rgba(131,88,255,.3)] border-jacarta-100 bg-white shadow-[0_5px_0_0_#8358ff] transition-shadow  dark:border-jacarta-700 dark:bg-jacarta-700">
          <div class="liquid"></div>
              <div className="mb-4 -mt-8 bg-gradient home-cards inline-flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full border border-jacarta-100 bg-white dark:border-jacarta-600 dark:bg-jacarta-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="h-12 w-12 fill-accent">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M13 9h8L11 24v-9H4l9-15v9zm-2 2V7.22L7.532 13H13v4.394L17.263 11H11z" />
                </svg>
              </div>

              <h3 className=" font-display text-jacarta-700 text-lg  dark:text-white ">
                Up to 90%
              </h3>
              <p className="dark:text-jacarta-300">of profit split</p>
            </div>
            <div className="main-cards hover-text-white blue pb-5 relative hover:bg-[#52ddf6] hover:text-white rounded-2.5xl border border-jacarta-100 bg-white  shadow-[0_5px_0_0_#8358ff] transition-shadow hover:shadow-[0_16px_24px_-8px_rgba(131,88,255,.3)] dark:border-jacarta-700 dark:bg-jacarta-700">
              <div className="mb-4 -mt-8  bg-gradient home-cards inline-flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full border border-jacarta-100 bg-white dark:border-jacarta-600 dark:bg-jacarta-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="h-12 w-12 fill-accent">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M17 16h2V4H9v2h8v10zm0 2v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3zM7 16v2h2v1h2v-1h.5a2.5 2.5 0 1 0 0-5h-3a.5.5 0 1 1 0-1H13v-2h-2V9H9v1h-.5a2.5 2.5 0 1 0 0 5h3a.5.5 0 1 1 0 1H7z" />
                </svg>
              </div>

              <h3 className=" font-display text-lg text-jacarta-700 dark:text-white">
              Up to 100k 
              </h3>
              <p className="dark:text-jacarta-300">trading accounts</p>
            </div>
            <div className="main-cards hover-text-white orange hover:bg-[#ff7356] hover:text-white pb-5 relative rounded-2.5xl border border-jacarta-100 bg-white  shadow-[0_5px_0_0_#8358ff] transition-shadow hover:shadow-[0_16px_24px_-8px_rgba(131,88,255,.3)] dark:border-jacarta-700 dark:bg-jacarta-700">
              <div className="mb-4 -mt-8 bg-gradient home-cards inline-flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full border border-jacarta-100 bg-white dark:border-jacarta-600 dark:bg-jacarta-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="h-12 w-12 fill-accent">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M6.38231 5.9681C7.92199 4.73647 9.87499 4 12 4C14.125 4 16.078 4.73647 17.6177 5.9681L19.0711 4.51472L20.4853 5.92893L19.0319 7.38231C20.2635 8.92199 21 10.875 21 13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13C3 10.875 3.73647 8.92199 4.9681 7.38231L3.51472 5.92893L4.92893 4.51472L6.38231 5.9681ZM13 12V7.4952L8 14H11V18.5L16 12H13ZM8 1H16V3H8V1Z" />
                </svg>
              </div>

              <h3 className=" font-display text-lg text-jacarta-700 dark:text-white">
              No time 
              </h3>
              <p className="dark:text-jacarta-300">limit in challenge phase</p>
            </div>
            <div className="main-cards hover-text-white accent hover:bg-accent hover:text-white pb-5 relative rounded-2.5xl border border-jacarta-100 bg-white  shadow-[0_5px_0_0_#8358ff] transition-shadow hover:shadow-[0_16px_24px_-8px_rgba(131,88,255,.3)] dark:border-jacarta-700 dark:bg-jacarta-700">
              <div className="mb-4 -mt-8 bg-gradient home-cards inline-flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full border border-jacarta-100 bg-white dark:border-jacarta-600 dark:bg-jacarta-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="h-12 w-12 fill-accent">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M3 12H7V21H3V12ZM17 8H21V21H17V8ZM10 2H14V21H10V2Z" />
                </svg>
              </div>

              <h3 className=" font-display text-lg text-jacarta-700 dark:text-white">
              Gateway to 
              </h3>
              <p className="dark:text-jacarta-300">Real Market Liquidity</p>
            </div>
          </div>
      </div>
    </section>
  );
}
