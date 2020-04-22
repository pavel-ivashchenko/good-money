
import { InjectionToken } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';

export interface ICoreModuleState {
  [key: string]: any; // For feature stores
}

export const coreModuleState: ActionReducerMap<ICoreModuleState> = { }

export const coreModuleStateToken = new InjectionToken<ActionReducerMap<ICoreModuleState>>('CORE_MODULE_STATE');
