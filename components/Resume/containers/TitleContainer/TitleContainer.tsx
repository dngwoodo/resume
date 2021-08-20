import Title from '@/components/Resume/components/Title';

import { changeTitle } from '@/redux/slice';

export default function TitleContainer() {
  function handleInputTitle(newTitle: string) {
    changeTitle(newTitle);
  }

  function handleClickInputControlFocus(element: HTMLElement) {
    element.focus();
  }

  return (
    <Title onInput={handleInputTitle} onClick={handleClickInputControlFocus} />
  );
}
