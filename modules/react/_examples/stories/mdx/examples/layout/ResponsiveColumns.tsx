import * as React from 'react';

import {Grid} from '@workday/canvas-kit-react/layout';
import {SegmentedControl} from '@workday/canvas-kit-react/segmented-control';
import {BodyText, Heading} from '@workday/canvas-kit-react/text';
import {createStencil, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

const containerStencil = createStencil({
  vars: {
    maxWidth: '',
  },
  base: ({maxWidth}) => ({
    maxWidth,
    padding: system.padding.md,
    border: `${px2rem(2)} solid ${system.color.border.default}`,
  }),
});

const columnStencil = createStencil({
  vars: {
    backgroundColor: '',
  },
  base: ({backgroundColor}) => ({
    height: px2rem(120),
    backgroundColor,
  }),
});

export const ResponsiveColumns = () => {
  const [screen, setScreen] = React.useState('100%');

  return (
    <>
      <Heading size="medium">Responsive Columns</Heading>
      <BodyText size="small">Choose screen size to see changes</BodyText>
      <SegmentedControl initialValue={screen} onSelect={data => setScreen(data.id)}>
        <SegmentedControl.List aria-label="screen-size" cs={{marginBlockEnd: system.gap.lg}}>
          <SegmentedControl.Item data-id="100%">100%</SegmentedControl.Item>
          <SegmentedControl.Item data-id="75%">75%</SegmentedControl.Item>
          <SegmentedControl.Item data-id="50%">50%</SegmentedControl.Item>
          <SegmentedControl.Item data-id="25%">25%</SegmentedControl.Item>
        </SegmentedControl.List>
      </SegmentedControl>
      <div {...containerStencil({maxWidth: screen})}>
        <Grid
          cs={{gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gridGap: system.gap.md}}
        >
          <div {...columnStencil({backgroundColor: base.blue400})} />
          <div {...columnStencil({backgroundColor: base.blue500})} />
          <div {...columnStencil({backgroundColor: base.blue600})} />
        </Grid>
      </div>
    </>
  );
};
