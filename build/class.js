import { readJSON } from "./util";
let classCache;
function allClasses() {
    if (classCache === undefined) {
        classCache = [];
        const index = Object.values(readJSON('class', 'index.json'));
        for (const file of index) {
            const result = readJSON('class', file);
            classCache = classCache.concat(result.class);
        }
    }
    return classCache;
}
export function findClass(name) {
    return (allClasses()).find(c => c.name === name);
}
