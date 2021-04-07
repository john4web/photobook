
import { Component, OnInit, Inject } from '@angular/core';
import { Photo } from 'src/app/models/Photo';
import { Router } from '@angular/router';

import { IStorageService } from '../../services/istorage.service';
import { ISTORAGESERVICE } from '../../services/injection.tokens';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  name: string = "";
  location: string = "";
  notes: string = "";
  pictureURL: string = "";

  constructor(@Inject(ISTORAGESERVICE) private localStorageService: IStorageService, private router: Router) { }

  ngOnInit(): void {
  }



  onSubmit() {
    if (!this.isDisabled()) {
      const newPhoto: Photo = {
        id: "", //ID is generated in service
        name: this.name,
        location: this.location,
        notes: this.notes,
        pictureURL: this.pictureURL
      };

      this.localStorageService.create(newPhoto);
      //Todo: check if stored successfully
      this.router.navigateByUrl('/home');
    }


  }

  isDisabled() {
    if (this.pictureURL !== "" && this.name !== "") {
      return false;
    }
    return true;
  }


}
