import Link from "next/link";

const Navbar = () => {
    return (
        <header className="3xl:container px-20 py-3 navbar flex flex-row justify-between items-center">
            <nav className="nav">
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
                        <Link href="/">
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
                <img src="/assets/images/Logo.png" alt="oro_logo" />
            </div>
            <div className="cta space-x-5">
                <button className="btn btn-secondary btn-sm">BOOK AN EVENT</button>
                <button className="btn btn-primary btn-sm">ORDER ONLINE</button>
            </div>
        </header>
    );
};

export default Navbar;
