import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar></Navbar>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay
        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <div
            className="hero h-[70vh] lg:h-screen"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/premium-photo/indian-wedding-gate-decoration-green-eucalyptus-background_221414-522.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  Elegant Wedding Experiences
                </h1>
                <p className="mb-5">
                  Crafting dream weddings with sophistication and love. Let us
                  make your special day unforgettable.
                </p>
                <button
                  onClick={() => navigate("/services")}
                  className="btn border-none bg-gradient-to-br from-[#DEBB50] to-[#B57F12] text-white font-semibold text-lg capitalize"
                >
                  Explore Services
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero h-[70vh] lg:h-screen"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/free-photo/young-joyful-friends-celebrating_23-2147652023.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  Birthday Magic Unleashed
                </h1>
                <p className="mb-5">
                  From fun-filled extravaganzas to intimate gatherings, we
                  create unforgettable birthday memories.
                </p>
                <button
                  onClick={() => navigate("/services")}
                  className="btn border-none bg-gradient-to-br from-[#DEBB50] to-[#B57F12] text-white font-semibold text-lg capitalize"
                >
                  Explore Services
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero h-[70vh] lg:h-screen"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/free-photo/man-proposing-drink-champagne_329181-5335.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  Celebrate Love{"'"}s Journey
                </h1>
                <p className="mb-5">
                  Mark milestones with elegance and charm. Let us create
                  cherished anniversary moments for you.
                </p>
                <button
                  onClick={() => navigate("/services")}
                  className="btn border-none bg-gradient-to-br from-[#DEBB50] to-[#B57F12] text-white font-semibold text-lg capitalize"
                >
                  Explore Services
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero h-[70vh] lg:h-screen"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/premium-photo/romantic-luxury-evening-with-champagne-setting-with-two-glasses-rose-petails-candles_114830-84.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  Begin Your Love Story
                </h1>
                <p className="mb-5">
                  Start your journey to forever with joy and style. Explore our
                  delightful engagement celebrations.
                </p>
                <button
                  onClick={() => navigate("/services")}
                  className="btn border-none bg-gradient-to-br from-[#DEBB50] to-[#B57F12] text-white font-semibold text-lg capitalize"
                >
                  Explore Services
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero h-[70vh] lg:h-screen"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/free-photo/senior-people-celebrating-together_23-2149262275.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  Cheers to New Beginnings
                </h1>
                <p className="mb-5">
                  Raise a toast to new adventures and celebrate your journey
                  with our retirement party expertise.
                </p>
                <button
                  onClick={() => navigate("/services")}
                  className="btn border-none bg-gradient-to-br from-[#DEBB50] to-[#B57F12] text-white font-semibold text-lg capitalize"
                >
                  Explore Services
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero h-[70vh] lg:h-screen"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/free-photo/side-view-couple-gender-reveal-party_23-2150256652.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  Welcoming Little Miracles
                </h1>
                <p className="mb-5">
                  Celebrate new life with joy and love. Discover our
                  heartwarming baby shower gatherings.
                </p>
                <button
                  onClick={() => navigate("/services")}
                  className="btn border-none bg-gradient-to-br from-[#DEBB50] to-[#B57F12] text-white font-semibold text-lg capitalize"
                >
                  Explore Services
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;
