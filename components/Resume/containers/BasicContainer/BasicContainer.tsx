import useAppDispatch from '@/hooks/useAppDispatch';
import useAppSelector from '@/hooks/useAppSelector';

import { changeBasicField } from '@/redux/slice';
import { Basic as BasicType, InputName } from '@/types/Resume';

import Basic from '../../components/Basic';

export default function BasicContainer() {
  const dispatch = useAppDispatch();
  const basic = useAppSelector((state) => state.resume);

  function handleChange({
    name,
    value,
  }: {
    name: InputName<BasicType>;
    value: string;
  }) {
    dispatch(changeBasicField({ name, value }));
  }

  return <Basic basic={basic} onChange={handleChange} />;
}
