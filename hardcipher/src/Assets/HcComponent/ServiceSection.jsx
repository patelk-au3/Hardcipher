import React from "react";
import ServicesSectionComponent, {ServicesSectionComponentData} from "./ServiceData";

const ServiceSection = () =>{
    return(
        <>
            {/* service section start */}
            <div className="row my-5">
                {
                    ServicesSectionComponentData.map((val,index)=>{
                        return(
                            <ServicesSectionComponent
                                key = {index}
                                imgsrc = {val.imgsrc}
                                heading = {val.heading}
                                text = {val.text}
                                link = {val.link}
                            />
                        );
                    })
                }
            </div>
            {/* service section end */}
        </>
    );
}

export default ServiceSection;