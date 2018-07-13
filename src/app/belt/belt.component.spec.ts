import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeltComponent } from './belt.component';

describe('BeltComponent', () => {
  let component: BeltComponent;
  let fixture: ComponentFixture<BeltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
