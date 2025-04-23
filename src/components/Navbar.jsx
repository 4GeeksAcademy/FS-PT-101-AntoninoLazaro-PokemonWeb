import { Form, Link } from "react-router-dom";
import pngegg from "../assets/img/pngegg.png";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer()

	const removeFav = (name) => {
		dispatch({ type: 'remove_favorite', payload: name });
	};

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img className="imagenNav" src={pngegg} alt="pokemon" />
				</Link>
				<div className="ml-auto dropdown">
					<button
						className="btn btn-primary dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						See favourites
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						<p className="mx-2 p-1 bg-light rounded fw-bold">Amount: {store.fav_pokemon.length}</p>
						{store.fav_pokemon?.map((el, index) => (
							<li key={index} className="d-flex justify-content-start  align-items-center p-1"><span className="fa-solid fa-star ms-2 text-yellow text-warning"></span>
								<span className="mx-1">{el.name}</span>
								<span className="text-danger fa-solid fa-trash ms-auto me-2" onClick={() => removeFav(el.name)}></span></li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};