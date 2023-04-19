import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className='w-screen h-screen relative'>
      <div className='uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl sticky max-w-[30px] sm:max-w-none top-0 p-4'>
        MORE ABSTRACT
      </div>

      <Link
        href='https://www.portasvilaseca.com.br'
        target='_blank'
        rel='noopener noreferrer'
      >
        <div className='absolute p-8 top-2 sm:top-4 flex right-2 sm:right-4 w-[120px] sm:w-[140px] h-[150px] sm:h-[180px]'>
          <Image src='/img/logo-pvg.png' fill className='object-cover' />
        </div>
      </Link>
    </div>
  );
}
