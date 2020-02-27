import { Component, OnInit } from '@angular/core';
import {Poe} from './model';

@Component({
  selector: 'app-poe',
  templateUrl: './poe.component.html',
  styleUrls: ['./poe.component.css']
})
export class PoeComponent implements OnInit {

  damagemin: number;
  damagemax: number;
  incrphysicaldamage: number;
  incrattacksspeed: number;
  quality: number;

  weapons: object;

  test1: any;
  test2: any;
  test3: any;

  constructor() { }

  ngOnInit() {
  }

  make(a, b, c, d, i) {
    this.weapons = new Poe(a, b, c, d, i);
    console.log(this.weapons);
    this.test1 = (32 + +this.weapons['damage-min']) * (1 + this.weapons['incr-physical-damage'] / 100 + this.weapons['quality'] / 100);
    this.test2 = (60 + +this.weapons['damage-max']) * (1 + this.weapons['incr-physical-damage'] / 100 + this.weapons['quality'] / 100);
    console.log(this.test1 + ' - ' + this.test2);
    this.test3 = (this.test1 + this.test2) / 2 * (1.6 * this.weapons['incr-attacks-speed'] / 100 + 1.6);
    console.log(this.test3);
  }

  // var minDamage = (min + minPhycD) * (1 + incrD/100 + quality/100);
  // var maxDamage = (max + maxPhycD) * (1 + incrD/100 + quality/100);
  // var DMS = (maxDamage + minDamage)/2 * (attackS * incrAS/100 + attackS)
}
