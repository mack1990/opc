import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {WaveReleaseComponent} from './components/wave-release/wave-release.component';

const waveReleaseRoutes: Routes = [
  {path: '', component: WaveReleaseComponent }
];

@NgModule({
  imports: [RouterModule.forChild(waveReleaseRoutes)],
  exports: [RouterModule]
})

export class WaveReleaseRouting {}



