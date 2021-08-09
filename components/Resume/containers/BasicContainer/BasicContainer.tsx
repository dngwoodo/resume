import useAppDispatch from '@/hooks/useAppDispatch';
import useAppSelector from '@/hooks/useAppSelector';

import { changeBasicField } from '@/redux/slice';

import Basic from '../../components/Basic';

export default function BasicContainer() {
  const dispatch = useAppDispatch();
  const { basic } = useAppSelector((state) => state.resume);

  function handleChange({ name, value }: { name: string; value: string }) {
    dispatch(changeBasicField({ name, value }));
  }

  const { name, occupation, email, phoneNumber, address, introduction } = basic;

  return (
    <Basic
      name={name}
      occupation={occupation}
      email={email}
      phoneNumber={phoneNumber}
      address={address}
      introduction={introduction}
      onChange={handleChange}
    />
  );
}
