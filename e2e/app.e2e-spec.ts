import { MealistifyPage } from './app.po';

describe('mealistify App', () => {
  let page: MealistifyPage;

  beforeEach(() => {
    page = new MealistifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
