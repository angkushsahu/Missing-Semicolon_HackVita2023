import { Link } from "react-router-dom";
import { routes } from "../../routing";
import { toast } from "react-toastify";
import { useDeleteAccountMutation, useLogoutMutation } from "../../store";
import { Loading } from "../../components";

export default function StorageProfile() {
    const [logout, { isLoading }] = useLogoutMutation();
    const [deleteAccount, { isLoading: loading }] = useDeleteAccountMutation();

    async function onLogout() {
        const confirmation = window.confirm("Are you sure you want to logout ?");
        if (!confirmation) return;

        try {
            const response = await logout().unwrap();
            if (response.success) {
                toast.success("Logout successful");
                return;
            }
            toast.error(response.message);
        } catch (err: any) {
            toast.error(err.data.message as string);
        }
    }

    async function onDeleteAccount() {
        const confirmation = window.confirm("Are you sure you want to delete your account ?");
        if (!confirmation) return;

        try {
            const response = await deleteAccount().unwrap();
            if (response.success) {
                toast.success("Logout successful");
                return;
            }
            toast.error(response.message);
        } catch (err: any) {
            toast.error(err.data.message as string);
        }
    }

    if (loading || isLoading) {
        return <Loading />;
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
                <strong className="text-lg">In front of Sbi e-corner, Gar-ali, Jorhat, Assam</strong>
            </div>
            <div>
                <div className="mt-8 mb-6 relative isolate max-w-md w-full mx-auto before:absolute before:inset-0 before:h-[1px] before:-z-10 before:top-1/2 before:-translate-y-1/2 before:bg-gray-400">
                    <h2 className="text-2xl font-semibold mx-auto w-fit bg-bg-col px-3">Important Links</h2>
                </div>
                <div className="flex items-center justify-center flex-col gap-4">
                    <Link to={routes.home}>
                        <button type="button" className="w-[11.25rem]">
                            Update account
                        </button>
                    </Link>
                    <button type="button" className="w-[11.25rem] bg-orange-600 hover:bg-orange-700" onClick={onLogout}>
                        Logout
                    </button>
                    <button type="button" className="w-[11.25rem] bg-red-600 hover:bg-red-700" onClick={onDeleteAccount}>
                        Delete account
                    </button>
                </div>
            </div>
        </section>
    );
}
