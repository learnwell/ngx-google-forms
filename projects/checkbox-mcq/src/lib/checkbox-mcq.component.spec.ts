import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxMcqComponent } from './checkbox-mcq.component';

describe('CheckboxMcqComponent', () => {
  let component: CheckboxMcqComponent;
  let fixture: ComponentFixture<CheckboxMcqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxMcqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxMcqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
