import { FormEvent } from "react";

export default function UpdateUserAsUser() {
    async function onUpdate(e: FormEvent) {
        e.preventDefault();
    }

    return (
        <section className="min-h-screen flex items-center justify-center p-3">
            <div className="bg-white shadow-lg rounded-lg max-w-[32rem] w-full p-3">
                <h1 className="text-2xl xs:text-3xl font-bold mb-6 text-primary text-center">Update - User</h1>
                <form onSubmit={onUpdate}>
                    <div className="input-container">
                        <label htmlFor="name">Change your name</label>
                        <input type="text" name="name" id="name" placeholder="e.g., John Doe" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="email">Change your email</label>
                        <input type="email" name="email" id="email" placeholder="e.g., johndoe@gmail.com" />
                    </div>
                    <button type="submit" className="w-full text-lg mt-6" title="Confirm">
                        Confirm
                    </button>
                </form>
            </div>
        </section>
    );
}
