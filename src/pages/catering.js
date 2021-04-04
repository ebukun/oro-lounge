import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import Footer from "@/components/footer/Footer";
import EventCard from "@/components/eventCard/EventCard";
import Poster from "@/components/poster/Poster";
import { useRouter } from "next/router";

const Catering = () => {
    const router = useRouter();
    return (
        <div id="catering-page">
            <Head>
                <title>Catering | Oro lounge</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="bg-catering-img bg-center bg-no-repeat bg-cover ">
                <Navbar />
                <div className="header-wrapper py-10">
                    <h3 className="header-headtext">CATERING</h3>
                    <p className="header-subtext">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                        consequat duis enim velit mollit. Exercitation veniam consequat met.
                    </p>

                    <div className="cta space-x-7 mt-12">
                        <button
                            className="btn btn-primary btn-md uppercase"
                            onClick={() => router.push("event/catering")}
                        >
                            GET CATERING
                        </button>
                    </div>
                </div>
            </div>

            <div className="wrapper">
                <div className="text-center font-barlow text-lg flex flex-col justify-center items-center my-20 px-8 md:px-0 md:w-3/5 mx-auto">
                    <p className="leading-7 mb-12">
                        We’d love to host your next event. ilili is the perfect New York establishment to hold private
                        parties for a wide range of celebrations including birthdays, brunches, corporate and press
                        events, rehearsal dinners and weddings, receptions, and group happy hours.
                    </p>
                    <p className="leading-7 mb-12">
                        Accommodating groups from 5 to 500, ilili offers four private event spaces in addition to our
                        main dining room, each unique and centered around your party’s individual needs. We also offer
                        the option to rent out our entire restaurant. We aim to personalize your affairs with us, taking
                        on special requests to make your event memorable.
                    </p>
                </div>

                <div className="container lg:px-32 mx-auto my-16">
                    <div className="grid grid-cols-6 gap-4 lg:gap-7 grid-rows-2 ">
                        <div className="col-span-6 ">
                            <div className="bg-hook-three bg-no-repeat bg-cover h-96 bg-center"></div>
                        </div>
                        <div class="col-span-3 ">
                            <div className="bg-hook-three bg-no-repeat bg-cover h-96"></div>
                        </div>
                        <div class="col-span-3 ">
                            <div className="bg-hook-three bg-no-repeat bg-cover h-96"></div>
                        </div>
                    </div>
                </div>

                <Poster
                    smallText="FOR YOUR SPECIAL DAY"
                    headingText="EXCEPTIONAL CATERING SERVICES"
                    subText="        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                    duis enim velit mollit. Exercitation veniam consequat met."
                    LinkTwo="GET CATERING"
                    bgImageClass="bg-cta-section"
                    LinkTwoRoute="event/catering"
                />

                <Footer />
            </div>
        </div>
    );
};

export default Catering;
