export const initialStore = () => {
  return {
    region:null,
    singleRegion:null,
    singleLocation:null,
    pokemon: null,
    siglePokemonData: null,
    location: null,
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ]
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'single_region':
    return {
      ...store,
      singleRegion:action.payload
    }
    case 'region_data':
    return {
      ...store,
      region:action.payload
    }
    case 'single_location':
    return {
      ...store,
      singleLocation:action.payload
    }
    case 'location_data':
      return {
        ...store,
        location: action.payload
      }
    case 'pokemon_data':
      return {
        ...store,
        pokemon: action.payload
      };

    case 'sigle_pokemon_data':
      return {
        ...store,
        siglePokemonData: action.payload
      }
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    default:
      throw Error('Unknown action.');
  }
}
