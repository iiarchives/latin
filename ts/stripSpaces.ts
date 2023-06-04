// Function
function stripSpaces(query: string) {
    return query.trim().replace(/\s{2,}/g, " ");
}

// Exports
export default stripSpaces;