import styled from '@emotion/styled';

const Container = styled.div({
  marginBottom: '80px',
  '> h5': {
    marginBottom: '8px',
    color: '#11142D',
    fontSize: '24px',
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    lineHeight: '32px',
  },
  '> p': {
    marginBottom: '40px',
    color: '#B2B3BD',
    fontSize: '12px',
    fontFamily: 'Inter',
    fontWeight: 500,
    lineHeight: '16px',
  },
  '> ul': {
    marginBottom: '24px',
  },
  '> button': {
    all: 'unset',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '& > div': {
      position: 'relative',
      width: '25px',
      height: '25px',
      marginRight: '6.2px',
      borderRadius: '50%',
      backgroundColor: '#E3E6EC',
      '&  > div': {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '11px',
        height: '11px',
        transform: 'translate(-50%, -50%)',
      },
    },
    '& > span': {
      color: '#11142D',
      fontSize: '14px',
      fontFamily: 'Inter',
      fontWeight: 600,
      lineHeight: '20px',
    },
  },
});

export default Container;
