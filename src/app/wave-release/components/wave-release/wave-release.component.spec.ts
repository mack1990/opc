import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaveReleaseComponent } from './wave-release.component';

describe('WaveReleaseComponent', () => {
  let component: WaveReleaseComponent;
  let fixture: ComponentFixture<WaveReleaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaveReleaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaveReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
