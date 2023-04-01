import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { BiShow, BiHide } from "react-icons/bi";
import { routes } from "../../routing";
import { stateValues } from "../../utils";

export default function SignupAsTransport() {
    type zoneType = "" | "nation" | "state";
    const [zone, setZone] = useState<zoneType>("");
    const [state, setState] = useState("");
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
                <h1 className="text-2xl xs:text-3xl font-bold mb-6 text-primary text-center">Signup - Transport</h1>
                <form onSubmit={onRegister}>
                    <div className="input-container">
                        <label htmlFor="name">Enter company name</label>
                        <input type="text" name="name" id="name" placeholder="e.g., kheti bazaar" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="email">Enter work email</label>
                        <input type="email" name="email" id="email" placeholder="e.g., khetibazaar@gmail.com" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="phone">Enter work contact number</label>
                        <input type="text" name="phone" id="phone" placeholder="e.g., 9087564312" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="operation">Enter operation zone</label>
                        <select
                            name="operation"
                            id="operation"
                            value={zone}
                            onChange={(e) => setZone(e.target.value as zoneType)}
                            className={zone === "" ? "text-gray-400" : ""}
                        >
                            <option value="" disabled>
                                -- Select --
                            </option>
                            <option value="nation">Entire nation</option>
                            <option value="state">Entire state</option>
                        </select>
                    </div>
                    {zone === "nation" ? (
                        <div className="input-container">
                            <label htmlFor="state">Enter operation state</label>
                            <select
                                name="state"
                                id="state"
                                value={state}
                                onChange={(e) => setState(e.target.value as zoneType)}
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
                    ) : null}
                    <div className="input-container">
                        <label htmlFor="password">Enter password</label>
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
