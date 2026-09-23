import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OverlaysPage } from './overlays.page';

describe('OverlaysPage', () => {
  let component: OverlaysPage;
  let fixture: ComponentFixture<OverlaysPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlaysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
