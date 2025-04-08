
export const testimonialsData = [
  {
    id: 1,
    imageSrc: "/img/man1.jpg",
    text: "Xhibiter is one of the most exciting, if you're interested in shaping a new business model for creators, this is the team to join.",
    name: "Katie Smith",
    role: "General Partner at Entrepreneur",
  },
  {
    id: 2,
    imageSrc: "/img/man2.jpg",
    text: "Xhibiter is one of the most exciting, if you're interested in shaping a new business model for creators, this is the team to join.",
    name: "Alex Fox",
    role: "Entrepreneur / Manager",
  },
  {
    id: 3,
    imageSrc: "/img/women1.jpg",
    text: "Xhibiter is one of the most exciting, if you're interested in shaping a new business model for creators, this is the team to join.",
    name: "Marshal Ericson",
    role: "NFT Entrepreneur",
  },
  {
    id: 1,
    imageSrc: "/img/man1.jpg",
    text: "Xhibiter is one of the most exciting, if you're interested in shaping a new business model for creators, this is the team to join.",
    name: "Katie Smith",
    role: "General Partner at Entrepreneur",
  },
  {
    id: 2,
    imageSrc: "/img/man2.jpg",
    text: "Xhibiter is one of the most exciting, if you're interested in shaping a new business model for creators, this is the team to join.",
    name: "Alex Fox",
    role: "Entrepreneur / Manager",
  },
  {
    id: 3,
    imageSrc: "/img/women1.jpg",
    text: "Xhibiter is one of the most exciting, if you're interested in shaping a new business model for creators, this is the team to join.",
    name: "Marshal Ericson",
    role: "NFT Entrepreneur",
  },
];
export default function Testimonials() {
  return (
    <section className="bg-light-base py-20 dark:bg-black overflow-hidden" id="testimonial">
        <div className="mx-auto mb-12 max-w-sm text-center">
          <h2 data-aos-duration={600} data-aos="fade-down" data-aos-anchor="#testimonial"
            className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
            TRUST PILOT REVIEW
          </h2>
          <p className="text-lg dark:text-jacarta-300" data-aos-duration={600} data-aos="fade-down" data-aos-anchor="#testimonial">
            <span className="animate-gradient text-lg font-bold">10000+  </span> Customers those who already tried our services.
          </p>
        </div>
      <div className="container relative overflow-hidden xl:left-[calc((100vw-1400px)/4)] x]">
        <div className="flex animate-marquee space-x-8">
          {testimonialsData.map((elm, i) => (
            <div
              key={i}
              className="flex flex-shrink-0 items-center justify-center rounded-2.5xl border border-jacarta-100 bg-white dark:bg-jacarta-700 p-6 w-1/2 gap-6">
              <img
                width={50} height={50}
                src={elm.imageSrc}
                alt="image"
                className="w-28 self-start rounded-2.5xl "
              />
              <div className="-ml-14 -mt-4 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-[5px] border-white bg-accent dark:border-jacarta-700 md:mb-0 md:w-16">
                <svg
                  width="22"
                  height="19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-white"
                >
                  <path d="M6.027 18.096c-.997 0-1.813-.204-2.448-.612a5.147 5.147 0 01-1.564-1.564 5.729 5.729 0 01-.952-2.38C.927 12.679.86 11.976.86 11.432c0-2.221.567-4.239 1.7-6.052C3.693 3.567 5.461 2.093 7.863.96l.612 1.224c-1.405.59-2.606 1.519-3.604 2.788-1.042 1.27-1.564 2.561-1.564 3.876 0 .544.068 1.02.204 1.428a3.874 3.874 0 012.516-.884c1.179 0 2.199.385 3.06 1.156.862.77 1.292 1.836 1.292 3.196 0 1.27-.43 2.312-1.292 3.128-.861.816-1.881 1.224-3.06 1.224zm11.56 0c-.997 0-1.813-.204-2.448-.612a5.148 5.148 0 01-1.564-1.564 5.73 5.73 0 01-.952-2.38c-.136-.861-.204-1.564-.204-2.108 0-2.221.567-4.239 1.7-6.052 1.134-1.813 2.902-3.287 5.304-4.42l.612 1.224c-1.405.59-2.606 1.519-3.604 2.788-1.042 1.27-1.564 2.561-1.564 3.876 0 .544.068 1.02.204 1.428a3.874 3.874 0 012.516-.884c1.179 0 2.199.385 3.06 1.156.862.77 1.292 1.836 1.292 3.196 0 1.27-.43 2.312-1.292 3.128-.861.816-1.881 1.224-3.06 1.224z" />
                </svg>
              </div>

              <div className="mb-4 md:mb-0">
                <div className="-ml-1 mb-3 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="h-5 w-5 fill-orange"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="h-5 w-5 fill-orange"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="h-5 w-5 fill-orange"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="h-5 w-5 fill-orange"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="h-5 w-5 fill-orange"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                  </svg>
                </div>
                <p className="text-md leading-normal text-jacarta-700 dark:text-white">
                  {elm.text}
                </p>
                <span className="mt-6 block font-display text-sm font-medium text-jacarta-700 dark:text-white">
                  {elm.name}
                </span>
                <span className="text-2xs font-medium tracking-tight dark:text-jacarta-400">
                  {elm.role}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="spb1 swiper-pagination mt-10 text-center"></div>
      </div>
    </section>
  );
}
