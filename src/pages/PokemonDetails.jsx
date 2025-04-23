import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useParams } from "react-router-dom";
import pokeApiServices from "../services/pokeApiServices";

export const PokemonDetails = () => {

    const { store, dispatch } = useGlobalReducer();
    const { id } = useParams();
    let formatoTresCifras = id.toString().padStart(3, '0');


    useEffect(() => {
        pokeApiServices.getSinglePokemonData(id).then(data => dispatch({ type: 'sigle_pokemon_data', payload: data }))
        console.log(store?.siglePokemonData);
    }, [])

    return (
        <div className="container-fluid my-5">
            {/* Centra el panel con un ancho adaptativo */}
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6 bg-danger rounded border border-dark border-3">

                    {/* Encabezado */}
                    <div className="row">
                        <div className="col-12 text-center py-3">
                            <h3 className="fw-bold d-inline">
                                {store.siglePokemonData?.name.toUpperCase()}
                            </h3>
                            <h3 className="fw-bold ms-4 text-light d-inline">
                                Nº{formatoTresCifras}
                            </h3>
                        </div>
                    </div>
                    <div className="row mx-auto">
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center bg-secondary mb-3 rounded border">
                            <img
                                className="imgDetails img-fluid"
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                                alt=""
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="d-flex flex-column gap-3 pb-3">
                                <p className="fw-bold bg-light rounded p-1 mb-0">
                                    {`Height: ${store.siglePokemonData?.height}`}
                                </p>
                                <p className="fw-bold bg-light rounded p-1 mb-0">
                                    {`Weight: ${store.siglePokemonData?.weight}`}
                                </p>
                                <div className="fw-bold bg-light rounded p-1">
                                    <p className="mb-1">Types:</p>
                                    <div className="d-flex flex-wrap gap-4 justify-content-center">
                                        {store.siglePokemonData?.types?.map((tipo, index) => (
                                            <span key={index} className="badge bg-info">
                                                {tipo.type.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="fw-bold bg-light rounded p-1">
                                    <p className="mb-1">Abilities:</p>
                                    <div className="d-flex flex-wrap gap-4 justify-content-center">
                                        {store.siglePokemonData?.abilities?.map((tipo, index) => (
                                            <span key={index} className="badge bg-info">
                                                {tipo.ability.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="bg-secondary rounded mb-3 p-3 border">
                                <div className="row">
                                    <div className="col-auto">
                                        <h3 className="text-light mb-0">Stats:</h3>
                                    </div>
                                    <div className="col">
                                        <ul className="list-unstyled bg-light rounded p-3 mb-0">
                                            {store.siglePokemonData?.stats?.map((statObj, index) => (
                                                <li key={index} className="mb-2">
                                                    <strong>
                                                        {statObj.stat.name.charAt(0).toUpperCase() +
                                                            statObj.stat.name.slice(1)}
                                                    </strong>
                                                    : {statObj.base_stat} | Effort: {statObj.effort}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
