import { Routes } from '@angular/router';
import { HomeRoutes } from './home/home.router';
import { IndexRoutes } from './index/index.router';
import { NopageRoutes } from './nopage/nopage.router';

export const routes: Routes = [...HomeRoutes, ...IndexRoutes, ...NopageRoutes];