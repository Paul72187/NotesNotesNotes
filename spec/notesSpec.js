function expect(actual) {
    return {
        toEqual: function(expected) {
            if (actual == expected) {
                console.log("Passed");
            } else {
                console.log("Failed");
            }
        },
        toBe: function(expected) {
            if (actual === expected) {
                console.log("Passed");
            } else {
                console.log("Failed");
            }
        },

        toInclude: function(expected) {
            if (actual.includes(expected)) {
                console.log("Passed");
            } else {
                console.log("Failed");
            }
        },
    };
}

function it(label, callback) {
    console.log("Test: ${label}");
    callback();
}

it("should pass this test", () => {
    expect(2 + 2).toEqual(4);
});