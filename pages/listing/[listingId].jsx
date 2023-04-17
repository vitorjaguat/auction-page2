export default function Listing() {
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
