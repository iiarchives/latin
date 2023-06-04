// Variables
let argumentValues = process.argv.slice(2);
// Functions
function getArgument(index, defaultArgument = null) {
    return argumentValues.length - 1 >= index ? argumentValues[index] : defaultArgument;
}
function isArgument(index, filterArguments, ignoreCases = true) {
    let argument = getArgument(index);
    return filterArguments.includes(typeof argument === "string" && ignoreCases ? argument.toLowerCase() : argument);
}
function printError(string) {
    console.log(string);
    process.exit(1);
}
function printSuccess(string) {
    console.log(string);
    process.exit(0);
}
// Exports
export { getArgument, isArgument, printError, printSuccess };
