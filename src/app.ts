import axios from "axios";

class TdkAPI {
  constructor() {}

  public async getWord(word: string) {
    const response = await axios.request({
      url: `https://sozluk.gov.tr/gts?ara=${word}`,
    });
  }
}
