import { newSpecPage } from '@stencil/core/testing';
import { InnCalculator } from '../inn-calculator';

describe('inn-calculator', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InnCalculator],
      html: `<inn-calculator></inn-calculator>`,
    });
    expect(page.root).toEqualHtml(`
      <inn-calculator>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </inn-calculator>
    `);
  });
});
