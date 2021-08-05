import styled from '@emotion/styled';
import Image from 'next/image';

const Top = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '10px',
});

const Bottom = styled.div({
  '& div': {
    position: 'relative',
    height: '4px',
    backgroundColor: '#E4E4E4',
    '&:before': {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '4px',
      width: '200px',
      backgroundColor: '#6C5DD3',
      content: '""',
    },
  },
});

const Side = styled.div({
  display: 'flex',
  alignItems: 'center',
  '& span': {
    marginRight: '4px',
    fontFamily: 'Inter',
    fontWeight: 600,
    lineHeight: '19px',
    '&:nth-of-type(1)': {
      color: '#6C5DD3',
    },
    '&:nth-of-type(2)': {
      color: '#B2B3BD',
    },
  },
});

const ImageWrapper = styled.div({
  position: 'relative',
  width: '24px',
  height: '24px',
  cursor: 'pointer',
});

export default function ProgressBar() {
  return (
    <div>
      <Top>
        <Side>
          <span>35%</span>
          <span>프로필 완성도</span>
        </Side>
        <Side>
          <span>10%</span>
          <span>프로필 추가 요약</span>
          <ImageWrapper>
            <Image src='/assets/question-mark.png' layout='fill' alt='help' />
          </ImageWrapper>
        </Side>
      </Top>
      <Bottom>
        <div data-testid='progress-bar' />
      </Bottom>
    </div>
  );
}
