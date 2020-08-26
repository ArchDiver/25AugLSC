import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsfactsMapComponent } from './jsfacts-map.component';

describe('JsfactsMapComponent', () => {
  let component: JsfactsMapComponent;
  let fixture: ComponentFixture<JsfactsMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsfactsMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsfactsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
