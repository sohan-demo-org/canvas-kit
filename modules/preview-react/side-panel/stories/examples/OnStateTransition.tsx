import * as React from 'react';

import {
  SidePanel,
  SidePanelTransitionStates,
  useSidePanel,
} from '@workday/canvas-kit-preview-react/side-panel';
import {AccessibleHide} from '@workday/canvas-kit-react/common';
import {Text} from '@workday/canvas-kit-react/text';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';

const stylesOverride = {
  viewport: createStyles({
    display: 'flex',
    height: px2rem(320),
  }),
  main: createStyles({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
    flexBasis: 'auto',
  }),
};

export const OnStateTransition = () => {
  const {panelProps, labelProps, controlProps} = useSidePanel();
  const [transitionState, setTransitionState] =
    React.useState<SidePanelTransitionStates>('expanded');

  const handleStateTransition = (transition: SidePanelTransitionStates) => {
    setTransitionState(transition);
  };

  return (
    <div className={stylesOverride.viewport}>
      <SidePanel {...panelProps} onStateTransition={handleStateTransition}>
        <SidePanel.ToggleButton {...controlProps} />
        <AccessibleHide {...labelProps}>Hidden Title</AccessibleHide>
      </SidePanel>
      <main className={stylesOverride.main}>
        <Text as="p" typeLevel="body.large">
          Side panel is {transitionState}.
        </Text>
      </main>
    </div>
  );
};
