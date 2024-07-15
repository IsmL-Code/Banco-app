import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateUserComponent } from './state-user.component';

describe('StateUserComponent', () => {
  let component: StateUserComponent;
  let fixture: ComponentFixture<StateUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StateUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
