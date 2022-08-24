import rand from "../utils/randomArrayElement"

export function daysOfMonth() {
    const days = [
        { jp: "tsuitachi", pl: "1 dzień miesiąca" },
        { jp: "futsu-ka", pl: "2 dzień miesiąca" },
        { jp: "mik-ka", pl: "3 dzień miesiąca" },
        { jp: "yok-ka", pl: "4 dzień miesiąca" },
        { jp: "itsu-ka", pl: "5 dzień miesiąca" },
        { jp: "mui-ka", pl: "6 dzień miesiąca" },
        { jp: "nano-ka", pl: "7 dzień miesiąca" },
        { jp: "you-ka", pl: "8 dzień miesiąca" },
        { jp: "kokono-ka", pl: "9 dzień miesiąca" },
        { jp: "too-ka", pl: "10 dzień miesiąca" },
        { jp: "jyu-yok-ka", pl: "14 dzień miesiąca" },
        { jp: "hatsu-ka", pl: "20 dzień miesiąca" },
        { jp: "ni-jyu-yok-ka", pl: "24 dzień miesiąca" },
    ]

    const day = rand(days)

    return{
        romaji: day.jp,
        meaning: day.pl
    }
}

export function months() {

}

export function dates() {
    //cale daty
}

export function hours() {

}

export function time() {
    //wczesniej pojutrze itp
}