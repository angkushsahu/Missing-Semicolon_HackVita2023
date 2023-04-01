import { Link } from "react-router-dom";
import { IoMdBus } from "react-icons/io";
import { BsBuildings } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { routes } from "../../routing";

export default function SignupCriteria() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center px-3">
            <h1 className="mb-8 text-3xl font-bold text-primary">Signup as</h1>
            <div className="flex flex-wrap gap-6 items-center justify-center">
                <Link to={routes.signupAsUser} className="max-w-lg w-full">
                    <article className="rounded-md bg-white transition-colors hover:bg-primary px-2 shadow-md py-6 flex flex-col gap-3 items-center justify-center group">
                        <FaRegUser size="50" className="text-primary group-hover:text-white" />
                        <p className="group-hover:text-white font-semibold">User</p>
                    </article>
                </Link>
                <Link to={routes.signupAsStorage} className="max-w-lg w-full">
                    <article className="rounded-md bg-white transition-colors hover:bg-primary px-2 shadow-md py-6 flex flex-col gap-3 items-center justify-center group">
                        <BsBuildings size="50" className="text-primary group-hover:text-white" />
                        <p className="group-hover:text-white font-semibold">Storage Service</p>
                    </article>
                </Link>
                <Link to={routes.signupAsTransport} className="max-w-lg w-full">
                    <article className="rounded-md bg-white transition-colors hover:bg-primary px-2 shadow-md py-6 flex flex-col gap-3 items-center justify-center group">
                        <IoMdBus size="50" className="text-primary group-hover:text-white" />
                        <p className="group-hover:text-white font-semibold">Transporation Service</p>
                    </article>
                </Link>
            </div>
        </section>
    );
}
