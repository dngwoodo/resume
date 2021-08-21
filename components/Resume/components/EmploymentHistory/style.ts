import styled from '@emotion/styled';
import { InputWrapper, TextAreaWrapper } from '../Basic/style';

export const Container = styled.div({
  position: 'relative',
  marginBottom: '16px',
  padding: '18px 24px',
  border: '1px solid #E4E4E4',
  borderRadius: '8px',
  '& > button': {
    all: 'unset',
    position: 'absolute',
    right: '-34px',
    width: '25px',
    height: '25px',
    borderRadius: '50%',
    background: '#E3E6EC',
    cursor: 'pointer',
    '& div': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '11px',
      height: '1.1px',
      transform: 'translate(-50%, -50%)',
      background: '#fff',
    },
  },
});

export const CheckBox = styled.input({
  position: 'absolute',
  opacity: 0,
  zIndex: -1,
  '&:checked': {
    '& ~ div': {
      maxHeight: '637px',
    },
    '& ~ label': {
      marginBottom: '32px',
      '& button': {
        transform: 'rotate(180deg)',
      },
    },
  },
});

export const Title = styled.label({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '44px',
  marginBottom: 0,
  cursor: 'pointer',
  transition: 'margin-bottom .3s',
  '> div': {
    '& p': {
      color: '#B2B3BD',
      fontFamily: 'Inter',
      fontWeight: 500,
      fontSize: '12px',
      lineHeight: '16px',
      '&:nth-of-type(1)': {
        color: '#11142D',
        fontFamily: 'Inter',
        fontWeight: 600,
        fontSize: '14px',
        lineHeight: '20px',
        marginBottom: '8px',
      },
    },
  },
  '& button': {
    all: 'unset',
    position: 'relative',
    width: '24px',
    height: '24px',
    zIndex: -1,
    transition: 'transform .3s',
  },
});

export const Detail = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '40px 32px',
  maxHeight: 0,
  overflow: 'hidden',
  transition: 'max-height .3s',
  '& > div': {
    '&:not(:last-child)': {
      width: 'calc(50% - 20px)',
    },
    '&:last-child': {
      width: '100%',
    },
  },
});

export const PeriodInputWrapper = styled(InputWrapper)({
  '& div': {
    display: 'flex',
    '& input': {
      width: 'calc(50% - 4px)',
      '&:nth-of-type(1)': {
        marginRight: '8px',
      },
    },
  },
});

export const TextAreaContainer = styled(TextAreaWrapper)({
  '& label': {
    marginBottom: '16px',
    color: '#B2B3BD',
    fontSize: '12px',
    fontFamily: 'Inter',
    fontWeight: 500,
    lineHeight: '16px',
  },
});
