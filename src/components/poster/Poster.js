import { useRouter } from "next/router";

const Poster = ({
    smallText,
    headingText,
    subText,
    LinkOne = "",
    LinkTwo,
    bgImageClass,
    boxClasses,
    LinkTwoRoute,
    LinkOneRoute
}) => {
    const router = useRouter();
    return (
        <div
            className={`3xl:container poster-section ${bgImageClass} ${boxClasses}  bg-no-repeat bg-center bg-cover md:mb-12`}
        >
            <div className="flex flex-col lg:p-32 md:p-20 px-10 py-12">
                <h6 className="font-barlow text-center leading-7  text-whitish">{smallText}</h6>
                <h3 className="text-center heading-text text-whitish">{headingText}</h3>

                <p className="font-barlow text-center poster-sub-text text-whitish mt-4 mb-4 md:mx-auto">{subText}</p>

                <div className="cta space-x-4 md:space-x-10 flex mt-8 justify-center ">
                    {LinkOne !== "" && (
                        <button className="btn btn-secondary btn-md " onClick={() => router.push(LinkOneRoute)}>
                            {LinkOne}
                        </button>
                    )}
                    <button className="btn btn-primary btn-md text-blackish" onClick={() => router.push(LinkTwoRoute)}>
                        {LinkTwo}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Poster;
