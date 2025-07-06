import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,EffectCoverflow,Autoplay  } from "swiper/modules";
export const collections4 = [
  {
    id: 61,
    imageSrc: "/img/user1.jpg",
    avatarSrc: "/img/flag1.png",
    title: "Olivia Monroe",
    subTitle: "Trade Smart",
    author: "Olivia Monroe",
  },
  {
    id: 62,
    imageSrc: "/img/user2.jpg",
    avatarSrc: "/img/flag2.png",
    title: "Liam Anderson",
    subTitle: "Risk Wisely",
    author: "Liam Anderson",
  },
  {
    id: 63,
    imageSrc: "/img/user3.jpg",
    avatarSrc: "/img/flag3.png",
    title: "Julian Hayes",
    subTitle: "Stay Disciplined",
    author: "Julian Hayes",
  },
  {
    id: 64,
    imageSrc: "/img/user4.jpg",
    avatarSrc: "/img/flag4.png",
    title: "Caleb Foster",
    subTitle: "Master Patience",
    author: "Caleb Foster",
  },
  {
    id: 65,
    imageSrc: "/img/user5.jpg",
    avatarSrc: "/img/flag5.png",
    title: "Riley Morgan",
    subTitle: "Adapt & Win",
    author: "Riley Morgan",
  },
  {
    id: 61,
    imageSrc: "/img/user6.jpg",
    avatarSrc: "/img/flag6.png",
    title: "Jordan Blake",
    subTitle: "Fearless Trading",
    author: "Jordan Blake",
  },
  {
    id: 62,
    imageSrc: "/img/user7.jpg",
    avatarSrc: "/img/flag7.png",
    title: "Taylor Quinn",
    subTitle: "Profit with Purpose",
    author: "Taylor Quinn",
  },
  {
    id: 63,
    imageSrc: "/img/user1.jpg",
    avatarSrc: "/img/flag1.png",
    title: "Alex Rowan",
    subTitle: "Market Moves",
    author: "Alex Rowan",
  },
  {
    id: 64,
    imageSrc: "/img/user2.jpg",
    avatarSrc: "/img/flag2.png",
    title: "Casey Elliott",
    subTitle: "Trust the Process",
    author: "Casey Elliott",
  },
  {
    id: 65,
    imageSrc: "/img/user3.jpg",
    avatarSrc: "/img/flag3.png",
    title: "Emily Vaughn",
    subTitle: "Edge Over Emotion",
    author: "Emily Vaughn",
  },
  {
    id: 61,
    imageSrc: "/img/user4.jpg",
    avatarSrc: "/img/flag4.png",
    title: "Jordan Blake",
    subTitle: "Risk Wisely",
    author: "Jordan Blake",
  },
  {
    id: 62,
    imageSrc: "/img/user5.jpg",
    avatarSrc: "/img/flag5.png",
    title: "Etherium NFT Launching Lab",
    subTitle: "Stay Disciplined",
    author: "Etherium NFT Launching Lab",
  },
  {
    id: 63,
    imageSrc: "/img/user6.jpg",
    avatarSrc: "/img/flag6.png",
    title: "Riley Morgan",
    subTitle: "Risk Wisely",
    author: "Riley Morgan",
  },
  {
    id: 64,
    imageSrc: "/img/user7.jpg",
    avatarSrc: "/img/flag7.png",
    title: "Casey Elliott",
    subTitle: "Stay Disciplined",
    author: "Casey Elliott",
  },
  {
    id: 65,
    imageSrc: "/img/user4.jpg",
    avatarSrc: "/img/flag4.png",
    title: "Emily Vaughn",
    subTitle: "Risk Wisely",
    author: "Emily Vaughn",
  },
];
import {Link} from "react-router-dom";

export default function CoverFlowSlider() {
  return (
    <div className="relative px-6 md:pb-16 pb-2 sm:px-0 dark:bg-black slider-section" >
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          100: {
            // width: 640,
            slidesPerView: 1,
          },
          575: {
            // width: 640,
            slidesPerView: 3,
          },
          // when window width is >= 768px
          1280: {
            // width: 768,
            slidesPerView: 4,
          },
          1920: {
            // width: 768,
            slidesPerView: 5,
          },
        }}
        slidesPerGroupAuto
        
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={70}
          loop={true}
        autoplay={{
          delay: 2500, // Time between auto scrolls
          disableOnInteraction: false, // Keeps autoplay after interaction
        }} 
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Navigation,Autoplay]}
        navigation={{
          nextEl: ".snbn7",
          prevEl: ".snbp7",
        }}
        className="swiper coverflow-slider !py-5"
      >
        {collections4.map((elm, i) => (
          <SwiperSlide key={i} autoplay={true}>
            <article>
              <div className="block overflow-hidden rounded-2.5xl bg-white dark:text-jacarta-900 shadow-md transition-shadow hover:shadow-lg dark:bg-jacarta-700">
                <figure className="relative">
                  <Link href={`/item/${elm.id}`}>
                    <img
                      src={elm.imageSrc}
                      alt="item 1"
                      className="swiper-lazy w-full object-cover"
                      height="400"
                      width="379"
                    />
                    {/* <div className="swiper-lazy-preloader"></div> */}
                  </Link>
                </figure>
                <div className="p-6">
                  <div className="flex">
                    <Link href={`/user/${elm.id}`} className="shrink-0">
                      <img
                        width={40}
                        height={40}
                        src={elm.avatarSrc}
                        alt="avatar"
                        className="mr-4 h-10 w-10 rounded-full"
                      />
                    </Link>
                    <div>
                      <Link href={`/item/${elm.id}`} className="block">
                        <span className="font-display text-lg leading-none text-jacarta-700 hover:text-accent dark:text-white">
                          {elm.title}
                        </span>
                      </Link>
                      <div href="#" className="text-sm text-accent">
                        {elm.subTitle}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className=" snbp7 swiper-button-prev swiper-button-prev-4 group absolute top-1/2 left-4 z-10 -mt-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base shadow-white-volume">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="fill-jacarta-700 group-hover:fill-accent"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
        </svg>
      </div>
      <div className="snbn7 swiper-button-next swiper-button-next-4 group absolute top-1/2 right-4 z-10 -mt-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base shadow-white-volume">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="fill-jacarta-700 group-hover:fill-accent"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
        </svg>
      </div>
    </div>
  );
}
