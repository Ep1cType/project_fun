import React from 'react';

//components
import Container from '../container';

const Header = () => {
  return (
    <header className='bg-amber-300'>
      <Container>
        <div className='h-[64px]'>
          <div className='h-[100%] w-auto'>
            {/*<Image objectFit={'cover'} src={'/images/logo.png'} width={333} height={166} />*/}
            <nav className='h-[100%] flex items-center'>
              <ul className='flex'>
                <li>Главная</li>
                <li>Главная</li>
                <li>Главная</li>
                <li>Главная</li>
              </ul>
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
