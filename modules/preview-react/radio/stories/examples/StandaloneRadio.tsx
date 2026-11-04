import React from 'react';

import {StyledRadioButton} from '@workday/canvas-kit-preview-react/radio';
import {FormFieldGroup} from '@workday/canvas-kit-react/form-field';
import {createStyles} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

const styleOverrides = {
  containerStyles: createStyles({
    display: 'flex',
    flexDirection: 'column',
  }),
  optionsStyles: createStyles({
    display: 'flex',
    gap: system.gap.xl,
  }),
  labelStyles: createStyles({
    display: 'flex',
    gap: base.size150,
  }),
};

export const StandaloneRadio = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.currentTarget;
    if (target instanceof HTMLInputElement) {
      setValue(target.value);
    }
  };

  return (
    <div className={styleOverrides.containerStyles}>
      <FormFieldGroup as="fieldset">
        <FormFieldGroup.Label as="legend">Choose Your Pizza Crust</FormFieldGroup.Label>
        <div className={styleOverrides.optionsStyles}>
          <label className={styleOverrides.labelStyles}>
            <FormFieldGroup.Input
              as={StyledRadioButton}
              onChange={handleChange}
              value="deep-dish"
              name="pizza-crust-standalone"
              checked={value === 'deep-dish'}
            />
            Deep dish
          </label>
          <label className={styleOverrides.labelStyles}>
            <FormFieldGroup.Input
              as={StyledRadioButton}
              onChange={handleChange}
              value="gluten-free"
              checked={value === 'gluten-free'}
              name="pizza-crust-standalone"
            />
            Gluten free
          </label>
        </div>
      </FormFieldGroup>
      Value selected: {value}
    </div>
  );
};
