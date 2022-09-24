export class InvalidWord extends Error {
  constructor() {
    super(`Bildirdiğiniz değer geçersiz.`);
    this.name = `GecersizDeger`;
  }
}

export class ValueNotFound extends Error {
  constructor() {
    super(`Bildirdiğiniz değer TDK'da bulunamadı.`);
    this.name = `DegerBuluamadi`;
  }
}
