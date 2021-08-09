import { useEffect } from 'react';

import { loadResume } from '@/redux/thunks';

import useAppDispatch from '@/hooks/useAppDispatch';

import TitleContainer from '../../containers/TitleContainer';
import ThumbnailUploaderContainer from '../../containers/ThumbnailUploaderContainer';
import ProgressBarContainer from '../../containers/ProgressBarContainer';
import BasicContainer from '../../containers/BasicContainer';
import CareersContainer from '../../containers/CareersContainer';

export default function ResumeControls() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadResume());
  });

  return (
    <>
      <TitleContainer />
      <ThumbnailUploaderContainer />
      <ProgressBarContainer />
      <BasicContainer />
      <CareersContainer />
    </>
  );
}
