import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './components';
import { CalculatorService } from './services';

import { MaterialModule } from '../material';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [
    CalculatorComponent
  ],
  exports: [
    CalculatorComponent,
  ],
  providers: [
    CalculatorService
  ]
})
export class CalculatorModule { }
