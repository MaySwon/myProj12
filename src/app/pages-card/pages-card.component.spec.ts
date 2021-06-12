import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesCardComponent } from './pages-card.component';

describe('PagesCardComponent', () => {
  let component: PagesCardComponent;
  let fixture: ComponentFixture<PagesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
