import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesListComponent } from './stories-list.component';

describe('StoriesListComponent', () => {
  let component: StoriesListComponent;
  let fixture: ComponentFixture<StoriesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoriesListComponent]
    });
    fixture = TestBed.createComponent(StoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
