import React from 'react';

import Image from 'next/image';
import ContainerWrapper from '@/src/app/container';

const MainHeader = () => {
  return (
    <section className='relative'>
      <ContainerWrapper>
        <div className='flex justify-between items-start'>
          <div className='flex flex-col pt-[263px] mr-[488px] w-full z-2'>
            <span className='text-2xl uppercase mb-[30px]'>Digital АГЕНТСТВО ПОЛНОГО ЦИКЛА</span>
            <div className='h-[168px] w-px bg-black mb-[30px]' />
            <h1 className='text-5xl'>
              Ваш
              <br />
              Доверенный партнёр
              <br />
              Веб и Мобильной разработки
            </h1>
          </div>
          <div className='block h-[797px] w-screen fixed overflow-hidden -z-1 md:hidden'>
            <Image src={'/images/brain-m.png'} priority objectFit={'cover'} quality={100} layout={'fill'} width={375}
                   height={792} />
          </div>
          <div className='hidden md:block absolute right-0 top-0'>
            <Image src={'/images/brain.png'} objectFit={'contain'} width={488} height={944} />
          </div>
        </div>
      </ContainerWrapper>

    </section>
  );
};

export default MainHeader;