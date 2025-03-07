import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import heroimges from '../assets/Data';
import 'swiper/css';
import 'swiper/css/navigation';

const Hero = () => {
  return (
    <div className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[650px]">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {heroimges.map((image, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img 
              src={image.img} 
              alt={`Slide ${index + 1}`} 
              className="w-full h-full object-cover "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;