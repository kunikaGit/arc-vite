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

export default function Home() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <Header />
            <Hero1 />
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
            <div class="button-box">
                <div class="liquid"></div>
            </div>
            <Footer1 />

        </>
    );
}
