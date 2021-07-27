import { useState } from 'react';

import ResumeTitle from '@/components/ResumeTitle';

export default function ResumeTitleContainer() {
  // eslint-disable-next-line no-unused-vars
  const [title, setTitle] = useState<string>('이력서 제목');

  function handleInputTitle(newTitle: string) {
    setTitle(newTitle);
  }

  function handleClickInputControlFocus(element: HTMLElement) {
    element.focus();
  }

  return (
    <ResumeTitle
      onInput={handleInputTitle}
      onClick={handleClickInputControlFocus}
    />
  );
}
