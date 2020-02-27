export interface PoeModel {
  'damage-min': number;
  'damage-max': number;
  'incr-physical-damage': number;
  'incr-attacks-speed': number;
  'quality': number;
}

export class Poe {
  'damage-min': number;
  'damage-max': number;
  'incr-physical-damage': number;
  'incr-attacks-speed': number;
  quality: number;
  constructor(a, b, c, d, i) {
    this['damage-min'] = a;
    this['damage-max'] = b;
    this['incr-physical-damage'] = c;
    this['incr-attacks-speed'] = d;
    this.quality = i;
  }
}
