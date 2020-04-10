import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdcatComponent } from './adcat.component';

describe('AdcatComponent', () => {
  let component: AdcatComponent;
  let fixture: ComponentFixture<AdcatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdcatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
