import {Skeleton} from '@workday/canvas-kit-react/skeleton';
import {calc, createStyles} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

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

export const Color = () => {
  return (
    <Skeleton>
      <div className={headerRowStyles}>
        <Skeleton.Shape
          cs={{
            width: system.size.md,
            height: system.size.md,
            borderRadius: system.shape.full,
            backgroundColor: base.indigo50,
          }}
        />
        <div className={headerStyles}>
          <Skeleton.Header cs={{backgroundColor: base.amber50}} />
        </div>
      </div>
      <div>
        <Skeleton.Text cs={{backgroundColor: base.red25}} />
      </div>
    </Skeleton>
  );
};
