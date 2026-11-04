import {render, screen} from '@testing-library/react';
import React from 'react';

import {Breadcrumbs} from '../';

describe('Breadcrumbs.OverflowButton', () => {
  it('should apply the hidden styles to the list item when nothing overflows', () => {
    render(
      <Breadcrumbs aria-label="Breadcrumbs">
        <Breadcrumbs.List overflowButton={<Breadcrumbs.OverflowButton aria-label="More links" />}>
          <Breadcrumbs.Item>
            <Breadcrumbs.Link href="/">Home</Breadcrumbs.Link>
          </Breadcrumbs.Item>
        </Breadcrumbs.List>
      </Breadcrumbs>
    );

    const listItem = screen.getByLabelText('More links', {selector: 'button'}).closest('li');

    expect(listItem).toHaveStyle({position: 'absolute', left: '-99999px'});
    expect(listItem).not.toHaveAttribute('position');
    expect(listItem).not.toHaveAttribute('left');
  });
});
