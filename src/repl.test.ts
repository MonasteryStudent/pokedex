import { cleanInput } from "./repl";
import { describe, expect, test } from "vitest";

// create a test suite
describe.each([
    {
        input: " hello world ",
        expected: ["hello", "world"],
    },
    {
        input: "Homo sine pecunia est imago mortis.",
        expected: ["homo", "sine", "pecunia", "est", "imago", "mortis."],
    },
    {
        input: "",
        expected: [""],
    },
    {
        input: " ",
        expected: [""],
    },
    {
        input: "  Use   regex  ",
        expected: ["use", "regex"]
    }
])("cleanInput($input)", ({ input, expected }) => {
    test(`Expected: ${expected}`, () => {
        const actual = cleanInput(input);
        expect(actual).toHaveLength(expected.length);
        for (const i in expected) {
            expect(actual[i]).toBe(expected[i]);
        }
    });
});