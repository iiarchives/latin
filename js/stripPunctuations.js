// Function
function stripPunctuations(query) {
    return query.replace(/[^āēīōūȳĀĒĪŌŪȲ a-zA-Z0-9]/g, "");
}
// Exports
export default stripPunctuations;
