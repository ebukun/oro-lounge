import MenuCard from "@/components/menuCard/MenuCard";
import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import Testimonial from "@/components/testimonialSlide/Testimonial";
import Footer from "@/components/footer/Footer";

const Menu = () => {
    return (
        <div className="" id="menu-page">
            <Head>
                <title>Menu | Oro lounge</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="bg-menu-img  bg-no-repeat bg-cover ">
                <Navbar />
                <div className="flex flex-col justify-center items-center py-10">
                    <h3 className="text-center text-whitish font-bold font-bebasBold text-8xl leading-extra-big my-9">
                        MENU
                    </h3>
                    <p className="text-whitish font-barlow text-center text-xl leading-7 px-5 w-3/5 -mt-7">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                        consequat duis enim velit mollit. Exercitation veniam consequat met.
                    </p>

                    <div className="cta space-x-7 mt-12">
                        <button className="btn btn-primary btn-md">ORDER ONLINE</button>
                    </div>
                </div>
            </div>

            <div className="mx-4 my-5">
                <div className="3xl:container py-12 px-32 mb-12 menu-section text-whitish relative bg-brownish">
                    <div className="tab-menu mt-12">
                        <ul className="flex space-x-12 justify-center content-center">
                            <li className="btn btn-primary btn-md text-blackish cursor-pointer">STARTERS</li>
                            <li className="btn btn-secondary btn-md cursor-pointer">MAIN</li>
                            <li className="btn btn-secondary btn-md cursor-pointer">DESSERT</li>
                            <li className="btn btn-secondary btn-md cursor-pointer">COCKTAILS</li>
                            <li className="btn btn-secondary btn-md cursor-pointer">WINE</li>
                            <li className="btn btn-secondary btn-md cursor-pointer">BEER</li>
                        </ul>
                    </div>

                    <div className="my-24">
                        <div className="flex flex-col justify-center items-center my-14">
                            <img src="/assets/icons/cocktail.svg" alt="" />
                            <h3 className="mt-4 text-nav font-bebasBold leading-extra-bigos">COCKTAILS</h3>
                        </div>
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

                    <div className="my-24">
                        <div className="flex flex-col justify-center items-center my-14">
                            <img src="/assets/icons/wine.svg" alt="" />
                            <h3 className="mt-4 text-nav font-bebasBold leading-extra-bigos">WINE</h3>
                        </div>
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

                    <div className="my-24">
                        <div className="flex flex-col justify-center items-center my-14">
                            <img src="/assets/icons/beer-mug.svg" alt="" />
                            <h3 className="mt-4 text-nav font-bebasBold leading-extra-bigos uppercase ">beer</h3>
                        </div>
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
                </div>
                <Testimonial />

                <div className="3xl:container py-12 px-32 mb-12 menu-section text-whitish relative bg-brownish">
                    <div className="my-20">
                        <div className="flex flex-col justify-center items-center my-14">
                            <img src="/assets/icons/salad.svg" alt="" />
                            <h3 className="mt-4 text-nav font-bebasBold leading-extra-bigos uppercase">STARTERS</h3>
                        </div>
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

                    <div className="my-24">
                        <div className="flex flex-col justify-center items-center my-14">
                            <img src="/assets/icons/steak.svg" alt="" />
                            <h3 className="mt-4 text-nav font-bebasBold leading-extra-bigos uppercase ">main</h3>
                        </div>
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

                    <div className="my-24">
                        <div className="flex flex-col justify-center items-center my-14">
                            <img src="/assets/icons/desert.svg" alt="" />
                            <h3 className="mt-4 text-nav font-bebasBold leading-extra-bigos uppercase ">dessert</h3>
                        </div>
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
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Menu;
