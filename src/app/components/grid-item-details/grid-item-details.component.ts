import { Component, OnInit, Inject } from '@angular/core';

import { IStorageService } from '../../services/istorage.service';
import { ISTORAGESERVICE } from '../../services/injection.tokens';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Photo } from 'src/app/models/Photo';

@Component({
  selector: 'app-grid-item-details',
  templateUrl: './grid-item-details.component.html',
  styleUrls: ['./grid-item-details.component.scss']
})
export class GridItemDetailsComponent implements OnInit {

  private routeSub: Subscription;
  private photoID: string;
  photo: Photo;

  //todo: make all member private which are not used outside this class

  constructor(@Inject(ISTORAGESERVICE) private localStorageService: IStorageService, private route: ActivatedRoute, private router: Router) {





  }

  ngOnInit(): void {



    this.routeSub = this.route.params.subscribe(params => {
      this.photoID = params['id'];
    });


    const photo = this.localStorageService.read(this.photoID);
    //todo: check if read successfully from localstorage
    console.log(photo);
    if (photo === null) {
      console.log("JA");
      this.router.navigateByUrl('/home');
    } else {
      this.photo = photo;
    }





  }



  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }


}
