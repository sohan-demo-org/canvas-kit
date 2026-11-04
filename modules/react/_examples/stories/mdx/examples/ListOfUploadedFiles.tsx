import {DeleteButton} from '@workday/canvas-kit-react/button';
import {Heading, Text} from '@workday/canvas-kit-react/text';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {createStyles} from '@workday/canvas-kit-styling';
import {trashIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

const files = ['Cover Letter.docx', 'Resume.docx', 'Portfolio.pptx', 'Portrait.png'];

const listStyles = createStyles({
  boxSizing: 'border-box',
  display: 'flex',
  gap: system.gap.md,
  flexDirection: 'column',
});

const listItemStyles = createStyles({
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  width: '35rem',
});

const deleteBtnStyle = createStyles({
  marginInlineStart: 'auto',
});

export const ListOfUploadedFiles = () => {
  return (
    <>
      <Heading size="medium">Uploaded Files:</Heading>
      <ul className={listStyles}>
        {files.map(i => (
          <li className={listItemStyles}>
            <Text>{i}</Text>
            <Tooltip type="description" title={i}>
              <DeleteButton icon={trashIcon} cs={deleteBtnStyle}>
                Delete
              </DeleteButton>
            </Tooltip>
          </li>
        ))}
      </ul>
    </>
  );
};
