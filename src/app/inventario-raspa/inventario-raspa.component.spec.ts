import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioRaspaComponent } from './inventario-raspa.component';

describe('InventarioRaspaComponent', () => {
  let component: InventarioRaspaComponent;
  let fixture: ComponentFixture<InventarioRaspaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventarioRaspaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventarioRaspaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
