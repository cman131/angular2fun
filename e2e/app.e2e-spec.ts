import { Angular2fun2Page } from './app.po';

describe('angular2fun2 App', function() {
  let page: Angular2fun2Page;

  beforeEach(() => {
    page = new Angular2fun2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
