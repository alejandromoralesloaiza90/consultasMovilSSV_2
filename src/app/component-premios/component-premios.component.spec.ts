import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentPremiosComponent } from './component-premios.component';

describe('ComponentPremiosComponent', () => {
  let component: ComponentPremiosComponent;
  let fixture: ComponentFixture<ComponentPremiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentPremiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentPremiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
