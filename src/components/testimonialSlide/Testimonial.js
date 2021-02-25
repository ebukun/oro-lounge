const Testimonial = () => {
    return (
        <div className="3xl:container testimonial-section mb-10 bg-testimonials bg-no-repeat bg-cover">
            <div className=" flex flex-col justify-center py-28 px-32">
                <h3 className="text-whitish text-center">TESTIMONIALS</h3>
                <div className="text-center carousel mt-8">
                    <div className="flex justify-center ">
                        <img src="/assets/images/person.png" alt="" />
                    </div>
                    <h6 className="text-secondary mt-4">Logan MacPherson</h6>
                    <p className="text-whitish font-barlow  mt-4 mb-4 mx-auto">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                        consequat duis enim velit mollit. Exercitation veniam consequat met. Amet minim mollit non
                        deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit
                        mollit. Exercitation veniam consequat met.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
