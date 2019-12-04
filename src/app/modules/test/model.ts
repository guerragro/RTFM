export interface NumberInterface {
  numberT: string;
  numbers: string[];
}

export class NumberModel implements NumberInterface {
  numberT: string;
  numbers: string[];
  constructor(numberT = null, numbers = []) {
    this.construct({numberT, numbers});
  }
  construct(model: {numberT, numbers}) {
    this.numberT = model.numberT;
    this.numbers = model.numbers;
  }
}
