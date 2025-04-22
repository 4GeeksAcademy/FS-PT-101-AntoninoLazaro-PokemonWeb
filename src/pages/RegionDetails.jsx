import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useParams } from "react-router-dom";
import pokeApiServices from "../services/pokeApiServices";

export const RegionDetails = () => {

    const { store, dispatch } = useGlobalReducer();
    const { id } = useParams();

    useEffect(() => {
        pokeApiServices.getSingleRegion(id).then(data => dispatch({ type: 'single_region', payload: data }))
        console.log('Me estoy ejecutando')
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
                                {store.singleRegion?.name.toUpperCase()}
                            </h3>
                        </div>
                    </div>

                    {/* Detalles generales: Imagen e info */}
                    <div className="row mx-auto">
                        {/* Imagen */}
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center bg-secondary mb-3 rounded border">
                            <img
                                className="imgDetails img-fluid"
                                src={`https://cdn2.iconfinder.com/data/icons/pokemon-filledoutline/64/map-people-pokemon-nintendo-video-game-gaming-gartoon-512.png`}
                                alt=""
                            />
                        </div>
                        {/* Info (height, weight, types) */}
                        <div className="col-12 col-md-6">
                            <div className="d-flex flex-column gap-3 pb-3">
                                <p className="fw-bold bg-light rounded p-1 mb-1">
                                    {`Name: ${store.singleRegion?.name}`}
                                </p>
                                <div className="fw-bold bg-light rounded p-1">
                                    <p className="mb-1">Versions:</p>
                                    <div className="d-flex flex-wrap gap-4 justify-content-center">
                                        {store.singleRegion?.version_groups?.map((item, index) => (
                                            <span key={index} className="badge bg-info">
                                                {item.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="fw-bold bg-light rounded p-1">
                                    <p className="mb-1">Pokedex:</p>
                                    <div className="d-flex flex-wrap gap-4 justify-content-center">
                                        {store.singleRegion?.pokedexes?.map((item, index) => (
                                            <span key={index} className="badge bg-info">
                                                {item.name}
                                            </span>
                                        ))}
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
