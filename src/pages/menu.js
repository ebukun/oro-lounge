import MenuCard from "@/components/menuCard/MenuCard";
import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import Testimonial from "@/components/testimonialSlide/Testimonial";
import Footer from "@/components/footer/Footer";
import { useRouter } from "next/router";
import TabMenu from "@/components/tabMenu/TabMenu";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const Menu = ({ menus }) => {
    const router = useRouter();

    //State
    const [listMenus, setListMenus] = useState(null);

    useEffect(() => {
        const menu = menus?.find((data) => {
            return data.id === 1;
        });
        setListMenus(menu);
    }, []);

    //Tab Handler
    const selectMenu = useCallback((id, name) => {
        const menu = menus.find((data) => {
            return data.id === id;
        });
        setListMenus(menu);
    }, []);

    const tabs = menus.map((menu) => {
        return {
            name: menu.name,
            id: menu.id
        };
    });

    return (
        <div className="" id="menu-page">
            <Head>
                <title>Menu | Oro lounge</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="bg-menu-img bg-no-repeat bg-cover ">
                <Navbar />
                <div className="header-wrapper py-10">
                    <h3 className="header-headtext">MENU</h3>
                    <p className="header-subtext">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                        consequat duis enim velit mollit. Exercitation veniam consequat met.
                    </p>

                    <div className="cta space-x-7 mt-12">
                        <button className="btn btn-primary btn-md" onClick={() => router.push("/order")}>
                            ORDER ONLINE
                        </button>
                    </div>
                </div>
            </div>

            <div className="wrapper">
                <div className="3xl:container py-12 px-12 md:px-32 lg:mb-12 menu-section text-whitish relative bg-brownish">
                    {menus && (
                        <>
                            <TabMenu menus={tabs} onSelect={selectMenu} />
                            <div className="my-24">
                                <div className="flex flex-col justify-center items-center my-14">
                                    <img src={listMenus?.icon} alt="menu_icon" />
                                    <h3 className="mt-4 text-5xl md:text-nav font-bebasBold md:leading-extra-bigos uppercase">
                                        {listMenus?.name}
                                    </h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12 ">
                                    {listMenus &&
                                        listMenus?.menus.map((menu, index) => {
                                            return (
                                                <MenuCard
                                                    name={menu.name}
                                                    ingredients={menu.ingredients}
                                                    price={menu.price}
                                                    key={index}
                                                />
                                            );
                                        })}
                                </div>
                            </div>
                        </>
                    )}

                    {!menus && (
                        <div className="flex flex-col justify-center items-center my-36 ">
                            <h4 className="text-4xl text-center">We are updating our menu. Please stay tuned...</h4>
                        </div>
                    )}
                </div>
                <Testimonial />

                <Footer />
            </div>
        </div>
    );
};

export default Menu;

export async function getServerSideProps(context) {
    try {
        const menu_response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/categories`);

        return {
            props: {
                menus: menu_response.data.data.categories.data
            }
        };
    } catch (error) {
        return {
            props: { menus: null }
        };
    }
}
