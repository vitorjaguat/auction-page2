import Link from 'next/link';
import Connect from './Connect';

export default function Section6CardItem({ instance }) {
  return (
    <>
      <Connect />
      <Link href={`/artwork/${instance}`}>
        <div
          data-widget='m-claim-complete'
          data-id='1045020912'
          data-network='1'
        ></div>
      </Link>
    </>
  );
}
