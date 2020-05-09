
export * from './core-page/core-page.component';
export * from './main-page/main-page.component';
export * from './not-found-page/not-found-page.component';

import { CorePageComponent } from './core-page/core-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

export const CORE_PAGES = [
  CorePageComponent,
  MainPageComponent,
  NotFoundPageComponent
];
