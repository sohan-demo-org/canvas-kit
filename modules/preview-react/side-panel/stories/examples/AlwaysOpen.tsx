import {rocketIcon} from '@workday/canvas-accent-icons-web';
import {SidePanel, useSidePanel} from '@workday/canvas-kit-preview-react/side-panel';
import {AccentIcon} from '@workday/canvas-kit-react/icon';
import {Heading, Text} from '@workday/canvas-kit-react/text';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const stylesOverride = {
  accentIcon: createStyles({
    marginInlineEnd: system.gap.md,
  }),
  pageContainer: createStyles({
    display: 'flex',
    gap: system.gap.md,
    height: px2rem(320),
  }),
  panelContainer: createStyles({
    display: 'flex',
    boxSizing: 'border-box',
    alignItems: 'center',
    padding: system.padding.md,
  }),
  panelHeading: createStyles({
    color: system.color.fg.default,
  }),
  mainContent: createStyles({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexBasis: 'auto',
    flex: 1,
  }),
};

export const AlwaysOpen = () => {
  const {panelProps, labelProps} = useSidePanel();

  return (
    <div className={stylesOverride.pageContainer}>
      <SidePanel {...panelProps}>
        <div className={stylesOverride.panelContainer}>
          <AccentIcon icon={rocketIcon} cs={stylesOverride.accentIcon} />
          <Heading size="small" cs={stylesOverride.panelHeading} {...labelProps}>
            Tasks Panel
          </Heading>
        </div>
      </SidePanel>
      <main className={stylesOverride.mainContent}>
        <Text as="p" typeLevel="body.large">
          This is the main content section.
        </Text>
      </main>
    </div>
  );
};
