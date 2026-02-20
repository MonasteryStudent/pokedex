import { Pokemon } from "./pokeapi.js";
import { State } from "./state.js"

export async function commandInspect(state: State, ...args: string[]): Promise<void> {
    if (args.length !== 1) {
        throw new Error("you must provide a pokemon name");
    }
    const name = args[0];
    const pokemon = state.pokedex[name];
    if (pokemon) {
        printPokemon(pokemon);
    } else {
        console.log("you have not caught that pokemon")
    }
    
}

function printPokemon(pokemon: Pokemon) {
    console.log(`Name: ${pokemon.name}`);
    console.log(`Height: ${pokemon.height}`);
    console.log(`Weight: ${pokemon.weight}`);
    console.log("Stats:");
    for (const stat of pokemon.stats) {
        console.log(`  - ${stat.stat.name}: ${stat.base_stat}`);
    }
    console.log("Types:");
    for (const type of pokemon.types) {
        console.log(`  - ${type.type.name}`)
    }
}