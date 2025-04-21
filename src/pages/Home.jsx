import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { PokeCard } from "../components/pokeCard.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div className="container mt-5 backgroundContainer pb-3 pt-1 text-center rounded">
			<h1 className="text-white">ALL POKEMON</h1>
			<div className="scrollmenu mx-5 border rounded text-center">
				<div className="text-center mx-5">
					{store.pokemon?.map((el, i) => <PokeCard key={i} name={el.name} url={el.url} />)}
				</div>
			</div>
		</div>
	);
}; 