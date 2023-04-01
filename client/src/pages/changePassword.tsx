import { FormEvent, useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";

export default function ChangePassword() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    async function onChangePassword(e: FormEvent) {
        e.preventDefault();
    }
    const togglePassword = () => setShowPassword((prev) => !prev);
    const toggleConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

    return (
        <section className="min-h-screen flex items-center justify-center p-3">
            <div className="bg-white shadow-lg rounded-lg max-w-[32rem] w-full p-3">
                <h1 className="text-2xl xs:text-3xl font-bold mb-6 text-primary text-center">Change Password</h1>
                <form onSubmit={onChangePassword}>
                    <div className="input-container">
                        <label htmlFor="password">change your password</label>
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
                    <button type="submit" className="w-full text-lg mt-6" title="change password">
                        Change Password
                    </button>
                </form>
            </div>
        </section>
    );
}
