import React from "react";
import Header2 from "../../component/home2/header2";
import Footer1 from "../../component/footer";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
    return (
        <>
            <Header2 />
            <section className="relative py-16 dark:bg-jacarta-800 md:py-24 termconditions">

                <div className="container">
                    <h1 className="text-center font-display text-4xl font-medium text-jacarta-700 dark:text-white">
                        Privacy Policy
                    </h1>
                    <div className="article-content mx-auto ">
                        <h2 className="text-md mb-3">Controller of Personal Data</h2>
                        <p className="my-1">
                            The controller of personal data is ARC Capital, located at Purkynova 2121/3, Nove Mesto, 110 00 Prague 1, Czech Republic.
                            For privacy-related inquiries, contact <Link to="#" className="text-accent">privacy@arccapital.com</Link>.
                        </p>

                        <h2 className="text-md">2. Data Collection and Sources</h2>
                        <p>We collect personal data through:</p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li><strong>Direct user input</strong> (registration, service use, customer support, events, social media).</li>
                            <li><strong>Automated data collection</strong> (device details, IP address, website usage, service interactions).</li>
                            <li><strong>Third-party sources</strong> (trading platforms, social media).</li>
                        </ul>

                        <h2 className="text-md"> Use of Personal Data</h2>
                        <p>We process data for:</p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li><strong>Account registration and service provision</strong> (necessary for contract execution).</li>
                            <li> <strong>Marketing communications </strong>(based on legitimate interest or consent).</li>
                            <li><strong>Customer support and service improvement </strong>(ensuring quality and security).</li>
                            <li><strong>Analytics </strong>(understanding customer behavior and preferences).</li>
                        </ul>
                        <h2 className="text-md dar">Data Security and Retention</h2>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                           <li>Data is stored securely with encryption and protection measures.</li>
                           <li>Retention periods vary depending on legal obligations and business needs (ranging from 6 months to 10 years).</li>
                        </ul>

                    </div>
                </div>
            </section>
            <Footer1 />
        </>
    )
}
export default PrivacyPolicy