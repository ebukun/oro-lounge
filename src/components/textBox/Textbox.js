const Textbox = ({ subLabel, name, label, type = "text", disabled, boxClass }) => {
    return (
        <div className={`input-box ${boxClass}`}>
            <label htmlFor={name} className="block font-barlow text-blackish text-lg mb-3">
                {label}
            </label>
            <input
                type={type}
                disabled={disabled && disabled}
                name={name}
                className="w-full input p-3 px-6"
                autoComplete="off"
            />
            <span className={`${subLabel ? "block" : "hidden"} text-sm font-barlow text-blackish mt-2`}>
                {subLabel}
            </span>
        </div>
    );
};

export default Textbox;
