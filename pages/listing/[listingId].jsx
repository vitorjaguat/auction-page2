import Connect from '../../components/Connect';
import Listing from '../../components/Listing';

export default function ListingID() {
  return (
    <div className=''>
      {/* -- Add Connect Widget -- */}
      <Connect network={process.env.NEXT_APP_NETWORK} />
      <br />

      {/* ~~ Add Marketplace Widget component ~~ */}
      <Listing
        id={5208}
        // network={process.env.NEXT_APP_NETWORK}
        // id={'4250'}
        network={'1'}
      />
    </div>
  );
}