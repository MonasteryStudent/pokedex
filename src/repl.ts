import { createInterface } from "readline";
import { getCommands } from "./command_registry.js"

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
        const userCommand = words[0];
        const commands = getCommands();
        const command = commands[userCommand];
        if (!command) {
            console.log(`Unknown command: ${userCommand}. Type "help" for a list of commands.`);
            rl.prompt();
            return;
        }
        
        try {
            command.callback(commands);
        } catch (err: unknown) {
            if (err instanceof Error) {
                console.log(err.message);
            } else {
                console.log("An unexpected error occured");
            }
        }
        rl.prompt();
    });
}