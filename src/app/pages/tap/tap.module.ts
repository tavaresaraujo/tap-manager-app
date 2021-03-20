import { NgModule } from '@angular/core';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { 
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, 
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

import { Ng2SmartTableModule } from 'ng2-smart-table';

//modules
import { TapRoutingModule } from './tap-routing.module';

//components
import { TapComponent } from './tap.component';
import { TapListComponent } from './list/tap.list.component';
import { TapCreateComponent } from './create/tap.create.component';
import { MaterialInputsComponent } from '../tap/create/material-inputs/material-inputs.component';

//services
import { TapService } from '../../../services/tap.service';

const materialModules = [
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatRadioModule,
  MatButtonModule,
  MatButtonToggleModule,
];


@NgModule({
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,

    ThemeModule,
    Ng2SmartTableModule,
    NbButtonModule,
    TapRoutingModule,
    ngFormsModule,
    ...materialModules,
  ],
  declarations: [
    TapComponent,
    TapListComponent,
    TapCreateComponent,
    MaterialInputsComponent,
  ],
  providers: [TapService],
})
export class TapModule { }
