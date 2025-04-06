import React from "react";
import Header2 from "../../component/home2/header2";
import Footer1 from "../../component/footer";
import { TermsContent } from "../../component";

const TermsAndConsition = () => {
  return (
    <>
      <Header2 />
      <section className="relative py-16 dark:bg-jacarta-800 md:py-24 termconditions term-main-page">
      <div className="container">
      <TermsContent/>
      </div>
      </section>
      <Footer1 />
    </>
  )
}
export default TermsAndConsition