import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faInstagram, faPinterestP } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
    return (
        <div className="" id="home-page">
            <Head>
                <title>Oro lounge</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="bg-hero-pattern header bg-no-repeat bg-contain">
                <section className="3xl:container px-20 py-3 navbar flex flex-row justify-between items-center">
                    <nav className="nav">
                        <ul className="navLinks space-x-7 text-whitish ">
                            <li className="inline-block">
                                <Link href="/menu">
                                    <a>MENU</a>
                                </Link>
                            </li>
                            <li className="inline-block">
                                <Link href="/menu">
                                    <a>HAPPENINGS</a>
                                </Link>
                            </li>
                            <li className="inline-block">
                                <Link href="/menu">
                                    <a>CATERING</a>
                                </Link>
                            </li>
                            <li className="inline-block">
                                <Link href="/menu">
                                    <a>PRIVATE EVENTS</a>
                                </Link>
                            </li>
                            <li className="inline-block">
                                <Link href="/menu">
                                    <a>PRIVATE EVENTS</a>
                                </Link>
                            </li>
                            <li className="inline-block">
                                <Link href="/menu">
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
                </section>

                <div className="flex flex-col justify-center items-center content-center h-3/4">
                    <h3 className="header-text text-center text-whitish  ">
                        <p className="inline-block ">BAR </p> <span className="inline-block mx-4">•</span>{" "}
                        <p className="inline-block">RESTAURANT</p> <span className="inline-block mx-4">•</span>
                        <p className="inline-block ">EVENTS</p>
                    </h3>
                    <p className="text-whitish sub-text text-center px-5">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                        consequat duis enim velit mollit. Exercitation veniam consequat met.
                    </p>

                    <div className="cta space-x-7 mt-8">
                        <button className="btn btn-secondary btn-md">BOOK AN EVENT</button>
                        <button className="btn btn-primary btn-md">ORDER ONLINE</button>
                    </div>
                </div>
            </div>
            <div className="mx-4">
                {/**SECTION 2 */}
                <div className="2xl:container mx-auto px-32 about-section mb-24">
                    <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:gap-x-64 ">
                        <div className="col-span-2 left-section">
                            <h4 className="heading-text text-redish">
                                Located in Park Slope, Pacific Tavern is a purveyor of fine American dining from the
                                esteemed Chef Billy Lang.
                            </h4>
                            <p className="my-8 text-blackish">
                                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur
                                duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat
                                incididunt sint deserunt ut voluptate aute id deserunt nisi.
                            </p>
                            <p className="text-blackish">
                                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.
                                Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.
                            </p>
                        </div>
                        <div className="right-section">
                            <div className=" grid gap-y-10 mt-3  ">
                                <div className="">
                                    <h5 className="mb-3">Phone</h5>
                                    <p>(347) 555-1234</p>
                                </div>
                                <div className="">
                                    <h5 className="mb-3">LOCATION</h5>
                                    <p className="">74 5th Avenue at St. Marks Place Brooklyn, NY 11217</p>
                                </div>
                                <div className="">
                                    <h5 className="mb-3">Hours</h5>
                                    <p>
                                        <span className="block">Mon -Thur: 5pm–11pm</span>
                                        <span className="block">Fri - Sat: 12pm –11pm</span>
                                        <span className="block">Sun: 10am – 11pm</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/**SECTION 3 */}
                <div className="3xl:container py-12 px-32 mb-12 menu-section text-whitish relative">
                    <div className="first-image-overly">
                        <img className="" src="/assets/images/spag.png" alt="" />
                    </div>

                    <div className="mx-auto py-20 z-50">
                        <h6 className="font-barlow tracking-wide text-center text-sm mb-2">ENJOY OUR TASTY MEALS</h6>
                        <h4 className="text-center heading-text">OUR MENU</h4>

                        <div className="tab-menu mt-12">
                            <ul className="flex space-x-8 justify-center content-center">
                                <li className="btn btn-primary btn-md text-blackish cursor-pointer">STARTERS</li>
                                <li className="btn btn-secondary btn-md cursor-pointer">MAIN</li>
                                <li className="btn btn-secondary btn-md cursor-pointer">DESSERT</li>
                                <li className="btn btn-secondary btn-md cursor-pointer">COCKTAILS</li>
                                <li className="btn btn-secondary btn-md cursor-pointer">WINE</li>
                                <li className="btn btn-secondary btn-md cursor-pointer">BEER</li>
                            </ul>
                        </div>

                        <div className="menu-details mt-24">
                            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12 ">
                                <div className="menu-card">
                                    <div className="flex space-x-2">
                                        <span className="card-price">Coco Spice</span>
                                        <span className="straight-line flex-grow"></span>
                                        <span className="card-price">$24.00</span>
                                    </div>
                                    <p className="font-barlowThin text-base leading-7 mt-2">
                                        Spice rum, Pineapple, Coconut, Magarita
                                    </p>
                                </div>
                                <div className="menu-card">
                                    <div className="flex space-x-2">
                                        <span className="card-price">Coco Spice</span>
                                        <span className="straight-line flex-grow"></span>
                                        <span className="card-price">$24.00</span>
                                    </div>
                                    <p className="font-barlowThin text-base leading-7 mt-2">
                                        Spice rum, Pineapple, Coconut, Magarita
                                    </p>
                                </div>
                                <div className="menu-card">
                                    <div className="flex space-x-2">
                                        <span className="card-price">Coco Spice</span>
                                        <span className="straight-line flex-grow"></span>
                                        <span className="card-price">$24.00</span>
                                    </div>
                                    <p className="font-barlowThin text-base leading-7 mt-2">
                                        Spice rum, Pineapple, Coconut, Magarita
                                    </p>
                                </div>
                                <div className="menu-card">
                                    <div className="flex space-x-2">
                                        <span className="card-price">Coco Spice</span>
                                        <span className="straight-line flex-grow"></span>
                                        <span className="card-price">$24.00</span>
                                    </div>
                                    <p className="font-barlowThin text-base leading-7 mt-2">
                                        Spice rum, Pineapple, Coconut, Magarita
                                    </p>
                                </div>
                                <div className="menu-card">
                                    <div className="flex space-x-2">
                                        <span className="card-price">Coco Spice</span>
                                        <span className="straight-line flex-grow"></span>
                                        <span className="card-price">$24.00</span>
                                    </div>
                                    <p className="font-barlowThin text-base leading-7 mt-2">
                                        Spice rum, Pineapple, Coconut, Magarita
                                    </p>
                                </div>
                                <div className="menu-card">
                                    <div className="flex space-x-2">
                                        <span className="card-price">Coco Spice</span>
                                        <span className="straight-line flex-grow"></span>
                                        <span className="card-price">$24.00</span>
                                    </div>
                                    <p className="font-barlowThin text-base leading-7 mt-2">
                                        Spice rum, Pineapple, Coconut, Magarita
                                    </p>
                                </div>
                                <div className="menu-card">
                                    <div className="flex space-x-2">
                                        <span className="card-price">Coco Spice</span>
                                        <span className="straight-line flex-grow"></span>
                                        <span className="card-price">$24.00</span>
                                    </div>
                                    <p className="font-barlowThin text-base leading-7 mt-2">
                                        Spice rum, Pineapple, Coconut, Magarita
                                    </p>
                                </div>
                                <div className="menu-card">
                                    <div className="flex space-x-2">
                                        <span className="card-price">Coco Spice</span>
                                        <span className="straight-line flex-grow"></span>
                                        <span className="card-price">$24.00</span>
                                    </div>
                                    <p className="font-barlowThin text-base leading-7 mt-2">
                                        Spice rum, Pineapple, Coconut, Magarita
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="cta space-x-7 mt-24 flex justify-center ">
                            <button className="btn btn-secondary btn-md ">VIEW FULL MENU</button>
                            <button className="btn btn-primary btn-md text-blackish">ORDER ONLINE</button>
                        </div>
                    </div>
                    <div className="second-image-overly">
                        <img className="" src="/assets/images/juice.png" alt="" />
                    </div>
                </div>
                {/**SECTION 4 */}
                <div className="3xl:container cta-section bg-cta-section bg-no-repeat bg-cover mb-12">
                    <div className="flex flex-col p-32">
                        <h6 className="font-barlow text-center leading-7  text-whitish">FOR YOUR SPECIAL DAY</h6>
                        <h3 className="text-center heading-text text-whitish">EXCEPTIONAL CATERING SERVICES</h3>

                        <p className="font-barlow text-center sub-text text-whitish mt-4 mb-4 mx-auto">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                            consequat duis enim velit mollit. Exercitation veniam consequat met.
                        </p>

                        <div className="cta space-x-10 flex mt-8 justify-center ">
                            <button className="btn btn-secondary btn-md ">VIEW MORE</button>
                            <button className="btn btn-primary btn-md text-blackish">GET CATERING</button>
                        </div>
                    </div>
                </div>
                {/**SECTION 5 */}
                <div className="2xl:container mx-auto px-32 happening-section my-40">
                    <h3 className="text-center heading-text text-blackish mb-8">HAPPENINGS</h3>
                    <div className="grid grid-cols-3 gap-20">
                        <div className="bg-hook-one bg-no-repeat  relative bg-contain details-body">
                            <div className="absolute bottom-0 details">
                                <p className="text-secondary font-barlowThin mb-3">Free Drinks Wednesday</p>
                                <p className="text-whitish font-barlowThin mb-2">
                                    <img src="/assets/icons/date.png" className="inline-block mr-2" alt="date" /> First
                                    Tuesday of the month
                                </p>
                                <p className="text-whitish font-barlowThin">
                                    <img src="/assets/icons/time.png" className="inline-block mr-2" alt="time" />
                                    All Day
                                </p>
                            </div>
                        </div>
                        <div className="bg-hook-two bg-no-repeat  relative bg-contain details-body">
                            <div className="absolute bottom-0 details">
                                <p className="text-secondary font-barlowThin mb-3">Karaoke Night</p>
                                <p className="text-whitish font-barlowThin mb-2">
                                    <img src="/assets/icons/date.png" className="inline-block mr-2" alt="date" />
                                    19th March 2021
                                </p>
                                <p className="text-whitish font-barlowThin">
                                    <img src="/assets/icons/time.png" className="inline-block mr-2" alt="time" />
                                    All Day
                                </p>
                            </div>
                        </div>
                        <div className="bg-hook-three bg-no-repeat  relative bg-contain details-body">
                            <div className="absolute bottom-0 details">
                                <p className="text-secondary font-barlowThin mb-3">Free Drinks Wednesday</p>
                                <p className="text-whitish font-barlowThin mb-2">
                                    <img src="/assets/icons/date.png" className="inline-block mr-2" alt="date" /> First
                                    Tuesday of the month
                                </p>
                                <p className="text-whitish font-barlowThin">
                                    <img src="/assets/icons/time.png" className="inline-block mr-2" alt="time" />
                                    All Day
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="cta flex mt-9 justify-center ">
                        <button className="btn btn-primary btn-md text-blackish">VIEW MORE</button>
                    </div>
                </div>
                {/**SECTION 6 */}
                <div className="3xl:container cta-section bg-booking-section bg-no-repeat bg-cover mb-12">
                    <div className="flex flex-col  p-32">
                        <h6 className="font-barlow text-center leading-7  text-whitish">MAKE USE OF OUR SPACE</h6>
                        <h3 className="text-center heading-text text-whitish">BOOK AN EVENT</h3>

                        <p className="font-barlow text-center sub-text text-whitish mt-4 mb-4 mx-auto">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                            consequat duis enim velit mollit. Exercitation veniam consequat met.
                        </p>

                        <div className="cta space-x-10 flex mt-8 justify-center ">
                            <button className="btn btn-secondary btn-md ">VIEW MORE</button>
                            <button className="btn btn-primary btn-md text-blackish">MAKE A RESERVATION</button>
                        </div>
                    </div>
                </div>
                {/**SECTION 7 */}
                <div className="container gallery-section my-40">
                    <h3 className="text-center heading-text text-blackish mb-20">GALLERY</h3>
                    <div className="grid grid-rows-7 grid-cols-3 gap-6">
                        <div className="row-span-3 bg-tangle-one bg-no-repeat bg-cover" >1</div>
                        <div className="row-span-2 bg-tangle-two bg-no-repeat bg-cover">2</div>
                        <div className="row-span-3 bg-tangle-two bg-no-repeat bg-cover">3</div>
                        <div className=" row-start-4 row-end-7 bg-tangle-two bg-no-repeat bg-cover p-12">4</div>
                        <div className=" row-start-3 row-end-7 bg-tangle-two bg-no-repeat bg-cover p-12">5</div>
                        <div className=" row-start-4 row-end-7 bg-tangle-one bg-no-repeat bg-cover p-12">6</div>
                    </div>
                    <div className="cta flex mt-20  justify-center ">
                        <button className="btn btn-primary btn-md text-blackish">VIEW MORE</button>
                    </div>
                </div>
                {/**SECTION 8 */}
                <div className="container testimonial-section mb-10 bg-testimonials bg-no-repeat bg-cover">
                    <div className=" flex flex-col justify-center py-28 px-32">
                        <h3 className="text-whitish text-center">TESTIMONIALS</h3>
                        <div className="text-center carousel mt-8">
                            <div className="flex justify-center ">
                                <img src="/assets/images/person.png" alt="" />
                            </div>
                            <h6 className="text-secondary mt-4">Logan MacPherson</h6>
                            <p className="text-whitish  mt-4 mb-4 mx-auto">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                                consequat duis enim velit mollit. Exercitation veniam consequat met. Amet minim mollit
                                non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
                                enim velit mollit. Exercitation veniam consequat met.
                            </p>
                        </div>
                    </div>
                </div>
                {/**SECTION 9 */}
                <div className="container contact-section mb-10">
                    <div className="grid grid-cols-2">
                        <div className="address text-center py-28">
                            <p className=" text-sm font-barlow text-center leading-7  text-whitish">
                                WHAT OUR CUSTOMERS SAY ABOUT US
                            </p>
                            <h3 className="text-secondary">CONTACT US</h3>

                            <div className="address_details my-12 text-whitish font-barlow">
                                <p>74 5th Avenue at St. Marks Place Brooklyn, NY 11217</p>
                                <p>(347) 555-1234, (347) 555-1234 </p>
                                <p>bookings@orolounge.com, bookings@orolounge.com </p>
                            </div>

                            <div className="time font-barlow">
                                <p className="text-secondary mb-2">Opening Hours</p>
                                <ul className="text-whitish">
                                    <li>Mon -Thur: 5pm–11pm</li>
                                    <li> Fri - Sat: 12pm –11pm</li>
                                    <li> Sun: 10am – 11pm</li>
                                </ul>
                            </div>
                        </div>
                        <div id="map" className="bg-map bg-no-repeat bg-cover"></div>
                    </div>
                </div>
                {/**Footer */}
                <footer>
                    <div className="footer-section 3xl:container mx-auto px-32">
                        <div className="pt-12 pb-6 px-28">
                            <p className="font-barlowThin text-center sub-text text-whitish mt-4 mb-4 mx-auto">
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
                    <div className="terms flex py-8 justify-between mx-auto px-32">
                        <p className="text-whitish font-barlow">© 2021 Oro Bar and Lounge</p>
                        <p className="text-whitish font-barlow">TERMS AND CONDITIONS</p>
                    </div>
                </footer>
            </div>
        </div>
    );
}
