// repl.js actually refers to repl.ts
import { startREPL } from "./repl.js";
import { initState } from "./state.js";

async function main() {
    // set cache reap interval to 5 minutes
    const state = initState(1000 * 60 * 5);
    await startREPL(state);
}

main();