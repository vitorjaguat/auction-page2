import Section6CardItem from './Section6CardItem';

const listingIds = [5196, 5197, 5198, 5199, 5200];

export default function Section6() {
  return (
    <div className='w-screen'>
      <div className='h-16 w-full bg-black/80 sticky top-0 left-0 px-10 sm:px-20  z-10 flex items-center tracking-[6px]'>
        Faucet (2023)
      </div>
      <div className='w-full  pt-20 pb-32 px-10 sm:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {listingIds.map((listingId) => (
          <div className='rounded-sm bg-slate-900 h-fit' key={listingId}>
            <Section6CardItem id={listingId} />
          </div>
        ))}
      </div>
    </div>
  );
}
