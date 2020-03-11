import { Component, OnInit } from '@angular/core';

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

  test1: any;
  test2: any;
  test3: any;

  constructor() { }

  ngOnInit() {
  }

  make() {
    this.test1 = (32 + +this.damagemin) * (1 + this.incrphysicaldamage / 100 + this.quality / 100);
    this.test2 = (60 + +this.damagemax) * (1 + this.incrphysicaldamage / 100 + this.quality / 100);
    console.log(this.test1 + ' - ' + this.test2);
    this.test3 = (this.test1 + this.test2) / 2 * (1.6 * this.incrattacksspeed / 100 + 1.6);
    console.log(this.test3);
  }

  // var minDamage = (min + minPhycD) * (1 + incrD/100 + quality/100);
  // var maxDamage = (max + maxPhycD) * (1 + incrD/100 + quality/100);
  // var DMS = (maxDamage + minDamage)/2 * (attackS * incrAS/100 + attackS)
}
