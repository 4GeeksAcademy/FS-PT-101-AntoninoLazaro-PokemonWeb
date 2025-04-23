import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const PokeCard = ({ name, url }) => {
    let aux = url.split('/');
    let id = aux[6];
    let formatoTresCifras = id.toString().padStart(3, '0');
    const { store, dispatch } = useGlobalReducer()

    const changeFav = () => {
        dispatch({ type: 'includes_fav_pokemon', payload: store.pokemon[id - 1] });
        console.log('MeEjecuto')
    };

    const selectBtn = (name) => {
        if (!Array.isArray(store.fav_pokemon)) {
            throw new Error('store.fav_pokemon no es un array');
        }
        const found = store.fav_pokemon.some(pokemon => pokemon.name === name);
        return found ? 'text-warning' : 'text-dark';
    };


    return (
        <div className="card px-0 m-2 pokeCard">
            <div className="pb-0">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt="" />
                <p className="text-dark fw-bold m-0"><span className="me-3">Nº{formatoTresCifras}</span>{name.toUpperCase()}</p>
                <div className="d-flex justify-content-around mt-2 pb-0">
                    <Link className="btn btn-primary" to={'/pokemondetails/' + id}>Learn More!!</Link>
                    <button onClick={() => changeFav(id)} className={`btn fa fa-star ${selectBtn(name)}`}></button>
                </div>
            </div>
        </div>
    )
}