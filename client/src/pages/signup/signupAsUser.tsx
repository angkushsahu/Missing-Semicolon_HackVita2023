import { FormEvent, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiShow, BiHide } from "react-icons/bi";
import { routes } from "../../routing";
import { useUserSignupMutation } from "../../store";
import { toast } from "react-toastify";
import { validateEmail } from "../../utils";

export default function SignupAsUser() {
    const navigate = useNavigate();
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);
    const [signup, { isLoading }] = useUserSignupMutation();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    async function onRegister(e: FormEvent) {
        e.preventDefault();
        const name = nameRef.current?.value;
        const email = emailRef.current?.value;
        const phone = phoneRef.current?.value;
        const password = passwordRef.current?.value;
        const confirmPassword = confirmPasswordRef.current?.value;

        if (!name || !email || !phone || !password || !confirmPassword) {
            toast.warn("Please validate all the fields");
            return;
        }
        if (!validateEmail(email)) {
            toast.warn("Please enter a valid email ID");
            return;
        }
        if (password !== confirmPassword) {
            toast.warn("Password field are not matching");
            return;
        }

        try {
            const response = await signup({ email, name, password, phone }).unwrap();
            if (response.success) {
                toast.success(response.message);
                navigate(routes.userProfile);
            } else {
                toast.error(response.message);
            }
        } catch (err: any) {
            toast.error(err.data.message as string);
        }
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
