import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { WbstatsAppComponent } from '../app/wbstats.component';

beforeEachProviders(() => [WbstatsAppComponent]);

describe('App: Wbstats', () => {
  it('should create the app',
      inject([WbstatsAppComponent], (app: WbstatsAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'wbstats works!\'',
      inject([WbstatsAppComponent], (app: WbstatsAppComponent) => {
    expect(app.title).toEqual('wbstats works!');
  }));
});
