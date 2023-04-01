import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade, Autoplay } from "swiper";
import { motion } from "framer-motion";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";
import slide5 from "../assets/slide5.jpg";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperComponent = () => {
    const swiperSlide = [slide1, slide2, slide3, slide4, slide5];
    const textOptions = {
        initial: {
            x: "-100%",
            opacity: 0,
        },
        whileInView: {
            x: "0",
            opacity: 1,
        },
    };
    const imageOptions = {
        initial: {
            x: "100%",
            opacity: 0,
        },
        whileInView: {
            x: "0",
            opacity: 1,
        },
    };
    return (
        <section>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                className="w-full h-[40rem] "
            >
                {swiperSlide.map((item, index) => (
                    <SwiperSlide key={index} className="bg-center bg-cover">
                        <img src={item} alt={item} className="block w-full h-[40rem] object-cover" />
                        <div className="absolute flex-col justify-center items-center translate-x-[6rem] md:translate-x-[15rem] xl:translate-x-[45rem] translate-y-[-40rem] h-[40rem] w-[50rem] bg-white opacity-70 rounded-l-[50%]">
                            <motion.h1
                                {...textOptions}
                                className="text-black text-right text-4xl sm:text-6xl font-bold mb-6 pt-[14rem] pr-[32rem] md:pr-[20rem] xl:pr-[10rem]"
                            >
                                KhetiBazaar
                            </motion.h1>
                            <motion.h2
                                {...textOptions}
                                className="text-black text-right text-xl sm:text-2xl font-semibold pr-[32rem] md:pr-[20rem] xl:pr-[10rem]"
                            >
                                Bringing the farm to your fingertips
                            </motion.h2>
                            <motion.h2
                                {...textOptions}
                                className="text-black text-right text-xl sm:text-2xl font-semibold pr-[32rem] md:pr-[20rem] xl:pr-[10rem]"
                            >
                                Shop fresh, shop local with us at KhetiBazaar
                            </motion.h2>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default SwiperComponent;

// .banner_info {
//     position: absolute;
//     bottom: 4rem;
//     margin: 0 2rem 0 0;
//     background-color: rgba(0, 0, 0, 0.5);
//     padding: 0 4rem 0;
//     p {
//         max-width: 45ch;
//     }
