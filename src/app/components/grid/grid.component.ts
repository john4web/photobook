import { Component, OnInit, Inject } from '@angular/core';

import { IStorageService } from '../../services/istorage.service';
import { ISTORAGESERVICE } from '../../services/injection.tokens';
import { Photo } from 'src/app/models/Photo';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  constructor(@Inject(ISTORAGESERVICE) private localStorageService: IStorageService) { }

  photos: Photo[] = []

  ngOnInit(): void {
    this.photos = this.localStorageService.readAll();
  }

}
