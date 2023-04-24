import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAirlineComponent } from './update-airline.component';

describe('UpdateAirlineComponent', () => {
  let component: UpdateAirlineComponent;
  let fixture: ComponentFixture<UpdateAirlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAirlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAirlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
