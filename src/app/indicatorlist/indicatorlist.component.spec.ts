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
import { IndicatorlistComponent } from './indicatorlist.component';

describe('Component: indicatorlist', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [IndicatorlistComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([IndicatorlistComponent],
      (component: IndicatorlistComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(IndicatorlistComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(IndicatorlistComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-indicatorlist></app-indicatorlist>
  `,
  directives: [IndicatorlistComponent]
})
class IndicatorlistComponentTestController {
}

