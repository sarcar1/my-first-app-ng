import { MyFirstAppNgPage } from './app.po';

describe('my-first-app-ng App', () => {
  let page: MyFirstAppNgPage;

  beforeEach(() => {
    page = new MyFirstAppNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
