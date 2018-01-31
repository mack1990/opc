import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WaveReleaseRouting} from './wave-release.routing';
import { WaveReleaseComponent } from './components/wave-release/wave-release.component';
import {WaveReleaseService} from './components/wave-release/wave-release.service';
import {NgMaterialModule} from '../ng-material/ng-material.module';
import { ReleaseModalComponent } from './components/wave-release/release-modal/release-modal.component';

@NgModule({
  imports: [
    CommonModule,
    WaveReleaseRouting,
    NgMaterialModule
  ],
  declarations: [WaveReleaseComponent, ReleaseModalComponent],
  providers: [WaveReleaseService]
})
export class WaveReleaseModule { }
