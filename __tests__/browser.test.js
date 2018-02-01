import nightmare from 'nightmare';

const post = 'http://localhost:3000/posts/1';

describe('When visit the post page', () => {
  it('should open post page', async () => {
    let page = nightmare().goto(post);
    let text = await page.evaluate(() => (document.body.textContent)).end();

    expect(text).toContain('Powered by React Course.');
  });

  it('should redirect to main page', async () => {
    let page = nightmare().goto(post);
    const url = await page.click('.home')
      .wait()
      .url();
    expect(url).toEqual('http://localhost:3000/');
  });
});
