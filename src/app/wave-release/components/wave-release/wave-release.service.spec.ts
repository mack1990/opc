import { TestBed, inject } from '@angular/core/testing';

import { WaveReleaseService } from './wave-release.service';

describe('WaveReleaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WaveReleaseService]
    });
  });

  it('should be created', inject([WaveReleaseService], (service: WaveReleaseService) => {
    expect(service).toBeTruthy();
  }));
});
