import house2 from '../assets/house2.jpg'
import house3 from '../assets/house3.jpg'
import house4 from '../assets/house4.jpg'
import house5 from '../assets/house5.jpg'
import house6 from '../assets/house6.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation,Autoplay } from 'swiper/modules';

const Slider = () => {
    return (
        <div>
           <div>
           <Swiper navigation={true} 
           modules={[Navigation, Autoplay]}
            loop={true}
            autoplay={
                {delay: 2000}
            } 
            className="mySwiper">
                <SwiperSlide><div className='w-full h-[auto]'>
                <img src={house2} alt="" />
            </div></SwiperSlide>
                <SwiperSlide><div className='w-full'>
                <img src={house3} alt="" />
            </div></SwiperSlide>
                <SwiperSlide><div className='w-full'>
                <img src={house4} alt="" />
            </div></SwiperSlide>
                <SwiperSlide><div className='w-full'>
                <img src={house5} alt="" />
            </div></SwiperSlide>
                <SwiperSlide> <div className='w-full'>
                <img src={house6} alt="" />
            </div></SwiperSlide>
            </Swiper>
           </div>
        </div>
    );
};

export default Slider;





      