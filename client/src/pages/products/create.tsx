import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BiShow, BiHide } from "react-icons/bi";
import { routes } from "../../routing";
import { stateValues } from "../../utils";
import { ZoneType } from "../../types";
import { useCreateProductMutation, useStorageSignupMutation } from "../../store";
import { Loading } from "../../components";

export default function ProductCreate() {
    const [createProduct, { isLoading }] = useCreateProductMutation();
    const navigate = useNavigate();
    const [avatar, setAvatar] = useState("");
    const nameRef = useRef<HTMLInputElement>(null);
    const typeRef = useRef<HTMLInputElement>(null);
    const unitRef = useRef<HTMLInputElement>(null);
    const costRef = useRef<HTMLInputElement>(null);
    const weightRef = useRef<HTMLInputElement>(null);
    const locationRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLTextAreaElement>(null);
    const avatarRef = useRef<HTMLInputElement | null>(null);

    async function onProductCreation(e: FormEvent) {
        e.preventDefault();

        const name = nameRef.current?.value;
        const type = typeRef.current?.value;
        const unit = unitRef.current?.value;
        const cost = costRef.current?.value;
        const weight = weightRef.current?.value;
        const location = locationRef.current?.value;
        const description = descriptionRef.current?.value;

        if (!name || !type || !unit || !cost || !weight || !location || !description || !avatar) {
            toast.warn("Please validate all the fields");
            return;
        }

        try {
            const response = await createProduct({ cost: +cost, description, location, name, type, unit, weight: +weight, image: avatar }).unwrap();
            if (response.success) {
                toast.success(response.message);
                navigate(routes.myProducts);
            } else {
                toast.error(response.message);
            }
        } catch (err: any) {
            toast.error(err.data.message as string);
        }
    }

    const updateAvatar = (e: ChangeEvent<HTMLInputElement>) => {
        const image = e.target.files![0];
        if (!image) {
            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = () => {
            setAvatar(String(reader.result));
        };
    };

    if (isLoading) {
        return <Loading />;
    }
    return (
        <section className="min-h-screen flex items-center justify-center p-3">
            <div className="bg-white shadow-lg rounded-lg max-w-[32rem] w-full p-3">
                <h1 className="text-2xl xs:text-3xl font-bold mb-6 text-primary text-center">Create Product</h1>
                <form onSubmit={onProductCreation}>
                    <div className="input-container">
                        <label htmlFor="name">Enter product name</label>
                        <input type="text" ref={nameRef} name="name" id="name" placeholder="e.g., apples" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="type">Enter product type</label>
                        <input type="text" ref={typeRef} name="type" id="type" placeholder="e.g., fruits" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="unit">Enter product unit</label>
                        <input type="text" ref={unitRef} name="unit" id="unit" placeholder="e.g., kgs" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="cost">Enter product cost</label>
                        <input type="text" ref={costRef} name="cost" id="cost" placeholder="e.g., 1000" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="weight">Enter available weight</label>
                        <input type="text" ref={weightRef} name="weight" id="weight" placeholder="e.g., 100kg" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="location">Enter location of selling</label>
                        <input type="text" ref={locationRef} name="location" id="location" placeholder="e.g., 100kg" />
                    </div>
                    <div className="input-container avatar-container" onClick={() => avatarRef.current?.focus()}>
                        <label htmlFor="avatar">Choose an avatar (optional)</label>
                        <input
                            type="file"
                            accept="image/*"
                            name="avatar"
                            id="avatar"
                            placeholder="choose from your device"
                            onChange={updateAvatar}
                            ref={avatarRef}
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="description">Enter product description</label>
                        <textarea ref={descriptionRef} name="description" id="description" placeholder="Describe your product ...." />
                    </div>
                    <button type="submit" className="w-full text-lg mt-6 mb-2" title="Create Product">
                        Create
                    </button>
                </form>
            </div>
        </section>
    );
}

/*
name type unit cost weight location description image
*/
