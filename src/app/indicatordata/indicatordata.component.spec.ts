import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { IndicatordataComponent } from './indicatordata.component';

describe('Component: Indicatordata', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [IndicatordataComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([IndicatordataComponent],
      (component: IndicatordataComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(IndicatordataComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(IndicatordataComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-indicatordata></app-indicatordata>
  `,
  directives: [IndicatordataComponent]
})
class IndicatordataComponentTestController {
}

