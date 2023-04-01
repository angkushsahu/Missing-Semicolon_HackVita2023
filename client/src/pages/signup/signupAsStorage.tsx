import { FormEvent, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BiShow, BiHide } from "react-icons/bi";
import { routes } from "../../routing";
import { stateValues, validateEmail } from "../../utils";
import { ZoneType } from "../../types";
import { useStorageSignupMutation } from "../../store";
import { Loading } from "../../components";

export default function SignupAsStorage() {
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const localityRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const [state, setState] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [signup, { isLoading }] = useStorageSignupMutation();
    async function onRegister(e: FormEvent) {
        e.preventDefault();
        const name = nameRef.current?.value;
        const email = emailRef.current?.value;
        const phone = phoneRef.current?.value;
        const locality = localityRef.current?.value;
        const password = passwordRef.current?.value;
        const confirmPassword = confirmPasswordRef.current?.value;

        if (!name || !email || !phone || !locality || !password || !confirmPassword) {
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
            const response = await signup({ email, locality, name, password, phone, state }).unwrap();
            if (response.success) {
                toast.success(response.message);
                navigate(routes.storageProfile);
            } else {
                toast.error(response.message);
            }
        } catch (err: any) {
            toast.error(err.data.message as string);
        }
    }

    const togglePassword = () => setShowPassword((prev) => !prev);
    const toggleConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <section className="min-h-screen flex items-center justify-center p-3">
            <div className="bg-white shadow-lg rounded-lg max-w-[32rem] w-full p-3">
                <h1 className="text-2xl xs:text-3xl font-bold mb-6 text-primary text-center">Signup - Storage</h1>
                <form onSubmit={onRegister}>
                    <div className="input-container">
                        <label htmlFor="name">Enter user name</label>
                        <input type="text" ref={nameRef} name="name" id="name" placeholder="e.g., john doe" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="email">Enter work email</label>
                        <input type="email" ref={emailRef} name="email" id="email" placeholder="e.g., johndoe@gmail.com" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="phone">Enter work contact number</label>
                        <input type="text" ref={phoneRef} name="phone" id="phone" placeholder="e.g., 9087564312" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="state">Enter operation state</label>
                        <select
                            name="state"
                            id="state"
                            value={state}
                            onChange={(e) => setState(e.target.value as ZoneType)}
                            className={state === "" ? "text-gray-400" : ""}
                        >
                            <option value="">-- Select --</option>
                            {stateValues.map((state) => (
                                <option key={state.key} value={state.key}>
                                    {state.value}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="input-container">
                        <label htmlFor="locality">Enter locality</label>
                        <input type="text" ref={localityRef} name="locality" id="locality" placeholder="e.g., ABC lane, xyz-city" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">Enter password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            ref={passwordRef}
                            name="password"
                            id="password"
                            placeholder="Enter a strong password"
                        />
                        {showPassword ? <BiHide size="20" onClick={togglePassword} /> : <BiShow size="20" onClick={togglePassword} />}
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">Confirm Password</label>
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            ref={confirmPasswordRef}
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
