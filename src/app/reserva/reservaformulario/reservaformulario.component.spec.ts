import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaformularioComponent } from './reservaformulario.component';

describe('ReservaformularioComponent', () => {
  let component: ReservaformularioComponent;
  let fixture: ComponentFixture<ReservaformularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservaformularioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaformularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
