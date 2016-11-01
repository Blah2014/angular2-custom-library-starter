import { Ng2HelloworldPage } from './app.po';

describe('ng2-helloworld App', function() {
  let page: Ng2HelloworldPage;

  beforeEach(() => {
    page = new Ng2HelloworldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
