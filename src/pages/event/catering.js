import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import Footer from "@/components/footer/Footer";
import Textbox from "@/components/textBox/Textbox";

const Catering = () => {
    return (
        <div className="bookings-page">
            <Head>
                <title>Catering Service | Oro lounge</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar bgBlack />

            <div className="wrapper">
                <div className="mt-24 mb-20 px-12 md:px-28">
                    <div className="container mx-auto">
                        <h3 className="text-redish form-header">Get Catering Services</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 mt-8 mb-10">
                            <div className="">
                                <p className="font-barlow text-lg w-full md:w-3/4">
                                    Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur
                                    duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor
                                    cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.
                                </p>
                            </div>
                            <div className="">
                                <form>
                                    <div className="">
                                        <p className="block font-barlow text-blackish text-lg">Name</p>
                                        <div className="grid grid-cols-2 gap-4">
                                            <Textbox subLabel="Firstname" name="firstname" />
                                            <Textbox subLabel="Lastname" name="lastname" />
                                        </div>
                                    </div>
                                    <Textbox name="phone" label="Phone Number" boxClass="my-5" />
                                    <Textbox name="email" type="email" label="Email Address" boxClass="my-5" />
                                    <Textbox name="no" type="number" label="Number of Guests*" boxClass="my-5" />
                                    <div className="textarea-box ">
                                        <label
                                            htmlFor="comments"
                                            className="block font-barlow text-blackish text-lg mb-3"
                                        >
                                            Comment
                                        </label>
                                        <textarea
                                            name="comments"
                                            cols="30"
                                            rows="5"
                                            className="resize-none w-full input p-3 px-6"
                                        ></textarea>
                                    </div>
                                    <button className="btn btn-primary w-full md:w-auto btn-sm mt-6">SUBMIT</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Catering;
