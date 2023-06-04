// Imports
import search from "./search.js";
import stripAll from "./stripAll.js";
// Function
async function translate(query) {
    return (await Promise.all(stripAll(query).split(" ").map(word => new Promise(resolve => {
        setTimeout(() => resolve(search(word)), Math.floor(Math.random() * 5000));
    })))).join("");
}
// Exports
export default translate;
