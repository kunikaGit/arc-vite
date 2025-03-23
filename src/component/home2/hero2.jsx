import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";  // Use react-router-dom for routing

export default function Hero2() {
    const videoRef = useRef(null);


    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.8;
        }
    }, []);

    return (
        <section className="hero-main relative py-20 md:pt-32">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    src="video/glob-campress.mov"
                />
            </div>
            <div className="container">
                <div className="pt-10 text-center m-auto max-w-4xl hero-text">
                    <h1 data-aos="fade-up" data-aos-duration={800}
                        className="mb-5 font-display  dark:text-jacarta-700 text-white md:text-xl">
                        Built for Traders, <br />Backed by
                        <span className="animate-gradient"> Professionals!</span>
                    </h1>
                </div>
                <div className="flex items-center justify-center md:max-h-full gap-x-4 home-actions">
                    <a
                        href="#pricing"
                        className="btn-epic w-52 block text-lg rounded-full bg-accent py-3 px-5 text-center font-semibold text-white shadow-accent-volume transition-all "
                    >
                        <div>
                            <span className=" font-semibold">Start Challenge</span>
                            <span className=" font-semibold">Start Challenge</span>
                        </div>
                    </a>
                    <Link
                        to="/create"
                        className="btn-epic mx-3 text-lg relative block rtl:!mr-6 w-52 rounded-full bg-white py-3 px-5 text-center font-semibold text-accent shadow-white-volume"
                    >
                        <div>
                            <span className=" font-semibold text-[#fff]">  Free Trial</span>
                            <span className=" font-semibold ">  Free Trial</span>

                        </div>
                    </Link>
                    {/* <Link to="" className="btn-epic">
                <div>
                    <span> Get Ticket</span>
                    <span> Get Ticket</span>

                </div>
                </Link> */}
                </div>
                <div className="grid gap-5 md:grid-cols-4 text-center m-auto max-w-4xl  four-cards">
                    <div data-aos="zoom-in" className=" main-cards hover-text-white p-3 pt-0 relative pink hover:bg-[#ff59e2] hover:text-white rounded-2.5xl border hover:shadow-[0_16px_24px_-8px_rgba(131,88,255,.3)] border-jacarta-100 bg-white shadow-[0_5px_0_0_#8358ff] transition-shadow  dark:border-jacarta-700 dark:bg-jacarta-700">
                        <div className="mb-2 -mt-8 bg-gradient home-cards inline-flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full border border-jacarta-100 bg-white dark:border-jacarta-600 dark:bg-jacarta-700">
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

                        <h3 className=" font-display text-jacarta-700   dark:text-white ">
                            Up to 90%
                        </h3>
                        <p className="dark:text-jacarta-300">of profit split</p>
                    </div>
                    <div data-aos="zoom-in" className="main-cards hover-text-white blue pb-5 relative hover:bg-[#52ddf6] hover:text-white rounded-2.5xl border border-jacarta-100 bg-white  shadow-[0_5px_0_0_#8358ff] transition-shadow hover:shadow-[0_16px_24px_-8px_rgba(131,88,255,.3)] dark:border-jacarta-700 dark:bg-jacarta-700">
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

                        <h3 className=" font-display  text-jacarta-700 dark:text-white">
                            Up to 100k
                        </h3>
                        <p className="dark:text-jacarta-300">trading accounts</p>
                    </div>
                    <div data-aos="zoom-in" className="main-cards hover-text-white orange hover:bg-[#ff7356] hover:text-white pb-5 relative rounded-2.5xl border border-jacarta-100 bg-white  shadow-[0_5px_0_0_#8358ff] transition-shadow hover:shadow-[0_16px_24px_-8px_rgba(131,88,255,.3)] dark:border-jacarta-700 dark:bg-jacarta-700">
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

                        <h3 className=" font-display  text-jacarta-700 dark:text-white">
                            No time
                        </h3>
                        <p className="dark:text-jacarta-300">limit in challenge phase</p>
                    </div>
                    <div data-aos="zoom-in" className="main-cards hover-text-white accent hover:bg-accent hover:text-white pb-5 relative rounded-2.5xl border border-jacarta-100 bg-white  shadow-[0_5px_0_0_#8358ff] transition-shadow hover:shadow-[0_16px_24px_-8px_rgba(131,88,255,.3)] dark:border-jacarta-700 dark:bg-jacarta-700">
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

                        <h3 className=" font-display  text-jacarta-700 dark:text-white">
                            Gateway to
                        </h3>
                        <p className="dark:text-jacarta-300">Real Market Liquidity</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
