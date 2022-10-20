import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioLoteriaFisicaComponent } from './inventario-loteria-fisica.component';

describe('InventarioLoteriaFisicaComponent', () => {
  let component: InventarioLoteriaFisicaComponent;
  let fixture: ComponentFixture<InventarioLoteriaFisicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventarioLoteriaFisicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventarioLoteriaFisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
