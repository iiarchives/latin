// Imports
import stripMacrons from "./stripMacrons.js";
import stripPunctuations from "./stripPunctuations.js";
import stripSpaces from "./stripSpaces.js";
// Function
function stripAll(query) {
    return stripPunctuations(stripMacrons(stripSpaces(query)));
}
// Exports
export default stripAll;
