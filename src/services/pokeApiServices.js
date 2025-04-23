const pokeApiServices = {}

pokeApiServices.getAllPokemons = async () => {
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

pokeApiServices.getAllLocation = async () => {
    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/location`)
        const data = await resp.json();
        return data;

    } catch (error) {
        console.log(error);
    }
}

pokeApiServices.getSingleLocationData = async (id) => {
    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/location/${id}`)
        const data = await resp.json();
        return data;

    } catch (error) {
        console.log(error);
    }
}
pokeApiServices.getDetailedPokemonData = async (id) => {
    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
        const data = await resp.json();
        return data;

    } catch (error) {
        console.log(error);
    }
}
pokeApiServices.getAllRegion = async () => {
    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/region`)
        const data = await resp.json();
        return data;

    } catch (error) {
        console.log(error);
    }
}
pokeApiServices.getSingleRegion = async (id) => {
    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/region/${id}`);
        const data = await resp.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}




export default pokeApiServices;