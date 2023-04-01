import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { BiShow, BiHide } from "react-icons/bi";
import { routes } from "../../routing";

export default function SignupAsUser() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    async function onRegister(e: FormEvent) {
        e.preventDefault();
    }

    const togglePassword = () => setShowPassword((prev) => !prev);
    const toggleConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

    return (
        <section className="min-h-screen flex items-center justify-center p-3">
            <div className="bg-white shadow-lg rounded-lg max-w-[32rem] w-full p-3">
                <h1 className="text-2xl xs:text-3xl font-bold mb-6 text-primary text-center">Signup - User</h1>
                <form onSubmit={onRegister}>
                    <div className="input-container">
                        <label htmlFor="name">Enter your name</label>
                        <input type="text" name="name" id="name" placeholder="e.g., John Doe" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="email">Enter your email</label>
                        <input type="email" name="email" id="email" placeholder="e.g., johndoe@gmail.com" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="phone">Enter work contact number</label>
                        <input type="text" name="phone" id="phone" placeholder="e.g., 9087564312" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">Enter your password</label>
                        <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Enter a strong password" />
                        {showPassword ? <BiHide size="20" onClick={togglePassword} /> : <BiShow size="20" onClick={togglePassword} />}
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">Confirm Password</label>
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            id="confirmPassword"
                            placeholder="Re-enter password"
                        />
                        {showConfirmPassword ? (
                            <BiHide size="20" onClick={toggleConfirmPassword} />
                        ) : (
                            <BiShow size="20" onClick={toggleConfirmPassword} />
                        )}
                    </div>
                    <button type="submit" className="w-full text-lg mt-6" title="Signup">
                        Signup
                    </button>
                </form>
                <Link to={routes.login} className="block text-center text-primary mt-2 underlined-link" title="Login instead">
                    Already registered?
                </Link>
            </div>
        </section>
    );
}
