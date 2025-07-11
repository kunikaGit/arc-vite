import React from 'react'
import imageMap from '../../utlis/helper'

const AboutVision = () => {
    return (
        <>
        <section className="bg-jacarta-900">
            <div className='container'>
                <div className='grid md:grid-cols-2 grid-cols-1  py-3 gap-10 items-center'>
                    <div className='' data-aos="fade-right" data-aos-duration={800} >
                        <h2 className='mb-5 text-5xl font-display text-white'>Our Vision</h2>
                        <p className='text-medium  text-white'>
                            At ARC, we strive to set a new standard in proprietary trading. Our vision is to be the leading
                            firm where transparency, authenticity, and professionalism meet. By offering real market liquidity,
                            fostering continuous education, and maintaining a trader-first mentality, we aspire to be the most
                            trusted partner for traders globally. Our goal is to build lasting relationships, helping traders
                            reach new heights of success with a foundation of transparency and trust.
                        </p>
                    </div>
                    <div className='' data-aos="fade-left" data-aos-duration={800}>
                        {/* <img src='img/vision.jpg' alt='vision' className='h-full w-full rounded-lg'/> */}
                        <img src={imageMap['vision.png']} alt='vision' className='h-full w-full rounded-lg'/>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}
export default AboutVision