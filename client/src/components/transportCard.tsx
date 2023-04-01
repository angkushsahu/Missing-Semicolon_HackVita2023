export interface TransportCardProps {}

const transportCard = () => {
    return (
        <section className="bg-white shadow-lg rounded-lg max-w-sm w-full p-3">
            <section className="flex-col">
                <div className="border-none">
                    <h1 className="font-bold text-lg mt-2">Train service</h1>
                </div>
                <div className=" border-none flex font-semibold mb-2">
                    <p>email@gmail.com</p>
                </div>
                <div>
                    <p>54578375845</p>
                </div>
                <div>
                    <h1>India</h1>
                </div>
                <div>
                    <h1>Assam</h1>
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

export default transportCard;

//name email phone zone state
