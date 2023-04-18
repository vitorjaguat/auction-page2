import Connect from '../../components/Connect';
import Listing from '../../components/Listing';
import { useRouter } from 'next/router';

export default function ListingID() {
  const router = useRouter();
  const listingId = router.query.listingId;

  return (
    <div className=''>
      {/* -- Add Connect Widget -- */}
      <div className='flex w-full justify-center p-4'>
        <Connect network='1' />
      </div>

      {/* ~~ Add Marketplace Widget component ~~ */}
      <Listing
        id={listingId}
        // network={process.env.NEXT_APP_NETWORK}
        // id={'4250'}
        network={'1'}
      />
    </div>
  );
}
