import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import Footer from "@/components/footer/Footer";
import EventCard from "@/components/eventCard/EventCard";

const Happening = () => {
    return (
        <div id="happening">
            <Head>
                <title>Happening | Oro lounge</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-happening-img bg-no-repeat bg-cover ">
                <Navbar />
                <div className="flex flex-col justify-center items-center  py-24">
                    <h3 className="text-center text-whitish font-bold font-bebasBold text-8xl leading-extra-big mb-9 uppercase">
                        HAPPENINGS
                    </h3>
                    <p className="text-whitish font-barlow text-center text-xl leading-7 px-5 w-3/5 -mt-7">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                        consequat duis enim velit mollit. Exercitation veniam consequat met.
                    </p>
                </div>
            </div>

            <div className="mx-4 my-5">
                <div className="my-20">
                    <div className="flex flex-col justify-center items-center my-28">
                        <h3 className="text-4xl leading-relaxed">Lorem Ipsum Dolot Sit Amet</h3>
                        <p className="text-lg font-barlow w-3/5 text-center">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                            consequat duis enim velit mollit. Exercitation veniam consequat met.
                        </p>
                    </div>
                    <div className=" container px-32 mx-auto">
                        <div className="grid grid-cols-3  gap-20">
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
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Happening;
