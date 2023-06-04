// Imports
import nodeFs from "node:fs";
// Functions
async function fileExists(path) {
    try {
        await nodeFs.promises.access(path, nodeFs.constants.F_OK);
        return true;
    }
    catch {
        return false;
    }
}
async function fileRead(path) {
    return await nodeFs.promises.readFile(path, { encoding: "utf-8" });
}
async function fileWrite(path, data) {
    await nodeFs.promises.writeFile(path, data);
}
// Exports
export { fileExists, fileRead, fileWrite };
