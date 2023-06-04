// Variables
let argumentValues = process.argv.slice(2);

// Functions
function getArgument(index: number, defaultArgument: string | null = null): string | typeof defaultArgument {
    return argumentValues.length - 1 >= index ? argumentValues[index] : defaultArgument;
}

function isArgument(index: number, filterArguments: (string | null)[], ignoreCases: boolean = true): boolean {
    let argument = getArgument(index);
    return filterArguments.includes(typeof argument === "string" && ignoreCases ? argument.toLowerCase() : argument);
}

function printError(string: string): never {
    console.log(string);
    process.exit(1);
}

function printSuccess(string: string): never {
    console.log(string);
    process.exit(0);
}

// Exports
export { getArgument, isArgument, printError, printSuccess };
