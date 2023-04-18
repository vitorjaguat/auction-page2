import Section3CardItem from './Section3CardItem';

const listingIds = [
  5155, 5156, 5157, 5158, 5159, 5160, 5161, 5163, 5164, 5165, 5166, 5167, 5168,
  5169, 5170, 5171, 5172, 5173, 5174, 5175, 5176, 5177, 5178, 5179, 5180, 5181,
  5182, 5183, 5184, 5185, 5186, 5187, 5188, 5189, 5190, 5191,
];

export default function Section3() {
  return (
    <div className='mt-32 w-screen'>
      <div className='h-16 w-full bg-black/80 sticky top-0 left-0 px-10 sm:px-20  z-10 flex items-center tracking-[6px]'>
        View to nothingness
      </div>
      <div className='w-full py-32 px-10 sm:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {listingIds.map((listingId) => (
          <div className='rounded-sm bg-slate-900 h-fit' key={listingId}>
            <Section3CardItem id={listingId} />
          </div>
        ))}
      </div>
    </div>
  );
}
