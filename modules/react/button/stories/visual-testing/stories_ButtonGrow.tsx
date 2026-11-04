import {
  DeleteButton,
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from '@workday/canvas-kit-react/button';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';

import {withSnapshotsEnabled} from '../../../../../utils/storybook';

export default withSnapshotsEnabled({
  title: 'Testing/Buttons/Button/Grow',
});

const containerStyles = createStyles({
  display: 'flex',
  flexDirection: 'column',
  gap: px2rem(12),
});

export const ButtonGrow = () => (
  <div className={containerStyles}>
    <PrimaryButton size="small" grow={true}>
      Primary
    </PrimaryButton>
    <SecondaryButton size="small" grow={true}>
      Secondary
    </SecondaryButton>
    <TertiaryButton size="small" grow={true}>
      Tertiary
    </TertiaryButton>
    <DeleteButton size="small" grow={true}>
      Delete
    </DeleteButton>
  </div>
);
