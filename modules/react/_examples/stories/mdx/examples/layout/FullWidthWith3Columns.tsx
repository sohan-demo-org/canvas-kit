import * as React from 'react';

import {Grid} from '@workday/canvas-kit-react/layout';
import {BodyText, Heading} from '@workday/canvas-kit-react/text';
import {createStencil, createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const gridStyles = createStyles({
  gridTemplateAreas: "'Heading Heading Heading' 'FormLeft FormCenter FormRight'",
  gridAutoRows: 'min-content',
  gridRowGap: system.gap.sm,
  gridColumnGap: system.gap.xxl,
});

const boxHeadingStyles = createStencil({
  vars: {
    gridArea: '',
  },
  base: ({gridArea}) => ({
    paddingInline: system.padding.sm,
    border: `${px2rem(1)} solid ${system.color.brand.border.primary}`,
    gridArea,
  }),
});

const boxStyles = createStencil({
  vars: {
    gridArea: '',
  },
  base: ({gridArea}) => ({
    paddingInline: system.padding.md,
    border: `${px2rem(1)} dashed ${system.color.brand.border.primary}`,
    gridArea,
  }),
});

const labelSkeletonStyles = createStyles({
  boxSizing: 'border-box',
  backgroundColor: system.color.surface.default,
  width: px2rem(120),
  height: px2rem(12),
});

const inputSkeletonStyles = createStyles({
  boxSizing: 'border-box',
  border: `${px2rem(1)} solid ${system.color.brand.border.primary}`,
  width: '100%',
  height: px2rem(20),
});

export const FullWidthWith3Columns = () => (
  <Grid cs={gridStyles}>
    <div {...boxHeadingStyles({gridArea: 'Heading'})}>
      <Heading size="medium">Full Width With 3 Columns</Heading>
    </div>
    <FormSkeleton area="FormLeft" text="Form - Left Third" />
    <FormSkeleton area="FormCenter" text="Form - Center Third" />
    <FormSkeleton area="FormRight" text="Form - Right Third" />
  </Grid>
);

const FormSkeleton = ({area, text}) => (
  <div {...boxStyles({gridArea: area})}>
    <BodyText size="small" fontWeight="bold">
      {text}
    </BodyText>
    {Array.from({length: 5}).map(() => (
      <Grid cs={{gridGap: system.gap.sm, marginBlockEnd: px2rem(20)}}>
        <div className={labelSkeletonStyles} />
        <div className={inputSkeletonStyles} />
      </Grid>
    ))}
  </div>
);
