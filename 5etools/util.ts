import { promises as fs } from "fs"
import { join } from "path"

function path(...parts: string[]): string {
    return join(__dirname, '../TheGiddyLimit.github.io/data', ...parts)
}
export async function readJSON(...parts: string[]): Promise<any> {
    return JSON.parse((await fs.readFile(path(...parts))).toString())
}