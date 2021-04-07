import { Component, Input, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/Photo';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss']
})
export class GridItemComponent implements OnInit {

  @Input() photo: Photo;

  constructor() { }

  ngOnInit(): void {
  }

}
