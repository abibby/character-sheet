// @ts-check

import fs from 'fs/promises'
import fetch from 'node-fetch'
import { resolve } from 'path'

const basePath = 'https://5e.tools/data/'
/**
 * @param {string} folder
 * @param {string} outFile
 */
async function downloadFolder(folder, outFile) {
    const index = await fetch(basePath + folder + '/index.json').then((r) =>
        r.json(),
    )
    const items = []
    for (const path of Object.values(index)) {
        const content = await fetch(basePath + folder + '/' + path).then((r) =>
            r.json(),
        )
        items.push(...content[Object.keys(content)[0]])
    }
    await writeJsonModule(outFile, items)
}
/**
 * @param {string} file
 * @param {string} outFile
 */
async function downloadFile(file, outFile) {
    const content = await fetch(basePath + '/' + file + '.json').then((r) =>
        r.json(),
    )
    await writeJsonModule(outFile, content[Object.keys(content)[0]])
}

/**
 * @param {string} file
 * @param {any} object
 */
async function writeJsonModule(file, object) {
    await fs.writeFile(
        file,
        'export default ' + JSON.stringify(object, undefined, '    '),
    )
}

;(async () => {
    await downloadFolder(
        'class',
        resolve(__dirname, '../src/5etools/class-data.ts'),
    )
    await downloadFolder(
        'spells',
        resolve(__dirname, '../src/5etools/spell-data.ts'),
    )
    await downloadFile(
        'feats',
        resolve(__dirname, '../src/5etools/feat-data.ts'),
    )
})()
