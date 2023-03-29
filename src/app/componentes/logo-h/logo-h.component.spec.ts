import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoHComponent } from './logo-h.component';

describe('LogoHComponent', () => {
  let component: LogoHComponent;
  let fixture: ComponentFixture<LogoHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
