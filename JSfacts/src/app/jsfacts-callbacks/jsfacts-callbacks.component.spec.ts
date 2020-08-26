import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsfactsCallbacksComponent } from './jsfacts-callbacks.component';

describe('JsfactsCallbacksComponent', () => {
  let component: JsfactsCallbacksComponent;
  let fixture: ComponentFixture<JsfactsCallbacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsfactsCallbacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsfactsCallbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
