// Imports
import stripAll from "./stripAll.js";

// Function
async function search(query: string): Promise<string> {
    let response = await fetch(`https://latin-words.com/cgi-bin/translate.cgi?query=${query}`);
    let body = await response.json() as { status: string, message: string };
    return body.message;
}

// Exports
export default search;
