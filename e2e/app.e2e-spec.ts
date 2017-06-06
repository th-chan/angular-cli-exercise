import { AngularCliExercisePage } from './app.po';

describe('angular-cli-exercise App', function() {
  let page: AngularCliExercisePage;

  beforeEach(() => {
    page = new AngularCliExercisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
