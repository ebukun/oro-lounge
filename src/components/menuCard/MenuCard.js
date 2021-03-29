const MenuCard = ({ name, ingredients, price }) => {
    return (
        <div className="menu-card">
            <div className="flex space-x-2">
                <div className="">
                    <span className="card-price">{name}</span>
                </div>

                <span className="straight-line flex-grow"></span>
                <span className="card-price">${price}</span>
            </div>
            <p className="font-barlowThin text-base leading-7 mt-2">{ingredients}</p>
        </div>
    );
};

export default MenuCard;
