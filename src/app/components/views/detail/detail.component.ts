import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Photo } from 'src/app/models/Photo';
import { ISTORAGESERVICE } from 'src/app/services/injection.tokens';
import { IStorageService } from 'src/app/services/istorage.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(@Inject(ISTORAGESERVICE) private localStorageService: IStorageService, private router: Router, private route: ActivatedRoute) { }

  private urlID: string;
  readPhoto: Photo;
  private routeSub: Subscription;

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.urlID = params['id'];
    });

    const photo = this.localStorageService.read(this.urlID);

    if (photo === null && this.showChildComponent() !== 'add') {
      this.router.navigateByUrl('/home');
    } else {
      this.readPhoto = photo;
    }
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  showChildComponent() {
    if (this.router.url.includes('/add')) {
      return 'add';
    } else if (this.router.url.includes('/edit/')) {
      return 'edit';
    } else {
      return 'view';
    }
  }

}
