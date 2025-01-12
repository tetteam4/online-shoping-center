import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Navigation module styles
import "swiper/css/pagination"; // Pagination module styles


import { Navigation, Pagination, Autoplay } from "swiper/modules";


const SliderComponent = () => {
    return (
        <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        className="h-[300px] bg-gray-100 rounded-lg shadow-md"
      >
        <SwiperSlide className="flex justify-center items-center">
          <img src="https://via.placeholder.com/800x400" alt="Slide 1" className="rounded-md" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img src="https://via.placeholder.com/800x400" alt="Slide 2" className="rounded-md" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img src="https://via.placeholder.com/800x400" alt="Slide 3" className="rounded-md" />
        </SwiperSlide>
      </Swiper>
      
    );
  };
  
  export default SliderComponent;
  
