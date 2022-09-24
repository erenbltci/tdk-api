
export interface IGetWord {
 anlamlar: Object[]
 atasozu_deyim: String[]
}

export type WordMean = {
    anlam: String
    ornek: String
}


export interface IProVerb {
    proverbs: ProVerbsResponse
}


export type ProVerbsResponse = {
    soz: String
    anlam: String
    tur: String
}

