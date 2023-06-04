// Imports
import search from "./search.js";
import stripAll from "./stripAll.js";
// Function
async function translate(query) {
    return (await Promise.all(stripAll(query).split(" ").map(word => search(word)))).join("");
}
// Exports
export default translate;
