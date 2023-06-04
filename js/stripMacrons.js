// Function
function stripMacrons(query) {
    return query
        .replace(/ā/g, "a").replace(/Ā/g, "A")
        .replace(/ē/g, "e").replace(/Ē/g, "E")
        .replace(/ī/g, "i").replace(/Ī/g, "I")
        .replace(/ō/g, "o").replace(/Ō/g, "O")
        .replace(/ū/g, "u").replace(/Ū/g, "U")
        .replace(/ȳ/g, "y").replace(/Ȳ/g, "Y");
}
// Exports
export default stripMacrons;
