import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedHerosComponent } from './selected-heros.component';

describe('SelectedHerosComponent', () => {
  let component: SelectedHerosComponent;
  let fixture: ComponentFixture<SelectedHerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedHerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedHerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
