import Link from 'next/link';

export default function Section6CardItem({ id }) {
  return (
    <Link href={`/artwork/${id}`}>
      <div data-widget='m-card-catalog' data-id={id} data-network='1'></div>
    </Link>
  );
}
