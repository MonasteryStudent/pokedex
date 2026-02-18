import type { State } from "./state.js";

export async function commandMapB(state: State): Promise<void> {
    const url = state.prevLocationsURL;
    if (!url) {
        console.log("you're on the frist page");
        return;
    }
    const locations = await state.pokeapi.fetchLocations(url);
    state.nextLocationsURL = locations.next;
    state.prevLocationsURL = locations.previous;
    for (const location of locations.results) {
        console.log(location.name);
    }
}