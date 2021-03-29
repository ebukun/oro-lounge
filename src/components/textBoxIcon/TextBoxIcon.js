const TextBoxIcon = ({ placeholder, classes, type = "text", boxClasses, onChange, value, textRef }) => {
    return (
        <div className={`form-grop ${boxClasses}`}>
            <span>
                <img src="/assets/icons/email.png" alt="search" />
            </span>
            <input
                type={type}
                className="form-icon col-md-7 "
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                ref={textRef}
                className="w-full"
            />
        </div>
    );
};
export default TextBoxIcon;
