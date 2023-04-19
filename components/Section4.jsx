import Section4CardItem from './Section4CardItem';

const listingId = '5192';

export default function Section4() {
  return (
    <div className='w-screen'>
      <div className='h-16 w-full bg-black/80 sticky top-0 left-0 px-10 sm:px-20  z-10 flex items-center tracking-[6px] uppercase'>
        Click on learn more (2023)
      </div>
      <div className='w-full pt-20 pb-32 flex justify-center'>
        {/* {listingIds.map((listingId) => ( */}
        <div
          className='w-[800px] no-image rounded-sm bg-slate-900 h-fit'
          key={listingId}
        >
          <Section4CardItem id={listingId} />
        </div>
        {/* ))} */}
      </div>
    </div>
  );
}
