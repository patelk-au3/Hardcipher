import React from "react";
import { NavHashLink } from 'react-router-hash-link';
import Homebanner from "../Image/hcheaderillustration.svg";
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

const Testimonial = (props) =>{
    return(
        <>
            <div className="testimonial">
                <sup><FormatQuoteIcon /></sup><blockquote>{props.comment}</blockquote><sub><FormatQuoteIcon /></sub>
                <p className="testimonial-author"><NavHashLink to="/">{props.name}</NavHashLink></p>
                <img src={Homebanner} className="img-fluid" alt="Client list" />
            </div>
        </>
    );
} 

const Tdata = [
    {
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quae est iure ullam eveniet aspernatur maiores possimus et omnis ut sint excepturi mollitia.",
        name: "Lorem ipsum"
    },
    {
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quae est iure ullam eveniet aspernatur maiores possimus et omnis ut sint excepturi mollitia.",
        name: "Lorem ipsum"
    },
    {
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quae est iure ullam eveniet aspernatur maiores possimus et omnis ut sint excepturi mollitia.",
        name: "Lorem ipsum"
    },
    {
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quae est iure ullam eveniet aspernatur maiores possimus et omnis ut sint excepturi mollitia.",
        name: "Lorem ipsum"
    },
    {
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quae est iure ullam eveniet aspernatur maiores possimus et omnis ut sint excepturi mollitia.",
        name: "Lorem ipsum"
    },
    {
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quae est iure ullam eveniet aspernatur maiores possimus et omnis ut sint excepturi mollitia.",
        name: "Lorem ipsum"
    },
];

export default Testimonial;
export {Tdata};