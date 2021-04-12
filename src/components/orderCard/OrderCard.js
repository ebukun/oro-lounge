const OrderCard = ({ name, recipe, price, image }) => {
    return (
        <div className="order-card flex flex-row justify-between">
            <div className="order-text font-barlow flex flex-col justify-between py-3 px-4">
                <div className="">
                    <h5 className="text-secondary font-medium text-base">{name}</h5>
                    <p className="text-grayish text-sm">{recipe}</p>
                </div>
                <p className="text-base">{price}</p>
            </div>
            {/* <div className="order-img bg-no-repeat bg-cover" style={{ backgroundImage: `url(${image})` }}></div> */}
        </div>
    );
};

export default OrderCard;
