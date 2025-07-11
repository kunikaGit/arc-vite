import { useEffect, useRef, useState } from "react";
import faqData from "./questions.jsx";
import Header2 from "../../component/home2/header2";
import Footer1 from "../../component/footer";
import imageMap from "../../utlis/helper.js";

const Faq = () => {
    const faqCategories = Object.keys(faqData);
    const midPoint = Math.ceil(faqCategories.length / 2);
    const firstColumn = faqCategories.slice(0, midPoint);
    const secondColumn = faqCategories.slice(midPoint);

    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleAccordion = (id) => {
        setOpenQuestion(openQuestion === id ? null : id);
    };
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.4; // 0.5x speed (half speed)
        }
    }, []);
    return (
        <>
            <div className="dark-for-header relative">
                <Header2 />
                <section className="relative pt-4">
                    <div className="absolute inset-0  overflow-hidden  -z-10 common-banner" style={{ height: '320px' }} >
                        <img  src={imageMap['glob-bg.jpg']} className="w-full object-cover  -z-10 h-full "/>
                    </div>
                </section>
                <div className="text-center flex flex-col items-center justify-center m-auto xl:max-w-4xl lg:max-w-full lg:text-6xl md:text-4xl sm:text-3xl"
                    style={{ height: '300px' }} >
                    <h2 className='font-display  font-bold dark:text-jacarta-700 text-white main-banner-heading'>FAQ</h2>
                    <form
                        className="relative w-3/4 mx-auto">
                        <input
                            type="search"
                            className="w-full rounded-2xl border border-jacarta-100 py-3 px-4 pl-10 text-white placeholder-jacarta-500  bg-white/[.15] placeholder-white"
                            placeholder="Search"
                        />
                        <span className="absolute left-0 md:top-4 top-4 flex h-full w-12 items-center justify-center rounded-2xl">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                className="h-4 w-4 dark:fill-jacarta-500 fill-white"
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
                            </svg>
                        </span>
                    </form>
                </div>

                <section className="relative py-10">
                    <div className="container mx-auto px-4">

                        <div className="flex flex-col lg:flex-row lg:space-x-10">
                            {[firstColumn, secondColumn].map((column, colIndex) => (
                                <div key={colIndex} className="lg:w-1/2">
                                    {column.map((category, index) => (
                                        <div key={index} className="mb-10">
                                            <h2 className="text-lg font-semibold mb-5 flex items-center gap-3 text-white capitalize">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={24} width={24}>
                                                    <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 11H8V13H12V16L16 12L12 8V11Z"></path>
                                                </svg>
                                                {category.replace(/([A-Z])/g, " $1")}
                                            </h2>
                                            {faqData[category].map((elm) => (
                                                <div key={elm.id} className="mb-4 overflow-hidden border rounded-lg border-jacarta-600">
                                                    <button
                                                        className="flex justify-between w-full px-4 py-3 text-left font-medium bg-jacarta-700 text-white"
                                                        onClick={() => toggleAccordion(elm.id)}
                                                    >
                                                        <span>{elm.question}</span>
                                                        <span className="text-xl">{openQuestion === elm.id ? "−" : "+"}</span>
                                                    </button>
                                                    {openQuestion === elm.id && (
                                                        <div className="border-t border-gray-200 p-4 border-jacarta-600 bg-jacarta-700">
                                                            <p className="text-jacarta-500 text-white">{elm.answer}</p>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            <Footer1 />
        </>
    );
};

export default Faq;
