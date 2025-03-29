import { useState } from "react";
import faqData from "./questions";
import Header2 from "../../component/home2/header2";
import Footer1 from "../../component/footer";

const Faq = () => {
    const faqCategories = Object.keys(faqData);
    const midPoint = Math.ceil(faqCategories.length / 2);
    const firstColumn = faqCategories.slice(0, midPoint);
    const secondColumn = faqCategories.slice(midPoint);

    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleAccordion = (id) => {
        setOpenQuestion(openQuestion === id ? null : id);
    };

    return (
        <>
            <Header2 />
            <section className="relative py-24 bg-white dark:bg-jacarta-800">
            <div
                className="relative bg-cover bg-center bg-no-repeat py-32 mb-14 after:absolute after:inset-0 after:bg-jacarta-900/60"
                style={{
                    backgroundImage: "url(img/knowledge_base_banner.jpg)",
                }}
            >
                <div className="container relative z-10">
                    <h1 className="text-center font-display text-4xl font-medium text-white">
                            Frequently Asked Questions
                    </h1>
                </div>
            </div>
                <div className="container mx-auto px-4">
                
                    <div className="flex flex-col lg:flex-row lg:space-x-10">
                        {[firstColumn, secondColumn].map((column, colIndex) => (
                            <div key={colIndex} className="lg:w-1/2">
                                {column.map((category, index) => (
                                    <div key={index} className="mb-10">
                                        <h2 className="text-lg font-semibold mb-5 flex items-center gap-3 text-jacarta-700 dark:text-white capitalize">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={24} width={24}>
                                                <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 11H8V13H12V16L16 12L12 8V11Z"></path>
                                            </svg>
                                            {category.replace(/([A-Z])/g, " $1")}
                                        </h2>
                                        {faqData[category].map((elm) => (
                                            <div key={elm.id} className="mb-4 overflow-hidden border rounded-lg border-gray-200 dark:border-jacarta-600">
                                                <button
                                                    className="flex justify-between w-full px-4 py-3 text-left font-medium text-gray-700 dark:bg-jacarta-700 dark:text-white"
                                                    onClick={() => toggleAccordion(elm.id)}
                                                >
                                                    <span>{elm.question}</span>
                                                    <span className="text-xl">{openQuestion === elm.id ? "−" : "+"}</span>
                                                </button>
                                                {openQuestion === elm.id && (
                                                    <div className="border-t border-gray-200 bg-white p-4 dark:border-jacarta-600 dark:bg-jacarta-700">
                                                        <p className="text-jacarta-500 dark:text-jacarta-300">{elm.answer}</p>
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
            <Footer1 />
        </>
    );
};

export default Faq;
