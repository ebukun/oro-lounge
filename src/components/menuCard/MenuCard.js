const MenuCard = () => {
    return (
        <div className="menu-card">
            <div className="flex space-x-2">
                <span className="card-price">Coco Spice</span>
                <span className="straight-line flex-grow"></span>
                <span className="card-price">$24.00</span>
            </div>
            <p className="font-barlowThin text-base leading-7 mt-2">Spice rum, Pineapple, Coconut, Magarita</p>
        </div>
    );
};

export default MenuCard;
