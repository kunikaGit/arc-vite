import React, { useEffect } from 'react'
import Header2 from '../../component/home2/header2'
import { AboutBanner, AboutMission, AboutRoadmap, AboutVision, CommonBanner } from '../../component'
import Aos from 'aos';
import Footer1 from '../../component/footer';

const AboutUs = () => {
    useEffect   (() => {
        Aos.init({ 
            duration: 800, 
            once: true 
        });
    }, []);
    return (
        <>
            <div className='dark-for-header about-us'>
                <Header2 />
                <CommonBanner title="About Us"/>
                <AboutBanner/>
                <AboutMission/>
                <AboutVision/>
                <AboutRoadmap/>
                <Footer1/>
            </div>
        </>
    )
}
export default AboutUs