import React from "react";
import Client1 from "../Image/clients/client_01.png";
import Client2 from "../Image/clients/client_02.png";
import Client3 from "../Image/clients/client_03.png";
import Client4 from "../Image/clients/client_04.png";
import Client5 from "../Image/clients/client_05.png";
import Client6 from "../Image/clients/client_06.png";

const Clients = (props) => {
    return(
        <>
            <img src={props.imgsrc} alt="Clients List"/>
        </>
    );
}

const Cdata = [
    {imgsrc:Client1},
    {imgsrc:Client2},
    {imgsrc:Client3},
    {imgsrc:Client4},
    {imgsrc:Client5},
    {imgsrc:Client6},
];

export default Clients;
export {Cdata};