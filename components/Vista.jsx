import vista2 from '../public/img/vistas/002.jpg';
import Image from 'next/image';

export default function Vista() {
  return (
    <div className='w-screen overflow-hidden h-fit max-h-[800px]'>
      <Image src={vista2} alt='Exhibition view' className='object-cover' />
    </div>
  );
}
