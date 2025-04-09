import React from "react"
import { Link } from "react-router-dom"
const AboutRoadmap = () => {
    return (
        <>
            <section className="roadmap">
                <h2 className="roadmap-heading animate-gradient"  data-aos="fade-down" data-aos-duration={800} >ROADMAP</h2>
                <Link to='/coming-soon' className="main-btn"  data-aos="fade-up" data-aos-duration={800} >Coming Soon
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={30} width={30}>
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                </Link>
            </section>
            {/* <div className="container">
                    <div className='grid md:grid-cols-2 grid-cols-1  py-10 gap-10 items-center'>
                        <div>
                            <h2 className="roadmap-heading animate-gradient" data-aos="fade-down" data-aos-duration={800} >ROADMAP</h2>
                            <Link to='/coming-soon' className="main-btn" data-aos="fade-up" data-aos-duration={800} >Coming Soon
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={30} width={30}>
                                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                            </Link>
                        </div>
                        <div className="max-w-[400px]">
                            <img src='img/start.svg' alt="roadmap" />
                        </div>
                    </div>
                </div> */}
        </>
    )
}
export default AboutRoadmap