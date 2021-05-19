import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import Footer from "@/components/footer/Footer";
import OrderCard from "@/components/orderCard/OrderCard";
import { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";

const Order = ({ menus }) => {
    console.log(menus);
    const [listMenus, setListMenus] = useState(null);
    const [active, setActive] = useState("");
    const componentJustMounted = useRef(true);

    useEffect(() => {
        const menu = menus?.find((data) => {
            return data.id === 1;
        });
        setActive(menu?.name);
        // console.log(menu);
        setListMenus(menu);
    }, []);

    useEffect(() => {
        if (!componentJustMounted.current) {
            const menu = menus.find((data) => {
                return data.name === active;
            });
            console.log(menu);
            setListMenus(menu);
        }
        componentJustMounted.current = false;
    }, [active]);

    //Tab Handler
    const selectMenu = useCallback((id, name) => {
        const menu = menus.find((data) => {
            return data.id === id;
        });
        setListMenus(menu);
    }, []);

    const toggleTab = (name) => {
        setActive(name);
    };

    const tabs = menus.map((menu) => {
        return {
            name: menu.name,
            id: menu.id
        };
    });

    return (
        <div className="order-page">
            <Head>
                <title>Order Online | Oro lounge</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-order bg-center bg-no-repeat  ">
                <Navbar />
                <div className="header-wrapper pt-20 pb-12">
                    <h3 className="text-center text-whitish mb-10 font-bold font-bebasBold text-6xl lg:text-8xl leading-extra-big uppercase">
                        ORDER ONLINE
                    </h3>
                </div>
            </div>
            <div className="mx-0 mb-0 md:mx-5 md:mb-5 md:mt-1">
                <div className="order-tab-menu bg-brownish md:mb-3">
                    <ul className="flex overflow-x-scroll lg:overflow-x-hidden space-x-4 md:space-x-4 lg:space-x-9 md:justify-center lg:justify-between lg:mx-72 items-center font-barlow h-12">
                        {/* <li className="text-whitish active">Popular Items</li> */}
                        {tabs.map((menu) => (
                            <li
                                key={menu.id}
                                onClick={() => toggleTab(menu.name)}
                                className={`text-whitish ${active === menu.name && "active"}`}
                            >
                                {menu.name}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-brownish text-whitish px-8 md:px-16 py-20 my-2 md:my-6">
                    <div className="order-section">
                        <h3 className="text-4xl mb-8 uppercase"> {listMenus?.name}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 place-content-stretch">
                            {listMenus &&
                                listMenus?.menus.map((menu) => (
                                    <OrderCard
                                        key={Math.random() * 1000}
                                        name={menu.name}
                                        recipe={menu.ingredients}
                                        image="/assets/images/food.png"
                                        price={menu.price}
                                    />
                                ))}
                            {/* 
                            <OrderCard
                                name="Bacon Breakfast Burrito"
                                recipe="Spice rum, Pineapple, Coconut, Magarita"
                                image="/assets/images/food.png"
                                price="$20.75"
                            />
                            <OrderCard
                                name="Bacon Breakfast Burrito"
                                recipe="Spice rum, Pineapple, Coconut, Magarita"
                                image="/assets/images/pancake.png"
                                price="$20.75"
                            />
                            <OrderCard
                                name="Bacon Breakfast Burrito"
                                recipe="Spice rum, Pineapple, Coconut, Magarita"
                                image="/assets/images/food.png"
                                price="$20.75"
                            />
                            <OrderCard
                                name="Bacon Breakfast Burrito"
                                recipe="Spice rum, Pineapple, Coconut, Magarita"
                                image="/assets/images/drinks.png"
                                price="$20.75"
                            />
                            <OrderCard
                                name="Bacon Breakfast Burrito"
                                recipe="Spice rum, Pineapple, Coconut, Magarita"
                                image="/assets/images/pancake.png"
                                price="$20.75"
                            /> */}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Order;

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
