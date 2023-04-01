import { IUser } from "../types";
export interface StorageCardProps {
    data: IUser;
}

const StorageCard = ({ data }: StorageCardProps) => {
    return (
        <section className="bg-white shadow-lg rounded-lg max-w-sm w-full p-3">
            <section className="flex-col">
                <div className="border-none">
                    <h1 className="font-bold text-lg mt-2">{data.name}</h1>
                </div>
                <div className=" border-none flex font-semibold mb-2">
                    <p>{data.email}</p>
                </div>
                <div>
                    <p>{data.phone}</p>
                </div>
                <div>
                    <h1>{data.locality}</h1>
                </div>
                <div>
                    <h1>{data.state}</h1>
                </div>
                <div>
                    <button type="submit" title="contact merchant" className="w-full mt-6">
                        contact merchant
                    </button>
                </div>
            </section>
        </section>
    );
};

export default StorageCard;
