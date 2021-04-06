import { Component, OnInit, Inject } from '@angular/core';

import { IStorageService } from '../../services/istorage.service';
import { ISTORAGESERVICE } from '../../services/injection.tokens';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  constructor(@Inject(ISTORAGESERVICE) private localStorageService: IStorageService) { }

  ngOnInit(): void {
    const photos = this.localStorageService.readAll();
    console.log(photos);
  }

}
