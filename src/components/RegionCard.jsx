import React from "react";
import { Link } from "react-router-dom";

export const RegionCard = ({ name, url }) => {
    let aux = url.split('/');
    let id = aux[6];


    return (
        <div className="card px-0 m-2 pokeCard">
            <div className="pb-0">
                <img src={`https://cdn2.iconfinder.com/data/icons/pokemon-filledoutline/64/map-people-pokemon-nintendo-video-game-gaming-gartoon-512.png`} alt="" />
                <p className="text-dark fw-bold m-0">{name.toUpperCase()}</p>
                <div className="d-flex justify-content-around mt-2 pb-0">
                    <Link className="btn btn-primary" to={'/regiondetails/'+id}>Learn More!!</Link>
                </div>
            </div>
        </div>
    )
}