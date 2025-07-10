import Header from "../component/header";
import Hero1 from "../component/home/hero1";
import PricingTable from "../component/home/PricingTable";
import CoverFlowSlider from "../component/home/CoverFlowSlider";
import Testimonials from "../component/home/Testimonials";
import WhyChoose from "../component/home/WhyChoose";
import Calltoaction from "../component/home/Calltoaction"
import Footer1 from "../component/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Header2 from "../component/home2/header2";
import WinBanner from "../component/common/winBanner";

export default function Home() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <div className="main-landing-page dark-for-header">
                <Header2 />
                <Hero1 />
                <div id="pricing" className="hotbids-section" data-speed="1.5">
                    <PricingTable />
                </div>
                {/* <div className="collections-section" data-speed="2">
                    <Testimonials />
                </div> */}
                <div className="why-choose-us">
                <div className="categories-section " data-speed="2.5">
                    <WhyChoose />
                </div>
                <div className="categories-section" data-speed="3">
                    <Calltoaction />
                </div>
                </div>
                <div className="button-box">
                    <div className="liquid"></div>
                </div>
                <Footer1 />
                <WinBanner />
            </div>

        </>
    );
}
