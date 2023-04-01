import { IoMdBus } from "react-icons/io";
import { BsBuildings } from "react-icons/bs";
import { TfiShoppingCart } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { routes } from "../routing";
import { motion } from "framer-motion";
import farmer from "../assets/farmer.jpg";
import SwiperComponent from "../components/swiper";

export default function Home() {
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
            <section className="relative isolate h-[40rem] after:absolute after:inset-0 after:bg-banner">
                <SwiperComponent />
                {/* <section className="flex items-center justify-end max-w-6xl mx-auto h-full">
                    <div className="flex items-end flex-col px-3">
                        <motion.h1 {...textOptions} className="text-black text-right text-4xl sm:text-6xl font-bold mb-6">
                            Kheti Bazaar
                        </motion.h1>
                        <motion.h2 {...textOptions} className="text-black text-right text-xl sm:text-2xl font-semibold">
                            Bringing the farm to your fingertips
                        </motion.h2>
                        <motion.h2 {...textOptions} className="text-black text-right text-xl sm:text-2xl font-semibold">
                            Shop fresh, shop local with us at KhetiBazaar
                        </motion.h2>
                    </div>
                </section> */}
            </section>
            <section className="bg-green-50 flex text-center flex-col sm:flex-row">
                <Link
                    to={routes.transportSearch}
                    className=" px-2 py-6 flex flex-col flex-1 gap-3 items-center justify-center hover:bg-primary group"
                >
                    <IoMdBus size="50" className="text-primary group-hover:text-white transition-colors" />
                    <p className="group-hover:text-white">Transportation Services</p>
                </Link>
                <Link
                    to={routes.storageSearch}
                    className="px-2 py-6 flex flex-col flex-1 gap-3 items-center justify-center border-y-2 border-y-primary sm:border-y-0 sm:border-x-2 sm:border-x-primary group hover:bg-primary group"
                >
                    <BsBuildings size="50" className="text-primary group-hover:text-white transition-colors" />
                    <p className="group-hover:text-white">Storage Services</p>
                </Link>
                <Link
                    to={routes.productsSearch}
                    className="px-2 py-6 flex flex-col flex-1 gap-3 items-center justify-center group  hover:bg-primary group"
                >
                    <TfiShoppingCart size="50" className="text-primary group-hover:text-white transition-colors" />
                    <p className="group-hover:text-white">Marketplace</p>
                </Link>
            </section>

            <section className="max-w-6xl mx-auto px-3 pt-12 pb-20 lg:py-20 flex gap-12 items-center justify-center flex-wrap">
                <motion.div {...textOptions}>
                    <p className="max-w-[70ch] mb-2">
                        <strong className="text-lg text-primary">KhetiBazzar</strong> is an agriculture e-commerce website that provides a platform
                        for farmers and consumers to connect and trade products.
                    </p>
                    <p className="max-w-[70ch] mb-2">
                        Consumers can browse and avail a variety of products such as crops, livestock, transport and storage facilities.
                    </p>
                    <p className="max-w-[70ch] mb-2">KhetiBazzar aims to streamline and digitalise the process of trading agricultural products.</p>
                    <p className="max-w-[70ch]">Through us farmers can access a large market and consumer can get better deals.</p>
                </motion.div>
                <motion.div {...imageOptions}>
                    <div className="relative isolate before:rounded-xl before:absolute before:inset-0 before:bg-[#d2d1d1] before:rotate-[8deg] hover:before:rotate-12 before:transition-transform before:-z-10 group">
                        <div className="relative isolate w-64 h-44 xs:w-96 xs:h-64 rounded-xl overflow-hidden">
                            <img
                                src={farmer}
                                alt="farming"
                                className="-z-10 absolute inset-0 object-cover h-full w-full group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </motion.div>
            </section>
        </section>
    );
}
