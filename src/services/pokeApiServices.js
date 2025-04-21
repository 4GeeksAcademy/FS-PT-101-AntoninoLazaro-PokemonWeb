const pokeApiServices = { }

pokeApiServices.getAllPokemons = async () =>{
    try {
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon');
        const data = await resp.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

pokeApiServices.getSinglePokemonData = async (id) => {
    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await resp.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export default pokeApiServices;