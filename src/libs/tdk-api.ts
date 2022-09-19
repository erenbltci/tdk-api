import axios from "axios";
import { InvalidWord, ValueNotFound } from "../helpers/tdk-errors";
import { IGetWord } from '../typings';



class TDKAPI {
  constructor() {}

  public async getWord(word: string): Promise<IGetWord> {
    if (word.trim().length < 1) throw new InvalidWord();

    let response = await axios.get(
      `https://sozluk.gov.tr/gts?ara=${encodeURI(word)}`
    );
    if (response.data.error) throw new ValueNotFound();

    let anlamlar: any = [];

    for (const element of response.data[0].anlamlarListe) {
      anlamlar.push({
        anlam: element.anlam,
        ornek: element.orneklerListe ? element.orneklerListe[0].ornek : null,
      });
    }

    return {
      anlamlar,
      atasozu_deyim: response.data[0].atasozu
        ? response.data[0].atasozu[0].madde
        : null,
    };
  }

  public async isExistWord(word: string): Promise<boolean> {
    if (word.trim().length < 1) throw new InvalidWord();

    let response = await axios.get(
      `https://sozluk.gov.tr/gts?ara=${encodeURI(word)}`
    );

    return response.data.length > 0 ? true : false;
  }

  

  public async getProVerbs(value: string): Promise<any> {
    if (value.trim().length < 1) throw new InvalidWord();

    let response = await axios.get(
      `https://sozluk.gov.tr/atasozu?ara=${encodeURI(value)}`
    );

    if (response.data.error) throw new ValueNotFound();

    let proverbs: any = [{ soz: '', anlam: '', tur: ''}];

    for (const element of response.data) {
      proverbs.push({
            soz: element.sozum,
            tur: element.turu2,
            anlam: element.anlami,
        });
    }

    return { proverbs };
  }
}

export default TDKAPI