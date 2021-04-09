import { TestBed } from '@angular/core/testing';
import { Photo } from '../models/Photo';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;
  let newPhoto: Photo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);

    localStorage.clear();

    newPhoto = {
      id: "", //ID is generated in service
      name: "testname",
      location: "testlocation",
      notes: "testnotes",
      pictureURL: "testPictureURL"
    };

  });

  it('service should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add new photo to localStorage', () => {
    //check if new photo is stored correctly in localStorage
    service.create(newPhoto);
    expect(newPhoto.id).not.toBe("");
    expect(localStorage[newPhoto.id]).not.toBe(undefined);
    expect(localStorage[newPhoto.id]).toEqual(JSON.stringify(newPhoto));
  });

  it('should delete photo from localStorage', () => {
    service.create(newPhoto);
    //check if new photo is deleted from localStorage
    service.delete(newPhoto.id);
    expect(localStorage[newPhoto.id]).toEqual(undefined);

  });

  it('should read photo from localStorage', () => {
    service.create(newPhoto);
    //check if photo is read correctly
    const readPhoto = service.read(newPhoto.id);
    expect(readPhoto).toEqual(newPhoto);
    expect(JSON.stringify(readPhoto)).toEqual(localStorage[newPhoto.id]);
  });

  it('should update photo from localStorage', () => {
    service.create(newPhoto);
    newPhoto.name = "testname2";
    newPhoto.pictureURL = "testPictureURL2";
    service.update(newPhoto);
    expect(localStorage[newPhoto.id]).toEqual(JSON.stringify({
      id: newPhoto.id,
      name: "testname2",
      location: "testlocation",
      notes: "testnotes",
      pictureURL: "testPictureURL2"
    }));
  });

  it('should read all photos from localStorage', () => {


    const newPhoto1: Photo = {
      id: "", //ID is generated in service
      name: "testname",
      location: "testlocation",
      notes: "testnotes",
      pictureURL: "testPictureURL"
    };

    const newPhoto2: Photo = {
      id: "", //ID is generated in service
      name: "testname2",
      location: "testlocation2",
      notes: "testnotes2",
      pictureURL: "testPictureURL2"
    };

    const newPhoto3: Photo = {
      id: "", //ID is generated in service
      name: "testname3",
      location: "testlocation3",
      notes: "testnotes3",
      pictureURL: "testPictureURL3"
    };

    service.create(newPhoto1);
    service.create(newPhoto2);
    service.create(newPhoto3);

    const photos: Photo[] = service.readAll();
    expect(photos).toEqual(jasmine.arrayContaining([newPhoto1, newPhoto2, newPhoto3]));
    expect(photos.length === 3).toBeTrue();
  });

});
