import { State } from "./state.js"

export async function commandPokedex(state: State): Promise<void> {
    if (Object.keys(state.pokedex).length === 0) {
        console.log("your pokedex is empty");
        return;
    }
    console.log("Your Pokedex:")
    for (const name in state.pokedex) {
        console.log(`  - ${name}`);
    }
} 