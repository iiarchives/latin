// Function
function stripPunctuations(query: string): string {
    return query.replace(/[^āēīōūȳĀĒĪŌŪȲ a-zA-Z0-9]/g, "")
}

// Exports
export default stripPunctuations;
