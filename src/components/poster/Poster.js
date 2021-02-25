const Poster = ({ smallText, headingText, subText, LinkOne = "", LinkTwo, bgImageClass }) => {
    return (
        <div className={`3xl:container poster-section ${bgImageClass}  bg-no-repeat bg-cover mb-12`}>
            <div className="flex flex-col p-32">
                <h6 className="font-barlow text-center leading-7  text-whitish">{smallText}</h6>
                <h3 className="text-center heading-text text-whitish">{headingText}</h3>

                <p className="font-barlow text-center sub-text text-whitish mt-4 mb-4 mx-auto">{subText}</p>

                <div className="cta space-x-10 flex mt-8 justify-center ">
                    {LinkOne !== "" && <button className="btn btn-secondary btn-md ">{LinkOne}</button>}
                    <button className="btn btn-primary btn-md text-blackish">{LinkTwo}</button>
                </div>
            </div>
        </div>
    );
};

export default Poster;
