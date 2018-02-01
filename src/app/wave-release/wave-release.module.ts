import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WaveReleaseRouting} from './wave-release.routing';
import { WaveReleaseComponent } from './components/wave-release/wave-release.component';
import {WaveReleaseService} from './components/wave-release/wave-release.service';
import {NgMaterialModule} from '../ng-material/ng-material.module';
import { ReleaseModalComponent } from './components/wave-release/release-modal/release-modal.component';
import { DialogComponent } from './components/wave-release/dialog/dialog.component';
import {FormsModule} from '@angular/forms';

import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'MM/DD/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  imports: [
    CommonModule,
    WaveReleaseRouting,
    NgMaterialModule,
    FormsModule
  ],
  declarations: [WaveReleaseComponent, ReleaseModalComponent, DialogComponent],
  entryComponents: [
    DialogComponent,
  ],
  providers: [WaveReleaseService,
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
  // exports: [DialogComponent]
})
export class WaveReleaseModule { }
