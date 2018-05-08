import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedaddressComponent } from './detailedaddress.component';

describe('DetailedaddressComponent', () => {
  let component: DetailedaddressComponent;
  let fixture: ComponentFixture<DetailedaddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedaddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
