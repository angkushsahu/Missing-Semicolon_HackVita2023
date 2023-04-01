import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import { routes } from "../routing";

export default function Header() {
    const [toggleNav, setToggleNav] = useState(false);

    const navigationLinks = [
        { title: "Login", link: routes.login },
        { title: "Signup", link: routes.signupCriteria },
        // { title: "Search", link: routes.productsSearch },
        // { title: "Profile", link: routes.profile },
        // start selling will be a link button
    ];
    return (
        <>
            <header className="px-3 py-4 shadow-xl">
                <div className="flex justify-between items-center max-w-6xl mx-auto">
                    <Link to={routes.home} title="Go to Khetibazaar">
                        <span className="font-bold text-xl">KhetiBazaar</span>
                    </Link>
                    <nav className="hidden sm:flex justify-center items-center gap-4">
                        {navigationLinks.map((nav, idx) => (
                            <Link key={idx} to={nav.link} title={`Go to ${nav.title}`} className="pr-4">
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
