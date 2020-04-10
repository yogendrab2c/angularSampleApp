import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdattrComponent } from './adattr.component';

describe('AdattrComponent', () => {
  let component: AdattrComponent;
  let fixture: ComponentFixture<AdattrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdattrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdattrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
