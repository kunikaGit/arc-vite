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
        <section className="hero-main relative py-20 pt-32">
            <div className="absolute inset-0  overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    src="video/glob-campress.mov"
                />
            </div>
            <div className="flex flex-col items-center justify-center h-full">
                <div className="container">
                    <div className=" text-center m-auto xl:max-w-4xl lg:max-w-full hero-text">
                        <h1 data-aos="fade-up" data-aos-duration={800}
                            className="mb-5   dark:text-jacarta-700 text-white ">
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
                            className="btn-epic md:mx-3 mx-1 text-lg relative block rtl:!mr-6 w-52 rounded-full bg-white py-3 px-5 text-center font-semibold text-accent shadow-white-volume"
                        >
                            <div>
                                <span className=" font-semibold text-[#fff]">  Learn More</span>
                                <span className=" font-semibold ">  Learn More</span>

                            </div>
                        </Link>
                    </div>
                    <div className="grid gap-5 md:grid-cols-4 grid-cols-2  text-center m-auto  xl:max-w-5xl lg:max-w-full four-cards">
                        <div data-aos="zoom-in" className="main-cards  p-3 pt-0 relative pink hover:text-white rounded-2.5xl  border-jacarta-100 bg-white  transition-shadow  dark:border-jacarta-700 dark:bg-jacarta-700">
                            <div className="mb-2  bg-gradient home-cards inline-flex xl:h-[5.5rem] xl:w-[5.5rem] lg:h-[4.5rem] lg:w-[4.5rem] items-center justify-center rounded-full border border-jacarta-100 bg-white dark:border-jacarta-600 dark:bg-jacarta-700">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    className="home-icon fill-[#450077]">
                                    <path fill="none" d="M0 0h24v24H0z"></path><path d="M5 12.5c0 .313.461.858 1.53 1.393C7.914 14.585 9.877 15 12 15c2.123 0 4.086-.415 5.47-1.107 1.069-.535 1.53-1.08 1.53-1.393v-2.171C17.35 11.349 14.827 12 12 12s-5.35-.652-7-1.671V12.5zm14 2.829C17.35 16.349 14.827 17 12 17s-5.35-.652-7-1.671V17.5c0 .313.461.858 1.53 1.393C7.914 19.585 9.877 20 12 20c2.123 0 4.086-.415 5.47-1.107 1.069-.535 1.53-1.08 1.53-1.393v-2.171zM3 17.5v-10C3 5.015 7.03 3 12 3s9 2.015 9 4.5v10c0 2.485-4.03 4.5-9 4.5s-9-2.015-9-4.5zm9-7.5c2.123 0 4.086-.415 5.47-1.107C18.539 8.358 19 7.813 19 7.5c0-.313-.461-.858-1.53-1.393C16.086 5.415 14.123 5 12 5c-2.123 0-4.086.415-5.47 1.107C5.461 6.642 5 7.187 5 7.5c0 .313.461.858 1.53 1.393C7.914 9.585 9.877 10 12 10z"></path>
                                </svg>
                            </div>

                            <h3 className=" font-display text-jacarta-700 dark:text-white ">
                                Up to 90%
                            </h3>
                            <p className="dark:text-jacarta-300 text-jacarta-700">of profit split</p>
                        </div>
                        <div data-aos="zoom-in" className="main-cards  blue pb-5 relative  hover:text-white rounded-2.5xl  border-jacarta-100 bg-white  shadow-[0_5px_0_0_#8358ff] transition-shadow hover:shadow-[0_16px_24px_-8px_rgba(131,88,255,.3)] dark:border-jacarta-700 dark:bg-jacarta-700">
                            <div className="mb-4   bg-gradient home-cards inline-flex xl:h-[5.5rem] xl:w-[5.5rem] lg:h-[4.5rem] lg:w-[4.5rem] items-center justify-center rounded-full border border-jacarta-100 bg-white dark:border-jacarta-600 dark:bg-jacarta-700">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="home-icon fill-[#016764]">
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M17 16h2V4H9v2h8v10zm0 2v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3zM7 16v2h2v1h2v-1h.5a2.5 2.5 0 1 0 0-5h-3a.5.5 0 1 1 0-1H13v-2h-2V9H9v1h-.5a2.5 2.5 0 1 0 0 5h3a.5.5 0 1 1 0 1H7z" />
                                </svg>
                            </div>

                            <h3 className=" font-display  text-jacarta-700 dark:text-white">
                                Up to 300k
                            </h3>
                            <p className="dark:text-jacarta-300 text-jacarta-700">trading accounts</p>
                        </div>
                        <div data-aos="zoom-in" className="main-cards  orange  hover:text-white pb-5 relative rounded-2.5xl  border-jacarta-100 bg-white  shadow-[0_5px_0_0_#8358ff] transition-shadow hover:shadow-[0_16px_24px_-8px_rgba(131,88,255,.3)] dark:border-jacarta-700 dark:bg-jacarta-700">
                            <div className="mb-4  bg-gradient home-cards inline-flex xl:h-[5.5rem] xl:w-[5.5rem] lg:h-[4.5rem] lg:w-[4.5rem] items-center justify-center rounded-full border border-jacarta-100 bg-white dark:border-jacarta-600 dark:bg-jacarta-700">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="home-icon fill-[#450077]">
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M6.38231 5.9681C7.92199 4.73647 9.87499 4 12 4C14.125 4 16.078 4.73647 17.6177 5.9681L19.0711 4.51472L20.4853 5.92893L19.0319 7.38231C20.2635 8.92199 21 10.875 21 13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13C3 10.875 3.73647 8.92199 4.9681 7.38231L3.51472 5.92893L4.92893 4.51472L6.38231 5.9681ZM13 12V7.4952L8 14H11V18.5L16 12H13ZM8 1H16V3H8V1Z" />
                                </svg>
                            </div>

                            <h3 className=" font-display  text-jacarta-700 dark:text-white">
                                No time
                            </h3>
                            <p className="dark:text-jacarta-300 text-jacarta-700">limit in challenge phase</p>
                        </div>
                        <div data-aos="zoom-in" className="main-cards  accent  hover:text-white pb-5 relative rounded-2.5xl  border-jacarta-100 bg-white  shadow-[0_5px_0_0_#8358ff] transition-shadow hover:shadow-[0_16px_24px_-8px_rgba(131,88,255,.3)] dark:border-jacarta-700 dark:bg-jacarta-700">
                            <div className="mb-4  bg-gradient home-cards inline-flex xl:h-[5.5rem] xl:w-[5.5rem] lg:h-[4.5rem] lg:w-[4.5rem] items-center justify-center rounded-full border border-jacarta-100 bg-white dark:border-jacarta-600 dark:bg-jacarta-700">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="home-icon fill-[#130F41]">
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M3 12H7V21H3V12ZM17 8H21V21H17V8ZM10 2H14V21H10V2Z" />
                                </svg>
                            </div>

                            <h3 className=" font-display  text-jacarta-700 dark:text-white">
                                Gateway to
                            </h3>
                            <p className="dark:text-jacarta-300 text-jacarta-700">Real Market Liquidity</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
