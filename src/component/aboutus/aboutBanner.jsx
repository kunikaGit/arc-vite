import React from "react"
import CommonBanner from "../common/banner";
const AboutBanner = () => {


    return (
        <>
        <CommonBanner title="About Us"/>
                <div className="container">
                    <div className='grid md:grid-cols-2 grid-cols-1  py-10 gap-10 items-center'>
                        <div className='' data-aos="fade-right" data-aos-duration={800} >
                            <h2 className='mb-5 text-5xl font-display text-jacarta-700'>Built by Traders,<br /> Backed by Professionals</h2>
                            <p className='text-medium text-gray-600'>
                                At ARC, we understand the unique challenges of trading because we’ve been in your shoes.
                                Built by traders and backed by industry professionals, we are a proprietary trading firm that
                                provides real market liquidity, cutting-edge tools, and transparent support to traders worldwide.
                                Unlike others in the industry, we stand by our commitment to integrity, offering a platform where
                                traders can thrive based on authentic market conditions, not inflated promises.
                            </p>
                        </div>
                        <div className='three-img flex gap-x-5' data-aos="fade-left" data-aos-duration={800}>
                            <div className='image w-1/2'>
                                <img src='img/ceo1.jpg' alt='img' />
                                <img src='img/ceo3.jpg' alt='img' />
                            </div>
                            <div className='image w-1/2'>
                                <img src='img/ceo2.jpg' alt='img' />
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default AboutBanner;