import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsfactsHomeComponent } from './jsfacts-home.component';

describe('JsfactsHomeComponent', () => {
  let component: JsfactsHomeComponent;
  let fixture: ComponentFixture<JsfactsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsfactsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsfactsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
