// Imports

import { getArgument, isArgument, printError, printSuccess } from "./commandManager.js";
import { fileExists, fileRead, fileWrite } from "./fileManager.js";
import format from "./format.js";
import stripAll from "./stripAll.js";
import translate from "./translate.js";

// Commands
if(isArgument(0, [ null, "--help", "-h" ])) printSuccess(await fileRead("texts/help.txt"));
else if(isArgument(0, [ "--format", "-f" ])) {
    let inputFile = getArgument(1);
    if(inputFile === null) printError("Input file is unspecified.");
    if(!await fileExists(inputFile)) printError("Input file is not found.");
    let data = format(await fileRead(inputFile));
    let outputFile = getArgument(2);
    if(typeof outputFile === "string") await fileWrite(outputFile, data);
    else printSuccess(data);
}
else if(isArgument(0, [ "--translate", "-t" ])) {
    let inputFile = getArgument(1);
    if(inputFile === null) printError("Input file is unspecified.");
    if(!await fileExists(inputFile)) printError("Input file is not found.");
    let data = await translate(await fileRead(inputFile));
    let outputFile = getArgument(2);
    if(typeof outputFile === "string") await fileWrite(outputFile, data);
    else printSuccess(data);
}
else if(isArgument(0, [ "--strip", "-s" ])) {
    let inputFile = getArgument(1);
    if(inputFile === null) printError("Input file is unspecified.");
    if(!await fileExists(inputFile)) printError("Input file is not found.");
    let data = stripAll(await fileRead(inputFile));
    let outputFile = getArgument(2);
    if(typeof outputFile === "string") await fileWrite(outputFile, data);
    else printSuccess(data);
}
else if(isArgument(0, [ "--formatted-translate", "-ft" ])) {
    let inputFile = getArgument(1);
    if(inputFile === null) printError("Input file is unspecified.");
    if(!await fileExists(inputFile)) printError("Input file is not found.");
    let data = await translate(format(await fileRead(inputFile)));
    let outputFile = getArgument(2);
    if(typeof outputFile === "string") await fileWrite(outputFile, data);
    else printSuccess(data);
}
else printError("Invalid option.");
