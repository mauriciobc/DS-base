import { newSpecPage } from '@stencil/core/testing';
import { DsCheckboxGroup } from './ds-checkbox-group';

describe('ds-checkbox-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DsCheckboxGroup],
      html: `<ds-checkbox-group></ds-checkbox-group>`,
    });
    expect(page.root).toBeTruthy();
  });
});



