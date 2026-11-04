import React from 'react';

import {
  ListBox,
  LoadReturn,
  useListItemRovingFocus,
  useListItemSelect,
  useListLoader,
  useListModel,
} from '@workday/canvas-kit-react/collection';
import {composeHooks} from '@workday/canvas-kit-react/common';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

const useListItem = composeHooks(useListItemSelect, useListItemRovingFocus);

const containerStyles = createStyles({
  boxSizing: 'border-box',
  display: 'flex',
  gap: system.gap.xl,
});

const columnStyles = createStyles({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  gap: 0,
});

const listBoxStyles = createStyles({
  maxHeight: px2rem(400),
  width: px2rem(300),
});

const listBoxItemStyles = createStyles({
  boxSizing: 'border-box',
  height: px2rem(20),
  background: 'transparent',
  border: 'none',
});

const eventsListStyles = createStyles({
  boxSizing: 'border-box',
  maxHeight: px2rem(400),
  overflowY: 'auto',
});

const colors = ['Blue', 'Red', 'Purple', 'Green', 'Pink'];
const fruits = ['Apple', 'Orange', 'Banana', 'Grape', 'Lemon', 'Lime'];
const options = Array(1000)
  .fill('')
  .map((_, index) => {
    return `${pickRandom(colors)} ${pickRandom(fruits)} ${index + 1}`;
  });

export const DataLoader = () => {
  const [messages, setMessages] = React.useState<string[]>([]);

  const {model} = useListLoader(
    {
      getId: (item: string) => item,
      getTextValue: (item: string) => item,
      shouldVirtualize: true,
      total: 1000,
      pageSize: 20,
      async load({pageNumber, pageSize}) {
        setMessages(messages => messages.concat(`Page ${pageNumber} loading`));

        // Return a promise, but use setTimeout to mock a delayed server response
        return new Promise<LoadReturn<string>>(resolve => {
          setTimeout(() => {
            const start = (pageNumber - 1) * pageSize;
            const end = start + pageSize;

            const total = options.length;
            const items = options.slice(start, end);

            setMessages(messages => messages.concat(`Page ${pageNumber} loaded`));

            resolve({
              items,
              total,
            });
          }, 500);
        });
      },
    },
    useListModel
  );

  return (
    <div className={containerStyles}>
      <div className={columnStyles}>
        <p>Scroll or focus and use keys to navigate</p>
        <ListBox model={model} cs={listBoxStyles}>
          {item => (
            <ListBox.Item
              as="button"
              role="listitem"
              elemPropsHook={useListItem}
              cs={listBoxItemStyles}
            >
              {item}
            </ListBox.Item>
          )}
        </ListBox>
      </div>
      <div className={columnStyles}>
        <p>Events:</p>
        <ul className={eventsListStyles}>
          {messages.map(message => (
            <li key={message}>{message}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
