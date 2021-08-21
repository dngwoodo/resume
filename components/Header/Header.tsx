/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import Image from 'next/image';
import Link from 'next/link';

import MENUS from '@/fixtures/menus';
import { Container, Logo, Menus, Menu, Account } from './style';

export default function Header({ onClick, selectedMenuIndex }: { onClick: any; selectedMenuIndex: number }) {
  return (
    <Container>
      <Logo>
        <Image src='/logo/logo@3x.png' alt='logo' layout='fill' objectFit='cover' />
      </Logo>
      <Menus>
        {MENUS.map(({ title, link }, index) => (
          <Menu key={title} isMenuSelected={selectedMenuIndex === index}>
            <Link href={link} passHref>
              <a href='replace' onClick={onClick(index)}>
                {title}
              </a>
            </Link>
          </Menu>
        ))}
      </Menus>
      <Account>
        <div>
          <Image src='/avatar/avatar@3x.png' alt='avatar' layout='fill' objectFit='cover' />
        </div>
        <h6>Tam Tran</h6>
      </Account>
    </Container>
  );
}
