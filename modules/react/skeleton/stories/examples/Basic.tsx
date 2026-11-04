import {Skeleton} from '@workday/canvas-kit-react/skeleton';
import {calc, createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const headerRowStyles = createStyles({
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
});

const headerStyles = createStyles({
  boxSizing: 'border-box',
  flex: 1,
  marginInlineStart: calc.add(system.gap.sm, system.gap.xs),
});

export const Basic = () => {
  return (
    <Skeleton>
      <div className={headerRowStyles}>
        <Skeleton.Shape
          cs={{width: system.size.md, height: system.size.md, borderRadius: system.shape.full}}
        />
        <div className={headerStyles}>
          <Skeleton.Header />
        </div>
      </div>
      <Skeleton.Text />
    </Skeleton>
  );
};
