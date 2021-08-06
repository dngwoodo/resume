import TitleContainer from '../../containers/TitleContainer';
import ThumbnailUploaderContainer from '../../containers/ThumbnailUploaderContainer';
import ProgressBarContainer from '../../containers/ProgressBarContainer';
import BasicContainer from '../../containers/BasicContainer';

export default function ResumeControls() {
  return (
    <>
      <TitleContainer />
      <ThumbnailUploaderContainer />
      <ProgressBarContainer />
      <BasicContainer />
    </>
  );
}
