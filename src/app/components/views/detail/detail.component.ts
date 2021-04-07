import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showForm() {
    if (this.router.url.includes('/add') || this.router.url.includes('/edit/')) {
      return true;
    }
    return false;
  }

}
