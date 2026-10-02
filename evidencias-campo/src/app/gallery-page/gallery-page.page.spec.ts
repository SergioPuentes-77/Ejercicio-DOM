import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GalleryPagePage } from './gallery-page.page';

describe('GalleryPagePage', () => {
  let component: GalleryPagePage;
  let fixture: ComponentFixture<GalleryPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
