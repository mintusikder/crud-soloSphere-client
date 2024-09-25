
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from "../assets/images/carousel1.jpg"
import img2 from "../assets/images/carousel2.jpg"
import img3 from "../assets/images/carousel3.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Slide image={img1} text="Web Developer"></Slide></SwiperSlide>
        <SwiperSlide><Slide image={img2} text="Gra"></Slide></SwiperSlide>
        <SwiperSlide><Slide image={img3} text="dara"></Slide></SwiperSlide>
   

      </Swiper>
    </>
  );
}