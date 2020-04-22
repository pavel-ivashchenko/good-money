
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, RouterStateSnapshot, Route, UrlSegment } from '@angular/router';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { ICoreModuleState } from '../store/reducers';
// import { LogoutAction } from '../../user/store/actions/user.action';

import { TOKEN_KEY } from '../constants';
import { AppStorageService } from '../services';


@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private store: Store<ICoreModuleState>,
    private storage: AppStorageService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.next();
  }

  canLoad(
    route: Route, segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.next();
  }

  private next(): boolean {
    const token = !!this.storage.get(TOKEN_KEY);

    if (!token) { console.log('here will be logout action') } // this.store.dispatch(new LogoutAction());

    return token;
  }
}
