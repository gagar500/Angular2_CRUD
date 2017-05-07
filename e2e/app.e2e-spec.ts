import { AngularcrudPage } from './app.po';

describe('angularcrud App', () => {
  let page: AngularcrudPage;

  beforeEach(() => {
    page = new AngularcrudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
