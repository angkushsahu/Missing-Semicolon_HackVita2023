import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { BiHide, BiShow } from "react-icons/bi";
import { routes } from "../routing";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => setShowPassword((prev) => !prev);
    async function onLogin(e: FormEvent) {
        e.preventDefault();
    }

    return (
        <section className="min-h-screen flex items-center justify-center p-3">
            <div className="bg-white shadow-lg rounded-lg max-w-[32rem] w-full p-3">
                <h1 className="text-3xl font-bold mb-6 text-primary text-center">Login</h1>
                <form onSubmit={onLogin}>
                    <div className="input-container">
                        <label htmlFor="email">Enter your email</label>
                        <input type="email" name="email" id="email" placeholder="e.g., johndoe@gmail.com" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">Enter your password</label>
                        <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Enter a strong password" />
                        {showPassword ? <BiHide size="20" onClick={togglePassword} /> : <BiShow size="20" onClick={togglePassword} />}
                    </div>
                    <Link to={routes.forgotPassword} className="block text-right text-primary mt-2" title="Forgot Password">
                        Forgot Password
                    </Link>
                    <button type="submit" className="w-full text-lg mt-6" title="Login">
                        Login
                    </button>
                </form>
                <Link to={routes.signupCriteria} className="block text-center text-primary mt-2 underlined-link" title="Register instead">
                    Register instead
                </Link>
            </div>
        </section>
    );
}
