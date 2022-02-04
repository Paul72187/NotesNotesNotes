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
            console.log(expected);
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

it("adds to local storage", () => {
    let lib = new Library();
    lib.add("Record Store Day", "Koko.it");
    let arrJson = JSON.parse(localStorage.getItem("My_Notes"));
    expect(arrJson).toInclude({ title: "Record Store Day", content: "Koko.it" });
});