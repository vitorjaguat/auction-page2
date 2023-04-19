export default function Footer() {
  return (
    <div className='h-full flex justify-between items-end py-10 px-6 md:px-8 bg-slate-900 text-sm'>
      <div className=''>
        <div className=''>site do antílope</div>
        <div className=''>site da galeria</div>
        <div className=''>outros links, ig, twitter, etc.</div>
      </div>
      <div className='h-full flex flex-col justify-end text-right'>
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
      </div>
    </div>
  );
}
