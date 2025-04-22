import React from "react";
import { Link } from "react-router-dom";

export const PokeCard = ({ name, url }) => {
    let aux = url.split('/');
    let id = aux[6];
    let formatoTresCifras = id.toString().padStart(3, '0');


    return (
        <div className="card px-0 m-2 pokeCard">
            <div className="pb-0">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt="" />
                <p className="text-dark fw-bold m-0"><span className="me-3">Nº{formatoTresCifras}</span>{name.toUpperCase()}</p>
                <div className="d-flex justify-content-around mt-2 pb-0">
                    <Link className="btn btn-primary" to={'/pokemondetails/'+id}>Learn More!!</Link>
                    <button>FAV</button>
                </div>
            </div>
        </div>
    )
}