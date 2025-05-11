import React from "react"
import imageMap from "../../utlis/helper";
const AboutMission = () => {
    return (
        <>
            {/* <section className="background-overlay-custom mission-wrapped ">
                <div className="container">
                <div className="content">
                    <h2 className="md:text-6xl text-3xl font-semibold mb-10" data-aos="fade-down" data-aos-duration={800} >Our Mission</h2>
                    <p className="text-lg font-light " data-aos="fade-up" data-aos-duration={800} >
                    Our mission is simple: to offer traders the opportunity to succeed with real liquidity and
                        professional support. At ARC, we are dedicated to providing transparent, market-driven
                        solutions that empower traders at every level. Built by traders who understand the market's
                        complexities and backed by experts who bring industry-leading knowledge, we aim to deliver an
                        unparalleled trading experience with integrity and excellence.
                    </p>
                </div>
                </div>
            </section> */}
            <section className="bg-white dark:bg-jacarta-900">
                <div className='container'>
                    <div className='grid md:grid-cols-2 grid-cols-1  py-3 gap-10 items-center'>
                        <div data-aos="fade-left" data-aos-duration={800} style={{ maxWidth: '500px' }}>
                            <img src={imageMap['mission.svg']} alt='vision' className='h-full w-full rounded-lg' />
                        </div>
                        <div className='' data-aos="fade-right" data-aos-duration={800} >
                            <h2 className='mb-5 text-5xl font-display text-jacarta-700 dark:text-white'>Our Mission</h2>
                            <p className='text-medium  text-jacarta-500 dark:text-white'>
                                Our mission is simple: to offer traders the opportunity to succeed with real liquidity and
                                professional support. At ARC, we are dedicated to providing transparent, market-driven
                                solutions that empower traders at every level. Built by traders who understand the market's
                                complexities and backed by experts who bring industry-leading knowledge, we aim to deliver an
                                unparalleled trading experience with integrity and excellence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AboutMission;