export function caseM(noun:string):string{
    return noun
}

export function caseD(noun:string):string{
    // zub - zuba, loba
    // xrebet - xrebeta
    // szkira - szkiry
    // sestra - sestru
    // szlunok - szlunka, mozka
    // peczinka - peczinky
    // wena - wen
    // krow - krowy
    // horlo- horla
    // m'yaza - m'yaz
    // bluza - bluzy
    return noun
    .replace(/b$/,'ba')
    .replace(/t$/,'ta')
    .replace(/ira$/,'iry')
    .replace(/tra$/,'tru')
    .replace(/nok$/,'nka')
    .replace(/zok$/,'zka')
    .replace(/ka$/,'ky')
    .replace(/ena$/,'en')
    .replace(/ow$/,'owy')
    .replace(/lo$/,'la')
    .replace(/aza$/,'az')
    .replace(/uza$/,'uzy')
    .replace(/rty$/,'rt')
    .replace(/tky$/,'tok')
    .replace(/ehi$/,'en^')
    .replace(/uha$/,'uha')
    .replace(/aha$/,'aku')
    .replace(/oha$/,'ohy')
    .replace(/ja$/,'ji')
}