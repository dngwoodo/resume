import Title from '@/components/Resume/components/Title';

import { setTitle } from '@/redux/slice';

export default function TitleContainer() {
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
