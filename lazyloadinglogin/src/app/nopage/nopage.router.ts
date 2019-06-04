import { Route } from '@angular/router';
import { NopageComponent } from './nopage.component';

export const NopageRoutes: Route[] = [
    {
        path: '**',
        component: NopageComponent
    }
]