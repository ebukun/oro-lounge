import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useWindowSize } from "react-use";

const Navbar = ({ bgBlack }) => {
    const router = useRouter();

    const { width } = useWindowSize();

    const hamburgerHandler = () => {
        let burger = document.getElementById("nav-toggle");
        let nav = document.querySelector(".nav");
        burger?.classList.toggle("show-x");
        nav?.classList.toggle("show");
    };

    const links = [
        { name: "menu", route: "/menu" },
        { name: "happenings", route: "/happening" },
        { name: "catering", route: "/catering" },
        { name: "private events", route: "/event" },
        { name: "gallery", route: "/" }
    ];

    useEffect(() => {
        let nav = document.querySelector(".nav");
        let burger = document.getElementById("nav-toggle");
        document.addEventListener("scroll", (e) => {
            if (nav.classList.contains("show")) {
                nav.classList.remove("show");
                burger?.classList.toggle("show-x");
            }
        });
    });

    return (
        <header
            className={`3xl:container px-8 md:px-20 pt-3 py-3 navbar flex flex-row justify-between items-center ${
                bgBlack && "nav-color"
            }`}
        >
            <nav className="nav p-4 order-last lg:order-first">
                <ul className="flex flex-col items-center md:flex-row navLinks mb-3 md:mb-0 md:space-x-7 text-whitish ">
                    {links.map((link) => (
                        <li className="inline-block nav-link mb-1 uppercase text-lg" key={Math.random() * 1000}>
                            <Link href={link.route}>
                                <a>{link.name}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
                {width < 768 && (
                    <div className="cta flex flew-row justify-center space-x-2 md:space-x-5">
                        <button className="btn btn-secondary btn-sm" onClick={() => router.push("/event/bookings")}>
                            BOOK AN EVENT
                        </button>
                        <button className="btn btn-primary btn-sm" onClick={() => router.push("/order")}>
                            ORDER ONLINE
                        </button>
                    </div>
                )}
            </nav>
            <div className="logo flex-grow-0 mr-24">
                <Link href="/">
                    <a>
                        <img src="/assets/images/Logo.png" alt="oro_logo" />
                    </a>
                </Link>
            </div>

            <div id="nav-toggle" role="button" className="nav-toggle bg-brownish" onClick={hamburgerHandler}>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            {width > 999 && (
                <div className="cta flex flew-row space-x-1 md:space-x-5">
                    <button className="btn btn-secondary btn-sm" onClick={() => router.push("/event/bookings")}>
                        BOOK AN EVENT
                    </button>
                    <button className="btn btn-primary btn-sm" onClick={() => router.push("/order")}>
                        ORDER ONLINE
                    </button>
                </div>
            )}
        </header>
    );
};

export default Navbar;
