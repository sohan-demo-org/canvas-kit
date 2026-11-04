import {rocketIcon} from '@workday/canvas-accent-icons-web';
import {SidePanel, useSidePanel} from '@workday/canvas-kit-preview-react/side-panel';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {AccentIcon} from '@workday/canvas-kit-react/icon';
import {Heading, Text} from '@workday/canvas-kit-react/text';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

import {useDirection} from './useDirection';

const stylesOverride = {
  viewPortContainer: createStyles({
    display: 'flex',
    height: px2rem(320),
  }),
  panel: createStyles({
    display: 'flex',
    boxSizing: 'border-box',
    alignItems: 'center',
    padding: system.padding.md,
  }),
  accentIcon: createStyles({
    display: 'flex',
    marginInlineEnd: system.gap.md,
  }),
  mainContent: createStyles({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
    flexBasis: 'auto',
  }),
};

export const Basic = () => {
  const {direction, toggleDirection} = useDirection();
  const {expanded, panelProps, labelProps, controlProps} = useSidePanel();

  return (
    <CanvasProvider dir={direction}>
      <div className={stylesOverride.viewPortContainer}>
        <SidePanel {...panelProps}>
          <SidePanel.ToggleButton {...controlProps} />
          <div className={stylesOverride.panel}>
            {expanded && (
              <div className={stylesOverride.accentIcon}>
                <AccentIcon icon={rocketIcon} />
              </div>
            )}
            <Heading size="small" {...labelProps} hidden={!expanded ? true : undefined}>
              Tasks Panel
            </Heading>
          </div>
        </SidePanel>
        <main className={stylesOverride.mainContent}>
          <Text as="p" typeLevel="body.large">
            Toggle the content direction
          </Text>
          <SecondaryButton onClick={toggleDirection}>
            Set to {direction === 'ltr' ? 'Right-to-Left' : 'Left-to-Right'}
          </SecondaryButton>
        </main>
      </div>
    </CanvasProvider>
  );
};
