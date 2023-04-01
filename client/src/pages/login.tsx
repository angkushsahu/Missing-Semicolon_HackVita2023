import { FormEvent, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiHide, BiShow } from "react-icons/bi";
import { routes } from "../routing";
import { toast } from "react-toastify";
import { validateEmail } from "../utils";
import { useLoginMutation } from "../store";
import { Loading } from "../components";

export default function Login() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [login, { isLoading }] = useLoginMutation();

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => setShowPassword((prev) => !prev);
    async function onLogin(e: FormEvent) {
        e.preventDefault();
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        if (!email || !password) {
            toast.warn("Please validate all the fields");
            return;
        }
        if (!validateEmail(email)) {
            toast.warn("Please enter a valid email ID");
            return;
        }

        try {
            const response = await login({ email, password }).unwrap();
            if (response.success) {
                toast.success(response.message);
                navigate(routes.home);
            } else {
                toast.error(response.message);
            }
        } catch (err: any) {
            toast.error(err.data.message as string);
        }
    }

    if (isLoading) {
        return <Loading />;
    }

    return (
        <section className="min-h-screen flex items-center justify-center p-3">
            <div className="bg-white shadow-lg rounded-lg max-w-[32rem] w-full p-3">
                <h1 className="text-3xl font-bold mb-6 text-primary text-center">Login</h1>
                <form onSubmit={onLogin}>
                    <div className="input-container">
                        <label htmlFor="email">Enter your email</label>
                        <input type="email" name="email" id="email" placeholder="e.g., johndoe@gmail.com" ref={emailRef} />
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">Enter your password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            placeholder="Enter a strong password"
                            ref={passwordRef}
                        />
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
