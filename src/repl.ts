import { createInterface } from "readline";

export function cleanInput(input: string): string[] {
    return input.toLowerCase().trim().split(/\s+/);
}

export function startREPL() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > "
    }); 
    rl.prompt();
    rl.on("line", async (input) => {
        const words = cleanInput(input);
        if (words.length === 0) {
            rl.prompt();
            return;
        }
        const commandName = words[0];
        console.log(`Your command was: ${commandName}`);
        rl.prompt();
    });
}