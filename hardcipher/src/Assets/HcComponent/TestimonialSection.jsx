import React from "react";
import Testimonial, {Tdata} from "./Testimonial";
import Carousel from "react-elastic-carousel";

const TestimonialSection = () => {
    return(
        <>
            <div className="row">
                    <div className="col-lg-6 mx-auto mb-5">
                        <Carousel itemsToShow={1} showArrows={false}>
                                {
                                    Tdata.map((val,index)=>{
                                        return(
                                            <Testimonial
                                                key = {index}
                                                comment = {val.comment}
                                                name = {val.name}
                                            />
                                        );
                                    })
                                }
                        </Carousel>
                    </div>
                </div>
        </>
    );
}

export default TestimonialSection;