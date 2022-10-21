// takes keys from given object and return array of strings

export function getKeys(obj: object): Array<string> {
    const outputArray = []
    for (const key in obj) {
        outputArray.push(key)
    }
    return outputArray
}