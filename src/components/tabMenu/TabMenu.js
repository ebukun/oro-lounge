import { useState } from "react";

const TabMenu = ({ menus, onSelect }) => {
    const [active, setActive] = useState(menus[0].name);

    const toggleTab = ({ id, name }) => {
        setActive(name);
        onSelect && onSelect(id);
    };
    return (
        <div className="tab-menu mt-12 mx-auto">
            <ul className="flex md:space-x-8 overflow-x-scroll lg:overflow-x-hidden lg:justify-center lg:content-center">
                {menus.map((menu) => (
                    <li
                        key={menu.id}
                        onClick={() => toggleTab(menu)}
                        className={`btn btn-md text-blackish cursor-pointer ${
                            active === menu.name ? "btn-primary" : "btn-secondary"
                        }`}
                    >
                        {menu.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TabMenu;
