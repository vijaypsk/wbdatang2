export class WbstatsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('wbstats-app h1')).getText();
  }
}
