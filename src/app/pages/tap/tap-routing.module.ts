import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TapComponent } from './tap.component';
import { TapListComponent } from './list/tap.list.component';
import { TapCreateComponent } from './create/tap.create.component';

const routes: Routes = [{
  path: '',
  component: TapComponent,
  children: [
    {
      path: 'list',
      component: TapListComponent,
    },
    {
      path: 'create',
      component: TapCreateComponent,
    },
  ],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class TapRoutingModule { 

}