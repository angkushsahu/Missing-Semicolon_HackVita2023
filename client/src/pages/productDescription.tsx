import Papaya from "../assets/papaya.jpg";

const ProductDescription = () => {
    return (
        <section className="flex flex-col md:flex-row justify-center items-center pt-8">
            <div className="isolate mx-auto flex-1">
                <img src={Papaya} alt="papaya" className="w-full h-full p-8" />
            </div>
            <div className="flex-1">
                <div className="input-container border-none flex-col justify-center items-center text-left pb-8 pl-8">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl pb-8">Papaya Red Lady</h1>
                    <p className="text-2xl text-green-800">Price - ₹200/kg</p>
                </div>
                <div className="input-container border-none text-left pb-8 pl-8">
                    <button type="submit">Contact Info</button>
                </div>
                <div className="input-container border-none text-left pl-8">
                    <p className="text-1xl md:text-2xl lg:2xl">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint molestiae atque, odit molestias provident soluta, consequuntur
                        ut doloremque vel voluptatem aut autem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos ipsa nisi aspernatur
                        dolorum. Laboriosam harum corrupti cupiditate natus commodi similique iste quae molestias. Voluptas deserunt magnam officiis
                        debitis voluptatum excepturi.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProductDescription;
