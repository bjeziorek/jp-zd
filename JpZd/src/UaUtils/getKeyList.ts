export function getKeyList(obj:object):Array<string>{
    const list=[]
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            list.push(key);
        }
    }
    return list
}