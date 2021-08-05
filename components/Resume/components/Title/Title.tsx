import Image from 'next/image';

import styled from '@emotion/styled';
import { ChangeEvent, useRef } from 'react';

const TitleControl = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& > div:nth-of-type(1)': {
    height: '60px',
    fontFamily: 'Poppins',
    fontWeight: 600,
    fontSize: '40px',
    letterSpacing: '-1px',
    color: '#11142D',
    marginRight: '8px',
    lineHeight: '60px',
    outline: 'none',
    '&:focus': {
      borderBottom: '1px solid #11142D',
    },
  },
  '& > div:nth-of-type(2)': {
    display: 'block',
    position: 'relative',
    width: '24px',
    height: '24px',
    cursor: 'pointer',
  },
});

type Props = {
  // eslint-disable-next-line no-unused-vars
  onInput: (newTitle: string) => void;
  // eslint-disable-next-line no-unused-vars
  onClick: (element: HTMLDivElement) => void;
};

export default function Title({ onInput, onClick }: Props) {
  const inputRef = useRef<HTMLDivElement>(null);

  function handleInput(event: ChangeEvent<HTMLDivElement>) {
    onInput(event.target.textContent!);
  }

  function handleClick() {
    onClick(inputRef.current as HTMLDivElement);
  }

  return (
    <TitleControl>
      <div
        ref={inputRef}
        role='textbox'
        id='resume-title'
        suppressContentEditableWarning
        contentEditable='true'
        onInput={handleInput}
        aria-labelledby='title-control'
      >
        이력서 제목
      </div>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <div
        data-testid='title-control'
        id='title-control'
        role='button'
        tabIndex={0}
        onClick={handleClick}
        aria-label='resume-title-control'
      >
        <Image src='/edit/edit@3x.png' layout='fill' alt='title-control' />
      </div>
    </TitleControl>
  );
}
