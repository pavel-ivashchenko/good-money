
import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class AppStorageService {

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService) { }

  public get(key: string): any {
    return this.storage.get(key);
  }

  public set(key: string, value: any): void {
    this.storage.set(key, value);
  }

  public remove(key: string): void {
    this.storage.remove(key);
  }
}
