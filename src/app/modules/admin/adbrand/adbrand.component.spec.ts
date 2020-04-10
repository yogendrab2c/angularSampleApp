import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdbrandComponent } from './adbrand.component';

describe('AdbrandComponent', () => {
  let component: AdbrandComponent;
  let fixture: ComponentFixture<AdbrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdbrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
