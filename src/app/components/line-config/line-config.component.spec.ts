import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineConfigComponent } from './line-config.component';

describe('LineConfigComponent', () => {
  let component: LineConfigComponent;
  let fixture: ComponentFixture<LineConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineConfigComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
