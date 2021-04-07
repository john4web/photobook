import { Component, OnInit, Input } from '@angular/core';
import { Photo } from 'src/app/models/Photo';

@Component({
  selector: 'app-grid-item-details',
  templateUrl: './grid-item-details.component.html',
  styleUrls: ['./grid-item-details.component.scss']
})
export class GridItemDetailsComponent implements OnInit {

  @Input() readPhoto: Photo;

  constructor() { }

  ngOnInit(): void {

  }

}
