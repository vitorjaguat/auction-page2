import Section5CardItem from './Section5CardItem';

const listingIds = [5196, 5197, 5198, 5199, 5200];

export default function Section5() {
  return (
    <div className='w-screen'>
      <div className='h-16 w-full bg-black/80 sticky top-0 left-0 px-10 sm:px-20  z-10 flex items-center tracking-[6px]'>
        Cloud, Continent, Island
      </div>
      <div className='w-full py-32 px-10 sm:px-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {listingIds.map((listingId) => (
          <div className='rounded-sm bg-slate-900 h-fit' key={listingId}>
            <Section5CardItem id={listingId} />
          </div>
        ))}
      </div>
    </div>
  );
}
