import axios from "axios";

export class TDKAPI {
  constructor() {}

  public async getWord(word: string) {
    let response = (await axios.get(`https://sozluk.gov.tr/gts?ara=${word}`))
      .data[0];

    return {
      anlamlar: [response.anlamlarListe],
      atasozu: response.atasozu ? response.atasozu[0].madde : null,
    };
  }
}
