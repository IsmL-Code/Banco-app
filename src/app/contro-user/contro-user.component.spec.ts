import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControUserComponent } from './contro-user.component';

describe('ControUserComponent', () => {
  let component: ControUserComponent;
  let fixture: ComponentFixture<ControUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
