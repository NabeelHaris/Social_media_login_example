import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsTemplateComponent } from './js-template.component';

describe('JsTemplateComponent', () => {
  let component: JsTemplateComponent;
  let fixture: ComponentFixture<JsTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
