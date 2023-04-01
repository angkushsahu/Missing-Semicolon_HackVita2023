import { FormEvent } from "react";

export default function ForgotPassword() {
    async function onForgotPassword(e: FormEvent) {
        e.preventDefault();
    }

    return (
        <section className="min-h-screen flex items-center justify-center p-3">
            <div className="bg-white shadow-lg rounded-lg max-w-[32rem] w-full p-3">
                <h1 className="text-2xl xs:text-3xl font-bold mb-6 text-primary text-center">Forgot Password</h1>
                <form onSubmit={onForgotPassword}>
                    <div className="input-container">
                        <label htmlFor="email">Enter your email</label>
                        <input type="email" name="email" id="email" placeholder="e.g., johndoe@gmail.com" />
                    </div>
                    <button type="submit" className="w-full text-lg mt-6" title="Send e-mail">
                        Send Email
                    </button>
                </form>
            </div>
        </section>
    );
}
