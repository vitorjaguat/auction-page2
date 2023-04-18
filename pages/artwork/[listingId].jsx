import Connect from '../../components/Connect';
import Listing from '../../components/Listing';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function ListingID() {
  const router = useRouter();
  const listingId = router.query.listingId;

  return (
    <div className=''>
      {/* -- Add Connect Widget -- */}
      <div className='flex w-full justify-between p-4'>
        <div
          onClick={() => router.push('/')}
          className='h-fit cursor-pointer rounded-lg border-[0.5px] py-3 px-5 hover:text-slate-400 hover:bg-slate-900 text-sm'
        >
          back
        </div>

        <Connect network='1' />
      </div>

      {/* ~~ Add Marketplace Widget component ~~ */}
      <Listing
        id={listingId}
        // network={process.env.NEXT_APP_NETWORK}
        // id={'4250'}
        network={'1'}
      />
      <div className='flex w-full items-end justify-between p-4 pt-16'>
        <div
          onClick={() => router.push('/')}
          className='h-fit cursor-pointer rounded-lg border-[0.5px] py-3 px-5 hover:text-slate-400 hover:bg-slate-900 text-sm'
        >
          back
        </div>

        <Connect network='1' />
      </div>
    </div>
  );
}
