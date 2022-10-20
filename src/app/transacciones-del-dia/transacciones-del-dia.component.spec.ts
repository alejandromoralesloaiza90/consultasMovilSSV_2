import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaccionesDelDiaComponent } from './transacciones-del-dia.component';

describe('TransaccionesDelDiaComponent', () => {
  let component: TransaccionesDelDiaComponent;
  let fixture: ComponentFixture<TransaccionesDelDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransaccionesDelDiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransaccionesDelDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
