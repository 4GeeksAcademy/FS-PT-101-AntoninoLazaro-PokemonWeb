import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useParams } from "react-router-dom";
import pokeApiServices from "../services/pokeApiServices";

export const LocationDetails = () => {
    const { store, dispatch } = useGlobalReducer();
    const { id } = useParams();


    useEffect(() => {
        pokeApiServices.getSingleLocationData(id).then(data => dispatch({ type: 'single_location', payload: data }))
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
                                {store.singleLocation?.name.toUpperCase()}
                            </h3>
                        </div>
                    </div>

                    {/* Detalles generales: Imagen e info */}
                    <div className="row mx-auto">
                        {/* Imagen */}
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center bg-secondary mb-3 rounded border">
                            <img
                                className="imgDetails img-fluid"
                                src={`https://images.icon-icons.com/851/PNG/512/Location_icon-icons.com_67549.png`}
                                alt=""
                            />
                        </div>
                        {/* Info (height, weight, types) */}
                        <div className="col-12 col-md-6">
                            <div className="d-flex flex-column gap-3 pb-3">
                                <p className="fw-bold bg-light rounded p-1 mb-1">
                                    {`Region: ${store.singleLocation?.region.name}`}
                                </p>
                                <div className="fw-bold bg-light rounded p-1">
                                    <p className="mb-1">Areas:</p>
                                    <div className="d-flex flex-wrap gap-4 justify-content-center">
                                        {store.singleLocation?.areas?.map((item, index) => (
                                            <span key={index} className="badge bg-info">
                                                {item.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="fw-bold bg-light rounded p-1">
                                    <p className="mb-1">Names:</p>
                                    <div className="d-flex flex-wrap gap-4 justify-content-center">
                                        {store.singleLocation?.names?.map((item, index) => (
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
