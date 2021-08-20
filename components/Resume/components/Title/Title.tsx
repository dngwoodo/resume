import Image from 'next/image';

import styled from '@emotion/styled';
import { ChangeEvent, useRef } from 'react';

const Container = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '80px',
  '& > div:nth-of-type(1)': {
    height: '60px',
    marginRight: '8px',
    color: '#11142D',
    fontSize: '40px',
    fontFamily: 'Poppins',
    fontWeight: 600,
    outline: 'none',
    lineHeight: '60px',
    letterSpacing: '-1px',
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
  onInput: (newTitle: string) => void;
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
    <Container>
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
    </Container>
  );
}
