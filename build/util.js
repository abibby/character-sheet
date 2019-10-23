import { readFileSync } from "fs";
import { join } from "path";
function path(...parts) {
    return join(__dirname, '../TheGiddyLimit.github.io/data', ...parts);
}
export function readJSON(...parts) {
    return JSON.parse(readFileSync(path(...parts)).toString());
}
