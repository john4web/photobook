import { Injectable } from '@angular/core';
import { Photo } from '../models/Photo';
import { IStorageService } from './istorage.service';
import { v4 as uuid } from "uuid";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService implements IStorageService {


  create(photo: Photo): void {
    photo.id = uuid();
    localStorage.setItem(photo.id, JSON.stringify(photo));
  };

  read(id: string): Photo {
    return JSON.parse(localStorage.getItem(id));
  };

  readAll(): Photo[] {
    const storage: Object = { ...localStorage };

    const photos: Photo[] = [];
    for (let key in storage) {
      photos.push(JSON.parse(storage[key]));
    }

    return photos;
  };

  update(photo: Photo): void {
    localStorage.setItem(photo.id, JSON.stringify(photo));
  };

  delete(id: string): void {
    localStorage.removeItem(id);
  };

  constructor() { }
}
