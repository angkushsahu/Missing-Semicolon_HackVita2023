import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import { routes } from "../routing";
import { useAppSelector } from "../store";

export default function Header() {
    const [toggleNav, setToggleNav] = useState(false);
    const { auth, user } = useAppSelector((state) => state.authSlice);

    const authLinks = [
        {
            title: "Profile",
            link:
                user?.type === "user"
                    ? routes.userProfile
                    : user?.type === "transport"
                    ? routes.transportProfile
                    : user?.type === "storage"
                    ? routes.storageProfile
                    : "",
        },
        { title: "Products", link: routes.products },
        { title: "Transport", link: routes.transport },
        { title: "Storage", link: routes.storage },
    ];

    const navigationLinks = [
        { title: "Signup", link: routes.signupCriteria },
        { title: "Login", link: routes.login },
    ];

    function getNavigationLinks() {
        return auth && user ? authLinks : navigationLinks;
    }

    return (
        <>
            <header className="px-3 py-4 shadow-xl">
                <div className="flex justify-between items-center max-w-6xl mx-auto">
                    <Link to={routes.home} title="Go to Khetibazaar">
                        <span className="font-bold text-xl">KhetiBazaar</span>
                    </Link>
                    <nav className="hidden sm:flex justify-center items-center gap-8">
                        {getNavigationLinks().map((nav, idx) => (
                            <Link key={idx} to={nav.link} title={`Go to ${nav.title}`}>
                                {nav.title}
                            </Link>
                        ))}
                    </nav>
                    <RxHamburgerMenu size="20" className="block sm:hidden cursor-pointer" onClick={() => setToggleNav(true)} />
                </div>
            </header>
            <aside
                className={`block sm:hidden bg-white shadow-2xl p-4 fixed inset-0 left-auto max-w-[18rem] w-full z-10 transition-all duration-300 origin-right scale-x-0 opacity-0 ${
                    toggleNav ? "scale-x-100 opacity-100" : ""
                }`}
            >
                <GrClose size="20" className="ml-auto cursor-pointer mb-4" title="Close navigation" onClick={() => setToggleNav(false)} />
                <nav>
                    {navigationLinks.map((nav, idx) => (
                        <Link key={idx} to={nav.link} title={`Go to ${nav.title}`} className="block py-2 border-t-2 border-gray-200 last:border-b-2">
                            <div>{nav.title}</div>
                        </Link>
                    ))}
                </nav>
            </aside>
            <Outlet />
        </>
    );
}
