// Function
function appendMacrons(query: string): string {
    return query
        .replace(/-a/g, "ā").replace(/-A/g, "Ā")
        .replace(/-e/g, "ē").replace(/-E/g, "Ē")
        .replace(/-i/g, "ī").replace(/-I/g, "Ī")
        .replace(/-o/g, "ō").replace(/-O/g, "Ō")
        .replace(/-u/g, "ū").replace(/-U/g, "Ū")
        .replace(/-y/g, "ȳ").replace(/-Y/g, "Ȳ")
}

// Exports
export default appendMacrons;
