import ResumeControls from '@/components/Resume/Developer/ResumeControls';
import PdfViewer from '@/components/Resume/Developer/PdfViewer';
import styled from '@emotion/styled';

const Container = styled.div({
  display: 'flex',
  width: '100%',
});

const LeftSide = styled.div({
  width: '50%',
});

const RightSide = styled.div({
  width: '50%',
});

export default function Resume() {
  return (
    <Container>
      <LeftSide>
        <ResumeControls />
      </LeftSide>
      <RightSide>
        <PdfViewer />
      </RightSide>
    </Container>
  );
}
