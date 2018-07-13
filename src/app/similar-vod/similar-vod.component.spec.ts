import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarVodComponent } from './similar-vod.component';

describe('SimilarVodComponent', () => {
  let component: SimilarVodComponent;
  let fixture: ComponentFixture<SimilarVodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimilarVodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarVodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
