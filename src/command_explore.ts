import type { State } from "./state.js"


export async function commandExplore(state: State, ...args: string[]) {
    if (args.length !== 1) {
        throw new Error("you must provide a location name");
    }

    const locationName = args[0];
    const location = await state.pokeapi.fetchLocation(locationName);
    
    for (const encounter of location.pokemon_encounters) {
        console.log(encounter.pokemon.name);
    }
}