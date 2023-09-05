import { newSpecPage } from '@stencil/core/testing';
import { InnButton } from '../inn-button';

describe('inn-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InnButton],
      html: `<inn-button></inn-button>`,
    });
    expect(page.root).toEqualHtml(`
      <inn-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </inn-button>
    `);
  });
});
