import { BsInstagram, BsTwitter } from 'react-icons/bs';
import logoFarcaster from '../public/img/logo-farcaster.svg';

export default function Footer() {
  return (
    <div className='h-full flex justify-between items-center py-10 px-6 md:px-8 bg-slate-900 text-sm'>
      <div className='flex flex-col justify-center'>
        <div className='flex items-center'>
          <a
            href='http://pedrovictor.com.br'
            target='_blank'
            rel='noopener noreferrer'
            className='mr-2'
          >
            pedrovictor.com.br
          </a>
          <a
            href='https://twitter.com/pierresacoman'
            target='_blank'
            rel='noopener noreferrer'
            className='mr-2'
          >
            <BsTwitter />
          </a>
          <a
            href='https://instagram.com/pedr_vict_r'
            target='_blank'
            rel='noopener noreferrer'
            className='mr-2'
          >
            <BsInstagram />
          </a>
          <a
            href='https://fcast.me/pedrovictor'
            target='_blank'
            rel='noopener noreferrer'
            className='mr-2 w-3 h-3'
          >
            <img src='/img/logo-farcaster.svg' alt='farcaster' />
          </a>
        </div>
        <div className='flex items-center'>
          <a
            href='http://portasvilaseca.com.br'
            target='_blank'
            rel='noopener noreferrer'
            className='mr-2'
          >
            portasvilaseca.com.br
          </a>
          <a
            href='https://twitter.com/portasvilaseca'
            target='_blank'
            rel='noopener noreferrer'
            className='mr-2'
          >
            <BsTwitter />
          </a>
          <a
            href='https://instagram.com/portasvilaseca'
            target='_blank'
            rel='noopener noreferrer'
            className='mr-2'
          >
            <BsInstagram />
          </a>
        </div>
      </div>
      <div className='h-full flex flex-col justify-center text-right'>
        <div className=''>
          powered by{' '}
          <a
            href='http://www.manifold.xyz'
            target='_blank'
            rel='noopener noreferrer'
          >
            Manifold
          </a>
        </div>
        <div className=''>developed by Vitor Butkus</div>
        <div className=''>2023</div>
      </div>
    </div>
  );
}
