import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeLineComponent } from './range-line.component';

describe('RangeLineComponent', () => {
  let component: RangeLineComponent;
  let fixture: ComponentFixture<RangeLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RangeLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RangeLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
