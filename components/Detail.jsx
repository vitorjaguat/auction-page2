import Image from 'next/image';
import detail1 from '../public/img/002_detail.jpg';
import { useParallax } from 'react-scroll-parallax';

export default function Detail() {
  const { ref } = useParallax({
    speed: -5,
  });

  return (
    <div className='w-screen h-40 overflow-hidden'>
      <div className='w-screen h-60' ref={ref}>
        <Image
          src={detail1}
          //   width={2000}
          //   height={500}
          fill
          className='object-cover -translate-y-3'
          unoptimized
        />
      </div>
    </div>
  );
}
