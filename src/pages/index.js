import Head from "next/head";
import Navbar from "@/components/navbar/Navbar";
import MenuCard from "@/components/menuCard/MenuCard";
import Poster from "@/components/poster/Poster";
import EventCard from "@/components/eventCard/EventCard";
import Testimonial from "@/components/testimonialSlide/Testimonial";
import Footer from '@/components/footer/Footer';

export default function Home() {
    return (
        <div className="" id="home-page">
            <Head>
                <title>Oro lounge</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="bg-hero-pattern header bg-no-repeat bg-contain">
                <Navbar />
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
                                <MenuCard />
                                <MenuCard />
                                <MenuCard />
                                <MenuCard />
                                <MenuCard />
                                <MenuCard />
                                <MenuCard />
                                <MenuCard />
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
                <Poster
                    smallText="FOR YOUR SPECIAL DAY"
                    headingText="EXCEPTIONAL CATERING SERVICES"
                    subText="        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                    duis enim velit mollit. Exercitation veniam consequat met."
                    LinkOne="VIEW MORE"
                    LinkTwo="GET CATERING"
                    bgImageClass="bg-cta-section"
                />
                {/**SECTION 5 */}
                <div className="3xl:container mx-auto px-32 happening-section my-40">
                    <h3 className="text-center heading-text text-blackish mb-8">HAPPENINGS</h3>
                    <div className="grid grid-cols-3 gap-20">
                        <EventCard
                            month="First Tuesday of the month"
                            eventName="Free Drinks Wednesday"
                            time=" All Day"
                            img="bg-hook-one"
                        />
                        <EventCard
                            month="19th March 2021"
                            eventName="Karaoke Night"
                            time=" All Day"
                            img="bg-hook-two"
                        />
                        <EventCard
                            month="Tuesday of the month"
                            eventName="Free Drinks Wednesday"
                            time=" All Day"
                            img="bg-hook-three"
                        />
                    </div>
                    <div className="cta flex mt-9 justify-center ">
                        <button className="btn btn-primary btn-md text-blackish">VIEW MORE</button>
                    </div>
                </div>
                {/**SECTION 6 */}
                <Poster
                    smallText="MAKE USE OF OUR SPACE"
                    headingText="BOOK AN EVENT"
                    subText="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                    duis enim velit mollit. Exercitation veniam consequat met."
                    LinkOne="VIEW MORE"
                    LinkTwo="MAKE A RESERVATION"
                    bgImageClass="bg-booking-section"
                />

                {/**SECTION 7 */}
                <div className="3xl:container gallery-section my-40">
                    <h3 className="text-center heading-text text-blackish mb-20">GALLERY</h3>
                    <div className="grid grid-rows-7 grid-cols-3 gap-6">
                        <div className="row-span-3 bg-tangle-one bg-no-repeat bg-cover"></div>
                        <div className="row-span-2 bg-tangle-two bg-no-repeat bg-cover"></div>
                        <div className="row-span-3 bg-tangle-two bg-no-repeat bg-cover"></div>
                        <div className=" row-start-4 row-end-7 bg-tangle-two bg-no-repeat bg-cover p-12"></div>
                        <div className=" row-start-3 row-end-7 bg-tangle-two bg-no-repeat bg-cover p-12"></div>
                        <div className=" row-start-4 row-end-7 bg-tangle-one bg-no-repeat bg-cover p-12"></div>
                    </div>
                    <div className="cta flex mt-20  justify-center ">
                        <button className="btn btn-primary btn-md text-blackish">VIEW MORE</button>
                    </div>
                </div>
                {/**SECTION 8 */}
                <Testimonial />
                {/**SECTION 9 */}
                <div className="3xl:container contact-section mb-10">
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
                <Footer/>
            </div>
        </div>
    );
}
