import { State } from "./state.js"

export async function commandCatch(state: State, ...args: string[]): Promise<void> {
    if (args.length !== 1) {
        throw new Error("you must provide a Pokemon name");
    }
    const name = args[0]
    const pokemon = await state.pokeapi.fetchPokemon(name);
    console.log(`Throwing a Pokeball at ${pokemon.name}...`);
    if (catchPokemon(pokemon.base_experience)) {
        console.log(`${pokemon.name} was caught!`)
        state.pokedex[pokemon.name] = pokemon;
    } else {
        console.log(`${pokemon.name} escaped!`)
    }
}

function catchPokemon(exp: number): boolean {
    const drawing = Math.floor(Math.random() * 100);
    if (exp < 100 && drawing < 50) {
        return true;
    } else if (exp < 200 && drawing < 30) {
        return true;
    } else if (exp < 300 && drawing < 15) {
        return true;
    } else if (drawing < 5) {
        return true;
    }
    return false;
}