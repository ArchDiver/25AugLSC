import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsfactsPromisesComponent } from './jsfacts-promises.component';

describe('JsfactsPromisesComponent', () => {
  let component: JsfactsPromisesComponent;
  let fixture: ComponentFixture<JsfactsPromisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsfactsPromisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsfactsPromisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
