import fetch from 'node-fetch'
import { promises as fs } from 'fs'
import { resolve } from 'path'


const basePath = 'https://5e.tools/data/'
async function downloadFolder(folder: string, outFile: string) {
    const index = await fetch(basePath + folder + '/index.json').then(r => r.json())
    const items = []
    for (const path of Object.values(index)) {
        const content = await fetch(basePath + folder + '/' + path).then(r => r.json())
        items.push(...content[Object.keys(content)[0]])
    }
    await fs.writeFile(outFile, JSON.stringify(items, undefined, '    '))
}
async function downloadFile(file: string, outFile: string) {
    const content = await fetch(basePath + '/' + file + '.json').then(r => r.json())
    await fs.writeFile(outFile, JSON.stringify(content[Object.keys(content)[0]], undefined, '    '))
}

(async () => {
    await downloadFolder('class', resolve(__dirname, '../src/5etools/class-data.json'))
    await downloadFolder('spells', resolve(__dirname, '../src/5etools/spell-data.json'))
    await downloadFile('feats', resolve(__dirname, '../src/5etools/feat-data.json'))
})()