import Image from 'next/image';

export default function Hero() {
  return (
    <div className='w-screen h-[80vh] flex justify-center items-center relative'>
      Capa
      <div className='absolute p-4 top-0 right-0'>
        <Image src='/img/logo-pvg.png' width={80} height={80} />
      </div>
    </div>
  );
}
