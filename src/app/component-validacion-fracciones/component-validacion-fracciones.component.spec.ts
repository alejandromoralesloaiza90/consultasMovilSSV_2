import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentValidacionFraccionesComponent } from './component-validacion-fracciones.component';

describe('ComponentValidacionFraccionesComponent', () => {
  let component: ComponentValidacionFraccionesComponent;
  let fixture: ComponentFixture<ComponentValidacionFraccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentValidacionFraccionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentValidacionFraccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
