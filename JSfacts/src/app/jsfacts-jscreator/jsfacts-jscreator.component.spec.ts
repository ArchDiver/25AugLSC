import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsfactsJScreatorComponent } from './jsfacts-jscreator.component';

describe('JsfactsJScreatorComponent', () => {
  let component: JsfactsJScreatorComponent;
  let fixture: ComponentFixture<JsfactsJScreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsfactsJScreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsfactsJScreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
