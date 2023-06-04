// Function
async function search(query) {
    let response = await fetch(`https://latin-words.com/cgi-bin/translate.cgi?query=${query}`);
    let body = await response.json();
    return body.message;
}
// Exports
export default search;
