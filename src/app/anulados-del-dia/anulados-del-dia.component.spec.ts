import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuladosDelDiaComponent } from './anulados-del-dia.component';

describe('AnuladosDelDiaComponent', () => {
  let component: AnuladosDelDiaComponent;
  let fixture: ComponentFixture<AnuladosDelDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnuladosDelDiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnuladosDelDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
