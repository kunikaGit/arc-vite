import { Link } from "react-router-dom";
import './comingsoon.css'
import imageMap from "../../utlis/helper";
const ComingSoon = () => {
    return (
        <>
            <div className="hero-sec" id="hero">
                <div className="absolute inset-0 -z-10 overflow-hidden py-5 bg-black ovarlay-video">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full "
                        src="video/hero-video.mp4"
                    />
                </div>
                <div className="logo"><img src={imageMap['dark-logo.svg']} alt="img" /></div>
                <div className="container">
                    <div className="pt-20 text-center m-auto max-w-4xl coming-container">
                        <h1
                            className="mb-6 font-display text-5xl dark:text-jacarta-700 text-white md:text-5xl lg:text-6xl xl:text-7xl xxl:text-7xl">
                            Coming Soon...
                            {/* <span className="animate-gradient"> Coming Soon</span> */}
                        </h1>
                        <h3 className="text-xl text-white mb-3">Join our waitlist</h3>
                        <div className="text-box flex gap-4 max-w-1/2 m-auto pb-20">
                            <input
                                type="text"
                                className=" w-full rounded-lg py-2.5 hover:ring-2 hover:ring-accent/10 focus:ring-accent border-jacarta-200  text-white placeholder:text-gray-200"
                                placeholder="Your email address"
                            />
                            <button type="submit" className=" rounded-md text-white p-2 px-4">Submit</button>
                        </div>
                        <div className="menu">
                            {/* <ul>
                                <li className="text-sm"><Link to="#">About Us</Link></li>
                                <li className="text-sm"><Link to="#">Our Work</Link></li>
                                <li className="text-sm"><Link to="#">LinkedIn</Link></li>
                                <li className="text-sm"><Link to="#">Contact Us</Link></li>
                            </ul> */}
                            <hr className="bg-white text-white" />
                            <div className="copy flex justify-between mt-5">
                                <span className="text-gray-300 text-xs">© 2025 ARC Trading. All rights reserved.Developed by ZENX TECHNOLOGY</span>
                                <ul>
                                <li className="text-gray-300 text-xs"><Link to="/privacy-policy">Privacy Policy</Link></li>
                                <li className="text-gray-300 text-xs"><Link to="/terms-condition">Terms of Service</Link></li>
                                {/* <li className="text-gray-300 text-xs"><Link to="#">Cookie Preferences</Link></li> */}
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ComingSoon;