import { newE2EPage } from '@stencil/core/testing';

describe('inn-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<inn-button></inn-button>');

    const element = await page.find('inn-button');
    expect(element).toHaveClass('hydrated');
  });
});
