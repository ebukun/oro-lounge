import { faFacebookF, faTwitter, faInstagram, faPinterestP } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import TextBoxIcon from "../textBoxIcon/TextBoxIcon";
const Footer = () => {
    return (
        <footer>
            <div className="footer-section 3xl:container mx-auto px-12 lg:px-32">
                <div className="pt-12 pb-6 lg:px-28">
                    <div className="flex flex-col justify-center items-center">
                        <Link href="/">
                            <a>
                                <img src="/assets/images/Logo.png" alt="oro_logo" />
                            </a>
                        </Link>
                        <p className="font-barlow text-center text-lg leading-7 text-whitish mt-4 ">
                            2875 Brookdale Drive Brooklyn Park, MN 55444 <br /> + (176) 34322384
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 lg:gap-x-96 my-20 place-content-center">
                        <div className="socials mb-6 md:mb-0">
                            <h5 className="text-secondary mb-4 text-center lg:text-left">FOLLOW ALONG</h5>
                            <ul className="flex justify-center lg:justify-start space-x-7">
                                <li>
                                    <FontAwesomeIcon icon={faTwitter} className="text-whitish w-6" />
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faInstagram} className="text-whitish w-6" />
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faFacebookF} className="text-whitish w-4" />
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faPinterestP} className="text-whitish w-5" />
                                </li>
                            </ul>
                        </div>
                        <div className="newsletter">
                            <h5 className="text-secondary text-center ml-11 mb-4">NEWSLETTER</h5>
                            {/* <TextBoxIcon placeholder="Your email address" /> */}
                            <form className="flex justify-end space-x-5 form">
                                <input type="text" placeholder="Your email address" className="px-4" />
                                <button className="btn btn-primary btn-sm text-blackish">SEND</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="terms flex flex-col md:flex-row text-center py-8 justify-between mx-auto md:px-12 lg:px-32 bg-blackish">
                <p className="text-whitish font-barlow">© 2021 Oro Bar and Lounge</p>
                <p className="text-whitish font-barlow">TERMS AND CONDITIONS</p>
            </div>
        </footer>
    );
};

export default Footer;
