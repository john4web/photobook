import { Component, Inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObjectUnsubscribedError } from 'rxjs';
import { Photo } from 'src/app/models/Photo';
import { ISTORAGESERVICE } from 'src/app/services/injection.tokens';
import { IStorageService } from 'src/app/services/istorage.service';
import { v4 as uuid } from "uuid";

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {

  @Input() readPhoto: Photo;

  id: string = "";
  name: string = "";
  location: string = "";
  notes: string = "";
  pictureURL: string = "";

  constructor(@Inject(ISTORAGESERVICE) private localStorageService: IStorageService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.readPhoto.id;
    this.name = this.readPhoto.name;
    this.location = this.readPhoto.location;
    this.notes = this.readPhoto.notes;
    this.pictureURL = this.readPhoto.pictureURL;
  }



  onSubmit() {
    if (!this.isDisabled()) {
      const newPhoto: Photo = {
        id: this.id,
        name: this.name,
        location: this.location,
        notes: this.notes,
        pictureURL: this.pictureURL
      };

      this.localStorageService.update(newPhoto);
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
