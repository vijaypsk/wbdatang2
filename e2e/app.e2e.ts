import { WbstatsPage } from './app.po';

describe('wbstats App', function() {
  let page: WbstatsPage;

  beforeEach(() => {
    page = new WbstatsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('wbstats works!');
  });
});
