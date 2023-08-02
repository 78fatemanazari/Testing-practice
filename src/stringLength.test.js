const stringLength = require("./stringLength");

test("Determines a string's length", () => {
    const inputString = "Disneyland";

    const result = stringLength(inputString);

    expect(result).toBe(10);
})
