import { faFacebookF, faTwitter, faInstagram, faPinterestP } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
    return (
        <footer>
            <div className="footer-section 3xl:container mx-auto px-32">
                <div className="pt-12 pb-6 px-28">
                    <p className="font-barlow text-center sub-text w-4/6 text-whitish mt-4 mx-auto ">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                        consequat duis enim velit mollit. Exercitation veniam consequat met.
                    </p>
                    <div className="grid grid-cols-2 gap-x-96 my-20">
                        <div className="socials">
                            <h5 className="text-secondary mb-4">FOLLOW ALONG</h5>
                            <ul className="flex space-x-7">
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
                            <form className="flex justify-end space-x-5 form">
                                <input type="text" placeholder="Your email address" className="px-4" />
                                <button className="btn btn-primary btn-sm text-blackish">SEND</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="terms flex py-8 justify-between mx-auto px-32 bg-blackish">
                <p className="text-whitish font-barlow">© 2021 Oro Bar and Lounge</p>
                <p className="text-whitish font-barlow">TERMS AND CONDITIONS</p>
            </div>
        </footer>
    );
};

export default Footer;
