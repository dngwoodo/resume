import { useState } from 'react';

import Title from '@/components/Resume/components/Title';

export default function TitleContainer() {
  // eslint-disable-next-line no-unused-vars
  const [title, setTitle] = useState<string>('이력서 제목');

  function handleInputTitle(newTitle: string) {
    setTitle(newTitle);
  }

  function handleClickInputControlFocus(element: HTMLElement) {
    element.focus();
  }

  return (
    <Title onInput={handleInputTitle} onClick={handleClickInputControlFocus} />
  );
}
