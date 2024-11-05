import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = ({ imagesUrl, mobileView }) => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={mobileView ? 1 : 1.1}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      loop={true}
      modules={[Navigation, Pagination, Autoplay]}
      className="lg:h-[19rem] md:h-[12rem] w-full h-[9rem]"
    >
      {imagesUrl.map((imageUrl, inx) => (
        <SwiperSlide
          key={inx}
          className={`${!mobileView ? "rounded-lg" : ""} overflow-hidden`}
        >
          <img
            src={imageUrl}
            alt={imageUrl}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
