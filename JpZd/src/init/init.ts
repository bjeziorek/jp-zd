export function init(what:object){
    // copies keys of object and creates idiotProof matrix 
    const keyMatrix:{[key:string]:string} ={}
    
    for( const key in what){
        keyMatrix[key]=key.toString()
    }
    console.log(keyMatrix)
    return keyMatrix
}