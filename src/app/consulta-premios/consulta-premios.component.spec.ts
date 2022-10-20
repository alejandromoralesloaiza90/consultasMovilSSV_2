import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPremiosComponent } from './consulta-premios.component';

describe('ConsultaPremiosComponent', () => {
  let component: ConsultaPremiosComponent;
  let fixture: ComponentFixture<ConsultaPremiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaPremiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaPremiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
