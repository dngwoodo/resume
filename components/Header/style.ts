import styled from '@emotion/styled';

export const Container = styled.header({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '112px',
  padding: '0 40px',
  fontFamily: 'Inter',
});

export const Logo = styled.div({
  position: 'relative',
  verticalAlign: 'bottom',
  width: '176px',
  height: '40px',
});

export const Menus = styled.ul({
  display: 'flex',
});

export const Menu = styled.li(
  ({ isMenuSelected }: { isMenuSelected: boolean }) => ({
    fontWeight: 600,
    lineHeight: '20px',
    '&:not(:last-child)': {
      marginRight: '60px',
    },
    '& a': {
      textDecoration: 'none',
      color: isMenuSelected ? '#5F75EE' : '#808191',
    },
  })
);

export const Account = styled.div({
  display: 'flex',
  '& div': {
    position: 'relative',
    verticalAlign: 'bottom',
    width: '40px',
    height: '40px',
  },
  '& h6': {
    marginLeft: '16px',
    fontSize: '0.875rem',
    lineHeight: '40px',
  },
});
