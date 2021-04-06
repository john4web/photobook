import { Photo } from "../models/Photo";
import { LocalStorageService } from "./local-storage.service";

export interface IStorageService {

  create(photo: Photo): void;

  read(id: string): Photo;

  readAll(): Photo[];

  update(photo: Photo): void;

  delete(photo: Photo): void;


}

export const localStorageService: IStorageService = new LocalStorageService();
