import styled from '@emotion/styled';
import { InputWrapper } from '../Basic/style';

export const Container = styled.div(
  ({ isShowDetail }: { isShowDetail: boolean }) => ({
    position: 'relative',
    height: isShowDetail ? 'auto' : '80px',
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
  })
);

export const Title = styled.div(
  ({ isShowDetail }: { isShowDetail: boolean }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '32px',
    cursor: 'pointer',
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
      transform: isShowDetail ? 'rotate(180deg)' : '',
    },
  })
);

export const EmploymentHistoryDetail = styled.div(
  ({ isShowDetail }: { isShowDetail: boolean }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '40px 32px',
    height: isShowDetail ? 'auto' : '0px',
    overflow: 'hidden',
    '& > div': {
      '&:not(:last-child)': {
        width: 'calc(50% - 20px)',
      },
      '&:last-child': {
        width: '100%',
      },
    },
  })
);

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
