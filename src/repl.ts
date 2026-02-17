import { type State } from "./state.js"

export function cleanInput(input: string): string[] {
    return input.toLowerCase().trim().split(/\s+/);
}

export function startREPL(state: State) {
    const rl = state.readline

    rl.prompt();

    rl.on("line", async (input) => {
        const words = cleanInput(input);
        if (words.length === 0) {
            rl.prompt();
            return;
        }
        const userCommand = words[0];
        const commands = state.commands;
        const command = commands[userCommand];
        if (!command) {
            console.log(`Unknown command: ${userCommand}. Type "help" for a list of commands.`);
            rl.prompt();
            return;
        }
        
        try {
            command.callback(state);
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