import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WaveReleaseRouting} from './wave-release.routing';
import { WaveReleaseComponent } from './components/wave-release/wave-release.component';

@NgModule({
  imports: [
    CommonModule,
    WaveReleaseRouting
  ],
  declarations: [WaveReleaseComponent]
})
export class WaveReleaseModule { }
