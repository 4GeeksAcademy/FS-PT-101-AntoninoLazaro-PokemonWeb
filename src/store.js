export const initialStore = () => {
  return {
    pokemon: null,
    siglePokemonData: null,
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
