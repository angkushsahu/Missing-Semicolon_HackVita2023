import { Link } from "react-router-dom";
import { routes } from "../../routing";

export default function UserProfile() {
    async function onLogout() {
        const confirmation = window.confirm("Are you sure you want to logout ?");
        if (!confirmation) return;
    }

    async function onDeleteAccount() {
        const confirmation = window.confirm("Are you sure you want to delete your account ?");
        if (!confirmation) return;
    }

    return (
        <section className="max-w-6xl mx-auto px-3 pt-10 pb-10">
            <div className="text-center">
                <div className="mb-4 relative isolate max-w-md w-full mx-auto before:absolute before:inset-0 before:h-[1px] before:-z-10 before:top-1/2 before:-translate-y-1/2 before:bg-gray-400">
                    <h2 className="text-2xl font-semibold mx-auto w-fit bg-bg-col px-3">Profile details</h2>
                </div>
                <p>Angkush Sahu</p>
                <p>angkushsahu2502@gmail.com</p>
                <p>8876690053</p>
            </div>
            <div>
                <div className="mt-8 mb-6 relative isolate max-w-md w-full mx-auto before:absolute before:inset-0 before:h-[1px] before:-z-10 before:top-1/2 before:-translate-y-1/2 before:bg-gray-400">
                    <h2 className="text-2xl font-semibold mx-auto w-fit bg-bg-col px-3">Important Links</h2>
                </div>
                <div className="flex items-center justify-center flex-col gap-4">
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link to={routes.myProducts}>
                            <button type="button" className="w-[11.25rem]">
                                See your products
                            </button>
                        </Link>
                        <button type="button" className="w-[11.25rem]">
                            Update account
                        </button>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <button type="button" className="w-[11.25rem] bg-orange-600 hover:bg-orange-700" onClick={onLogout}>
                            Logout
                        </button>
                        <button type="button" className="w-[11.25rem] bg-red-600 hover:bg-red-700" onClick={onDeleteAccount}>
                            Delete account
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
