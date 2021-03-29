import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = ({ bgBlack }) => {
    const router = useRouter();
    return (
        <header className={`3xl:container px-10 md:px-20 py-3 navbar flex flex-row justify-between items-center ${bgBlack && "nav-color"}`}>
            <nav className="nav hidden md:block">
                <ul className="navLinks space-x-7 text-whitish ">
                    <li className="inline-block">
                        <Link href="/menu">
                            <a>MENU</a>
                        </Link>
                    </li>
                    <li className="inline-block">
                        <Link href="/happening">
                            <a>HAPPENINGS</a>
                        </Link>
                    </li>
                    <li className="inline-block">
                        <Link href="/catering">
                            <a>CATERING</a>
                        </Link>
                    </li>
                    <li className="inline-block">
                        <Link href="/event">
                            <a>PRIVATE EVENTS</a>
                        </Link>
                    </li>

                    <li className="inline-block">
                        <Link href="/">
                            <a>GALLERY</a>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="logo flex-grow-0 mr-24">
                <Link href="/">
                    <a>
                        <img src="/assets/images/Logo.png" alt="oro_logo" />
                    </a>
                </Link>
            </div>
            <div className="cta flex flew-row space-x-1 md:space-x-5">
                <button className="btn btn-secondary btn-sm" onClick={() => router.push("/event/bookings")}>
                    BOOK AN EVENT
                </button>
                <button className="btn btn-primary btn-sm" onClick={() => router.push("/order")}>ORDER ONLINE</button>
            </div>
        </header>
    );
};

export default Navbar;
