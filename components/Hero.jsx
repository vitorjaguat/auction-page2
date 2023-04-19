import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className='w-screen h-screen relative'>
      <div className='uppercase text-7xl sticky top-0 p-4'>MORE ABSTRACT</div>

      <div className='absolute p-4 top-0 flex right-0'>
        <Link
          href='https://www.portasvilaseca.com.br'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image src='/img/logo-pvg.png' width={140} height={140} />
        </Link>
      </div>
    </div>
  );
}
