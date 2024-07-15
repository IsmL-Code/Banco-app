import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaOpComponent } from './vista-op.component';

describe('VistaOpComponent', () => {
  let component: VistaOpComponent;
  let fixture: ComponentFixture<VistaOpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaOpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaOpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
