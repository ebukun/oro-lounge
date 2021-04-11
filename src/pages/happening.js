import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import Footer from "@/components/footer/Footer";
import EventCard from "@/components/eventCard/EventCard";
import axios from "axios";
import { format } from "date-fns";

const Happening = ({ events }) => {
    return (
        <div id="happening">
            <Head>
                <title>Happening | Oro lounge</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-happening-img bg-center bg-no-repeat bg-cover ">
                <Navbar />
                <div className="header-wrapper py-20">
                    <h3 className="header-headtext">HAPPENINGS</h3>
                    <p className="header-subtext">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                        consequat duis enim velit mollit. Exercitation veniam consequat met.
                    </p>
                </div>
            </div>

            <div className="wrapper">
                <div className="my-20">
                    {events && (
                        <div className="flex flex-col justify-center items-center my-28">
                            <h3 className="text-4xl leading-relaxed">Lorem Ipsum Dolot Sit Amet</h3>
                            <p className="text-lg font-barlow px-4 sm:px-0 w-3/3 md:w-3/5 text-center">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                                consequat duis enim velit mollit. Exercitation veniam consequat met.
                            </p>
                        </div>
                    )}
                    <div className="container mx-auto px-4 md:px-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-10 gap-y-10 p-5 sm:p-0">
                            {events &&
                                events.map((event) => (
                                    <EventCard
                                        month={format(new Date(event.start_date), "do LLLL yyy ")}
                                        eventName={event.name}
                                        time={format(new Date(event.start_date), "hh:mmaaa")}
                                        img="bg-hook-one"
                                    />
                                ))}
                        </div>
                        {!events && (
                            <div className="flex flex-col justify-center items-center mt-20  mb-36 ">
                                <h4 className="text-4xl text-center">
                                    We are updating our events. Please stay tuned...
                                </h4>
                            </div>
                        )}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Happening;

export async function getServerSideProps(context) {
    try {
        const event_response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/events`);

        return {
            props: {
                events: event_response.data.data.events.data
            }
        };
    } catch (error) {
        return {
            props: { events: null }
        };
    }
}
