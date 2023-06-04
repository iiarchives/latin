// Imports
import appendMacrons from "./appendMacrons.js";
import stripSpaces from "./stripSpaces.js";

// Function
function format(query: string): string {
    return stripSpaces(appendMacrons(query));    
}

// Exports
export default format;
