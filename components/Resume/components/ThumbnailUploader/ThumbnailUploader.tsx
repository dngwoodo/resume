import styled from '@emotion/styled';
import Image from 'next/image';

const Container = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  width: '432px',
  height: '80px',
});

const ImageWrapper = styled.div({
  position: 'relative',
  width: '64px',
  height: '64px',
  borderRadius: '50%',
});

const RightSide = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  fontFamily: 'Inter',
  '& div': {
    '& button': {
      width: '166px',
      height: '40px',
      border: 'none',
      borderRadius: '16px',
      backgroundColor: '#E4E4E4',
      color: '#11142D',
      fontSize: '14px',
      fontWeight: 'bold',
      outline: 'none',
      cursor: 'pointer',
      '&:nth-of-type(1)': {
        marginRight: '16px',
        backgroundColor: '#6C5DD3',
        color: '#fff',
      },
    },
  },
  '& p': {
    fontSize: '14px',
    color: '#B2B3BD',
    lineHeight: '24px',
  },
});

export default function ThumbnailUploader() {
  return (
    <Container>
      <ImageWrapper>
        <Image
          src='/avatar/resume.png'
          alt='avatar'
          layout='fill'
          objectFit='cover'
        />
      </ImageWrapper>
      <RightSide>
        <div>
          <button type='button'>사진 변경</button>
          <button type='button'>사진 삭제</button>
        </div>
        <p>프로필 사진을 업로드 해주세요.</p>
      </RightSide>
    </Container>
  );
}
