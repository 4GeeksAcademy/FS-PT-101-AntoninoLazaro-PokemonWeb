import React from "react";
import { Link } from "react-router-dom";

export const LocationCard = ({ name, url }) => {
    let aux = url.split('/');
    let id = aux[6];


    return (
        <div className="card px-0 mx-2 cardLocation">
            <div className="p-0">
                <img className="imgLocationCard"src={`https://images.icon-icons.com/851/PNG/512/Location_icon-icons.com_67549.png`} alt="" />
                <p className="text-dark fw-bold m-0 my-3">{name.toUpperCase()}</p>
                <div className="d-flex justify-content-around mt-2 p-0 pt-2">
                    <Link className="btn btn-primary" to={'/locationdetails/' + id}>Learn More!!</Link>
                    <button>FAV</button>
                </div>
            </div>
        </div>
    )
}