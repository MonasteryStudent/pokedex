import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands.js";
import { PokeAPI, Pokemon } from "./pokeapi.js";

export type State = {
    readline: Interface;
    commands: Record<string, CLICommand>;
    pokeapi: PokeAPI;
    nextLocationsURL: string | null;
    prevLocationsURL: string | null;
    pokedex: Record<string, Pokemon>
};

export type CLICommand = {
    name: string;
    description: string;
    // Variadic parameter (..args) are treated as optional.
    callback: (state: State, ...args: string[]) => Promise<void>;
};

export function initState(cacheInterval: number): State {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > "
    });
    return {
        readline: rl,
        commands: getCommands(),
        pokeapi: new PokeAPI(cacheInterval),
        nextLocationsURL: "",
        prevLocationsURL: "",
        pokedex: {},
    };
}