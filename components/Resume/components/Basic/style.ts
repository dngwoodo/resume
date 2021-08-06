import styled from '@emotion/styled';

export const Container = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '40px 32px',
  marginBottom: '80px',
  '& > div': {
    '&:not(:last-child)': {
      width: 'calc(50% - 20px)',
    },
    '&:last-child': {
      width: '100%',
    },
  },
});

export const InputWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  '& label': {
    marginBottom: '16px',
    color: '#B2B3BD',
    fontSize: '12px',
    fontFamily: 'Inter',
    fontWeight: 500,
    lineHeight: '16px',
  },
  '& input': {
    height: '56px',
    padding: '0 24px',
    borderRadius: '8px',
    border: '2px solid transparent',
    background: 'rgba(228,228,228, 0.3)',
    color: '#11142D',
    fontSize: '14px',
    fontFamily: 'Inter',
    fontWeight: 600,
    lineHeight: '20px',
    outline: 'none',
    '&:focus': {
      border: '2px solid #6C5DD3',
      background: '#fff',
      opacity: 1,
    },
    '&::placeholder': {
      color: '#B2B3BD',
      fontSize: '14px',
      fontFamily: 'Inter',
      fontWeight: 600,
      lineHeight: '20px',
    },
  },
});

export const TextAreaWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  '& label': {
    marginBottom: '16px',
    color: '#11142D',
    fontSize: '18px',
    fontFamily: 'Popins',
    fontWeight: 500,
    lineHeight: '24px',
  },
  '& textarea': {
    height: '240px',
    padding: '18px 24px',
    borderRadius: '8px',
    border: '2px solid transparent',
    background: 'rgba(228,228,228, 0.3)',
    color: '#11142D',
    fontSize: '14px',
    fontFamily: 'Inter',
    fontWeight: 600,
    lineHeight: '20px',
    outline: 'none',
    resize: 'none',
    '&:focus': {
      border: '2px solid #6C5DD3',
      background: '#fff',
      opacity: 1,
    },
    '&::placeholder': {
      color: '#B2B3BD',
      fontSize: '14px',
      fontFamily: 'Inter',
      fontWeight: 600,
      lineHeight: '20px',
    },
  },
});
