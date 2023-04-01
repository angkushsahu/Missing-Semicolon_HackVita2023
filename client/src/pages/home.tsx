import { IconContext } from "react-icons";
import { IoMdBus } from "react-icons/io";
import { BsBuildings } from "react-icons/bs";
import { TfiShoppingCart } from "react-icons/tfi";
import background from "../assets/bg.jpg";
import farmer from "../assets/farmer.jpg";

export default function Home() {
    return (
        <section>
            <section className="relative isolate h-[40rem] after:absolute after:inset-0 after:bg-banner">
                <img src={background} alt="background" className="-z-10 absolute inset-0 object-cover h-full w-full opacity-70" loading="lazy" />
                <section className="flex items-center justify-end max-w-6xl mx-auto h-full">
                    <div className="flex items-end flex-col px-3">
                        <h1 className="text-black text-right text-4xl sm:text-6xl font-bold mb-6">Kheti Bazaar</h1>
                        <h2 className="text-black text-right text-xl sm:text-2xl font-semibold">Bringing the farm to your fingertips</h2>
                        <h2 className="text-black text-right text-xl sm:text-2xl font-semibold">Shop fresh, shop local with us at KhetiBazaar</h2>
                    </div>
                </section>
            </section>
            <IconContext.Provider value={{ size: "50", color: "#3e824c" }}>
                <section className="bg-green-50 flex text-center flex-col sm:flex-row">
                    <div className="px-2 py-6 flex flex-col flex-1 gap-3 items-center justify-center">
                        <IoMdBus />
                        <p>Transporation Services</p>
                    </div>
                    <div className="px-2 py-6 flex flex-col flex-1 gap-3 items-center justify-center border-y-2 border-y-primary sm:border-y-0 sm:border-x-2 sm:border-x-primary">
                        <BsBuildings />
                        <p>Storage Services</p>
                    </div>
                    <div className="px-2 py-6 flex flex-col flex-1 gap-3 items-center justify-center">
                        <TfiShoppingCart />
                        <p>Marketplace</p>
                    </div>
                </section>
            </IconContext.Provider>
            <section className="max-w-6xl mx-auto px-3 pt-12 pb-20 lg:py-20 flex gap-12 items-center justify-center flex-wrap">
                <div>
                    <p className="max-w-[70ch] mb-2">
                        <strong className="text-lg text-primary">KhetiBazzar</strong> is an agriculture e-commerce website that provides a platform
                        for farmers and consumers to connect and trade products.
                    </p>
                    <p className="max-w-[70ch] mb-2">
                        Consumers can browse and avail a variety of products such as crops, livestock, transport and storage facilities.
                    </p>
                    <p className="max-w-[70ch] mb-2">KhetiBazzar aims to streamline and digitalise the process of trading agricultural products.</p>
                    <p className="max-w-[70ch]">Through us farmers can access a large market and consumer can get better deals.</p>
                </div>
                <div>
                    <div className="relative isolate before:rounded-xl before:absolute before:inset-0 before:bg-[#d2d1d1] before:rotate-[8deg] hover:before:rotate-12 before:transition-transform before:-z-10 group">
                        <div className="relative isolate w-64 h-44 xs:w-96 xs:h-64 rounded-xl overflow-hidden">
                            <img
                                src={farmer}
                                alt="farming"
                                className="-z-10 absolute inset-0 object-cover h-full w-full group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}
