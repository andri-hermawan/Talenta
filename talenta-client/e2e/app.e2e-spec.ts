import { NewEmsPage } from './app.po';

describe('new-ems App', () => {
  let page: NewEmsPage;

  beforeEach(() => {
    page = new NewEmsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
