import styled from '@emotion/styled';

import {getTheme} from '@workday/canvas-kit-react/common';
import {Grid} from '@workday/canvas-kit-react/layout';
import {borderRadius, colors, space} from '@workday/canvas-kit-react/tokens';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

const theme = getTheme();
const {up, down} = theme.canvas.breakpoints;
const small = down('m'); // Returns '@media (max-width: 768px)'
const medium = up('m'); // Returns '@media (min-width: 768px)'
const styles = {
  parentWrapper: {
    [small]: {
      gridTemplateAreas: "'Header' 'SmallContainer' 'BodyContent' 'Footer'",
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'auto',
      border: '10px solid',
      borderRadius: 30,
      paddingInline: space.s,
      paddingBlock: space.l,
    },
    [medium]: {
      gridTemplateAreas: "'Header Header' 'SmallContainer BodyContent' 'Footer Footer'",
      gridTemplateColumns: '1fr 3fr',
      gridTemplateRows: 'auto 300px auto',
      border: '40px solid',
      borderRadius: '20px 20px 0 0',
      padding: space.m,
    },
  },
};

const parentContainerStyles = createStyles({
  boxSizing: 'border-box',
  position: 'relative',
  [small]: {
    maxWidth: '100%',
  },
  [medium]: {
    maxWidth: px2rem(1000),
  },
});

const StyledParentWrapper = styled(Grid.as('section'))({
  ...styles.parentWrapper,
  gridGap: space.s,
  position: 'relative',
});

const circleTopStyles = createStyles({
  boxSizing: 'border-box',
  backgroundColor: base.neutral1000,
  borderRadius: system.shape.full,
  position: 'absolute',
  left: '50%',
  transform: 'translate(-50%, 0)',
  [small]: {
    height: px2rem(15),
    width: px2rem(40),
    top: px2rem(10),
  },
  [medium]: {
    display: 'none',
  },
});

const StyledHeaderContainer = styled(Grid.as('div'))({
  gridArea: 'Header',
  backgroundColor: colors.blueberry400,
  borderRadius: borderRadius.m,
  padding: space.s,
});

const StyledLeftContent = styled(Grid.as('div'))({
  gridArea: 'SmallContainer',
  backgroundColor: colors.blueberry300,
  borderRadius: borderRadius.m,
  padding: space.s,
});

const StyledRightContent = styled(Grid.as('div'))({
  gridArea: 'BodyContent',
  backgroundColor: colors.plum300,
  borderRadius: borderRadius.m,
  padding: space.s,
});

const StyledFooterContainer = styled(Grid.as('div'))({
  gridArea: 'Footer',
  backgroundColor: colors.berrySmoothie300,
  borderRadius: borderRadius.m,
  padding: space.s,
});

const headingStyles = createStyles({
  boxSizing: 'border-box',
  margin: 0,
  [small]: {
    ...system.type.body.sm,
    color: system.color.fg.inverse,
    fontWeight: system.fontWeight.bold,
  },
  [medium]: {
    ...system.type.body.lg,
    color: system.color.fg.inverse,
    fontWeight: system.fontWeight.bold,
  },
});

const greyBarStyles = createStyles({
  boxSizing: 'border-box',
  height: px2rem(70),
  backgroundColor: base.neutral500,
  [small]: {
    display: 'none',
  },
  [medium]: {
    display: 'block',
    borderBottomLeftRadius: px2rem(20),
    borderBottomRightRadius: px2rem(20),
  },
});

const circleStyles = createStyles({
  boxSizing: 'border-box',
  borderRadius: system.shape.full,
  position: 'absolute',
  left: '50%',
  transform: 'translate(-50%, 0)',
  [small]: {
    height: px2rem(5),
    width: px2rem(75),
    bottom: px2rem(10),
    backgroundColor: base.neutral500,
  },
  [medium]: {
    height: px2rem(40),
    width: px2rem(40),
    bottom: px2rem(-95),
    backgroundColor: base.neutral1000,
  },
});

/* Example is outdated in v15 as we are moving away from styled-components.
 * TODO: Update this example to use the new styling approach.
 */
export const ResponsiveViewport = () => {
  return (
    <div className={parentContainerStyles}>
      <StyledParentWrapper>
        <div className={circleTopStyles} />
        <StyledHeaderContainer>
          <h3 className={headingStyles}>Header</h3>
        </StyledHeaderContainer>
        <StyledLeftContent>
          <h3 className={headingStyles}>Small Content</h3>
        </StyledLeftContent>
        <StyledRightContent>
          <h3 className={headingStyles}>Body Content</h3>
        </StyledRightContent>
        <StyledFooterContainer>
          <h3 className={headingStyles}>Footer</h3>
        </StyledFooterContainer>
        <div className={circleStyles} />
      </StyledParentWrapper>
      <div className={greyBarStyles} />
    </div>
  );
};
