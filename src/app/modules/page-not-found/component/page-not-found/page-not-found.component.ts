import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(
    public router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  backToMenu() {
    this.router.navigate(['menu'], {relativeTo: this.route.parent});
  }

}
