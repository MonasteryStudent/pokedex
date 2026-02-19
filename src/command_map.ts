import type { State } from "./state.js"

export async function commandMap(state: State): Promise<void> {
    const url = state.nextLocationsURL;
    if (url === null) {
        console.log("you're on the last page");
        return;
    }
    const locations = await state.pokeapi.fetchLocations(url);
    state.nextLocationsURL = locations.next;
    state.prevLocationsURL = locations.previous;
    for (const result of locations.results) {
        console.log(result.name);
    }
}

export async function commandMapBack(state: State): Promise<void> {
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