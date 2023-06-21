
const findShortestString = require("./find-shortest-strings");

test("findShortestString finds the shortest string in an array", () => {
    expect(findShortestString(["it", "is", "a", "nice", "day"])).tobe("a");
    expect(findShortestString(["why", "hello", "to", "you"])).tobe("to");
    expect(findShortestString(["brave", "dance"])).tobe("brave")
});