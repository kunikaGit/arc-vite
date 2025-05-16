import PricingTable from "../component/home/PricingTable";
import CoverFlowSlider from "../component/home/CoverFlowSlider";
import Testimonials from "../component/home/Testimonials";
import WhyChoose from "../component/home/WhyChoose";
import Calltoaction from "../component/home/Calltoaction"
import Footer1 from "../component/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Hero2 from "../component/home2/hero2";
import Header2 from "../component/home2/header2";
import { useLocation } from "react-router-dom";
import WinBanner from "../component/common/winBanner";

export default function Home2() {
    useEffect(() => {
        AOS.init();
    }, []);
    const location = useLocation();

    useEffect(() => {
      if (location.hash) {
        const sectionId = location.hash.replace('#', '');
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location]);
    return (
        <>
            <div className="main-landing-page dark-for-header">
                <Header2 />
                <Hero2 />
                <div className="hotbids-section" data-speed="1.2">
                    <CoverFlowSlider />
                </div>
                <div id="pricing" className="hotbids-section" data-speed="1.5">
                    <PricingTable />
                </div>
                <div className="collections-section" data-speed="2">
                    <Testimonials />
                </div>
                <div className="categories-section" data-speed="2.5">
                    <WhyChoose />
                </div>
                <div className="categories-section" data-speed="3">
                    <Calltoaction />
                </div>
                <div className="button-box">
                    <div className="liquid"></div>
                </div>
                <Footer1 />
                <WinBanner/>
            </div>
        </>
    );
}
