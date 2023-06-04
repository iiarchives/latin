// Function
function stripSpaces(query) {
    return query.trim().replace(/\s{2,}/g, " ");
}
// Exports
export default stripSpaces;
