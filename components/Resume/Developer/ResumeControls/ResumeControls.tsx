import ProgressBarContainer from '../../containers/ProgressBarContainer';
import ThumbnailUploaderContainer from '../../containers/ThumbnailUploaderContainer';
import TitleContainer from '../../containers/TitleContainer';

export default function ResumeControls() {
  return (
    <>
      <TitleContainer />
      <ThumbnailUploaderContainer />
      <ProgressBarContainer />
    </>
  );
}
