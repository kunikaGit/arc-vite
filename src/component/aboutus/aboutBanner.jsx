import React from "react"
const AboutBanner = () => {

    return (
        <>
            <section className="relative pt-4">
                <div className="absolute inset-0  overflow-hidden  -z-10" style={{ height: '300px' }}>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full object-cover  -z-10 h-full "
                        src="video/blue-bg.mp4"
                    />
                </div>
                <div className="container">
                    <div className="text-center flex items-center justify-center m-auto xl:max-w-4xl lg:max-w-full lg:text-6xl md:text-4xl sm:text-3xl"
                        style={{ height: '300px' }} >
                        <h2 className='font-display  font-medium dark:text-jacarta-700 text-white'>About Us</h2>
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1  py-10 gap-10 items-center   '>
                        <div className='' data-aos="fade-right" data-aos-duration={800} >
                            <h2 className='mb-5 text-5xl font-display text-jacarta-700 dark:text-white'>Built by Traders,<br /> Backed by Professionals</h2>
                            <p className='text-medium text-gray-600 '>
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
            </section>
        </>
    )
}
export default AboutBanner;