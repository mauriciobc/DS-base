import { newSpecPage } from '@stencil/core/testing';
import { DsSelect } from './ds-select';

describe('ds-select', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DsSelect],
      html: `<ds-select></ds-select>`,
    });
    expect(page.root).toBeTruthy();
  });
});



