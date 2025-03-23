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

export default function Home2() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <Header2 />
            <Hero2 />
            <div className="hotbids-section" data-speed="1.2">
                <CoverFlowSlider />
            </div>
            <div className="hotbids-section" data-speed="1.5">
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

        </>
    );
}
