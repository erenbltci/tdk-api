export interface IGetWord {
 anlamlar: Object[]
 atasozu_deyim: String[]
}

export type ProVerbsResponse = {
    soz: String
    anlam: String
    tur: String
}


export type WordMean = {
    anlam: String
    ornek: String
}