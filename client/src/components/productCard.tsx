import Papaya from "../assets/papaya.jpg";
import { IProductResponse } from "../types";
export interface productCardProps {
    data: IProductResponse;
}

const productCard = ({ data }: productCardProps) => {
    return (
        <section className="flex-col items-center justify-center p-3">
            <div className="bg-white shadow-lg rounded-lg max-w-[19.5rem] w-full p-3">
                <section className="w-72">
                    <img src={data.image.picture} alt="papaya" className="rounded-md" />
                </section>
                <section className="flex-col">
                    <div className="border-none">
                        <h1 className="font-bold text-lg mt-2">{data.name}</h1>
                    </div>
                    <div className=" border-none flex font-semibold mb-2">
                        <p>Cost - </p>
                        <p className="text-green-800">
                            ₹{data.cost} per {data.unit}
                        </p>
                    </div>
                    <div className="">
                        <p>Type - {data.type}</p>
                    </div>
                    <div className="">
                        <h1 className="">Available weight - {data.weight}</h1>
                    </div>
                    <div>
                        <button type="submit" title="contact merchant" className="w-full mt-6">
                            contact merchant
                        </button>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default productCard;
