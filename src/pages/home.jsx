import Header3 from "../component/header";
import Hero1 from "../component/home/hero1";
import Categories from "../component/home/Categories";
import Collections from "../component/home/Collections";
import Hotbids from "../component/home/Hotbids";
import Process from "../component/home/Process";
export default function Home() {
    return (
        <>
            <Header3 />
            <Hero1 />
            <Hotbids />
        <Collections />
        <Categories />
        <Process />
            <div class="button-box">
                <div class="liquid"></div>
            </div>

        </>
    );
}
