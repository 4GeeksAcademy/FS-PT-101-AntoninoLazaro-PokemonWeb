import { LocationCard } from "../components/LocationCard.jsx";
import { PokeCard } from "../components/pokeCard.jsx";
import { RegionCard } from "../components/RegionCard.jsx";

import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div>
			<div className="container mt-5 backgroundContainer pb-3 pt-1 text-center rounded">
				<h1 className="textPokemon pb-2">ALL POKEMON</h1>
				<div className="scrollmenu mx-5 border rounded text-center">
					<div className="text-center mx-2">
						{store.pokemon?.map((el, i) => <PokeCard key={i} name={el.name} url={el.url} />)}
					</div>
				</div>
			</div>
			<div className="container mt-5 backgroundContainer pb-3 pt-1 text-center rounded">
				<h1 className="textPokemon pb-2">ALL REGION</h1>
				<div className="scrollmenu mx-5 border rounded text-center">
					<div className="text-center mx-2">
					{store.region?.map((el, i) => <RegionCard key={i} name={el.name} url={el.url} />)}
					</div>
				</div>
			</div>
			<div className="container mt-5 backgroundContainer pb-3 pt-1 text-center rounded">
				<h1 className="textPokemon pb-2">SOME LOCATION</h1>
				<div className="scrollmenu mx-5 border rounded text-center">
					<div className="text-center mx-2">
					{store.location?.map((el, i) => <LocationCard key={i} name={el.name} url={el.url} />)}
					</div>
				</div>
			</div>
			{store.fav_pokemon.length > 0 && <div className="container mt-5 backgroundContainer pb-3 pt-1 text-center rounded">
				<h1 className="textPokemon pb-2">YOUR FAVOURITE POKEMON</h1>
				<div className="scrollmenu mx-5 border rounded text-center">
					<div className="text-center mx-2">
						{store.fav_pokemon?.map((el, i) => <PokeCard key={i} name={el.name} url={el.url} />)}
					</div>
				</div>
			</div>}
		</div>
	);
}; 