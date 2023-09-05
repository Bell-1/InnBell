import { newE2EPage } from '@stencil/core/testing';

describe('inn-calculator', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<inn-calculator></inn-calculator>');

    const element = await page.find('inn-calculator');
    expect(element).toHaveClass('hydrated');
  });
});
