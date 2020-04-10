import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipurposesliderComponent } from './multipurposeslider.component';

describe('MultipurposesliderComponent', () => {
  let component: MultipurposesliderComponent;
  let fixture: ComponentFixture<MultipurposesliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipurposesliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipurposesliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
