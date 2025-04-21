import React from "react";

export const PokeCard = ({ name, url }) => {
    let aux = url.split('/');
    let id = aux[6]


    return (
        <div className="card px-0 m-2">
            <div className="pb-0">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt="" />
                <p className="text-dark fw-bold m-0">{name.toUpperCase()}</p>
                <div className="d-flex justify-content-around mt-2 pb-0">
                    <button>Learn More!!</button>
                    <button>FAV</button>
                </div>
            </div>
        </div>
    )
}