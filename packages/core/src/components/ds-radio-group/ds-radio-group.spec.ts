import { newSpecPage } from '@stencil/core/testing';
import { DsRadioGroup } from './ds-radio-group';

describe('ds-radio-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DsRadioGroup],
      html: `<ds-radio-group></ds-radio-group>`,
    });
    expect(page.root).toBeTruthy();
  });
});



