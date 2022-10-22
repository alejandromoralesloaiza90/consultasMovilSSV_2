import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraccionesProcesoDevolucionComponent } from './fracciones-proceso-devolucion.component';

describe('FraccionesProcesoDevolucionComponent', () => {
  let component: FraccionesProcesoDevolucionComponent;
  let fixture: ComponentFixture<FraccionesProcesoDevolucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FraccionesProcesoDevolucionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FraccionesProcesoDevolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
