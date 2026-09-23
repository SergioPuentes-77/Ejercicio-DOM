import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BotonesPage } from './botones.page';

describe('BotonesPage', () => {
  let component: BotonesPage;
  let fixture: ComponentFixture<BotonesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
