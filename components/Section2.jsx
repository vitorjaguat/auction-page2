import Link from 'next/link';

export default function Section2() {
  return (
    <div>
      <div className='flex flex-col justify-center items-center w-screen bg-slate-900'>
        <div className='max-w-[1000px] py-40 px-10 md:px-20 flex justify-center items-center bg-slate-900'>
          <div className=' leading-8 uppercase'>
            <div className='mb-6'>
              <span className='font-bold'>Portas Vilaseca</span> presents{' '}
              <span className='font-bold'>Pedro Victor Brandão</span>'s third
              solo exhibition at the gallery, titled MORE ABSTRACT, from April
              26 to June 24, 2023. The show features 50 works from five series
              created between 2008 and 2023, exploring chemical, optical, and
              economic phenomena.
            </div>
            <div className='mb-6'>
              The ground floor displays the complete set of unique chemical
              paintings from the series{' '}
              <a href='#view'>
                <span className='font-bold'>View to nothingness</span>
              </a>
              , alongside with a large-format print of one of these originals.
              The second floor is dedicated to geometric abstractions, including
              the interactive work{' '}
              <a href='#faucet'>
                <span className='font-bold'>Faucet</span>
              </a>{' '}
              from the series <span className='font-bold'>Prepared screen</span>
              , and six new paintings from the series{' '}
              <span className='font-bold'>Totalities</span>.
            </div>
            <div className='mb-6'>
              The staircase leading to the third floor houses the sound
              installation{' '}
              <a href='#click'>
                <span className='font-bold'>Click on learn more</span>
              </a>{' '}
              from the series <span className='font-bold'>Detremura</span>, with
              disturbing ads aired on social networks.
            </div>
            <div className='mb-6'>
              The third floor showcases the films from the series{' '}
              <a href='#cloud'>
                <span className='font-bold'>Cloud, Continent, Island</span>
              </a>{' '}
              and serves as a space for discussions and presentations.
            </div>
            <div className='mb-6'>
              All works, except for the paintings on the second floor, have been
              tokenized as non-fungible tokens (NFTs) accessible through this
              website. <span className='font-bold'>Natália Quinderé</span>'s
              critical essay highlights Pedro's financial abstractionism
              practiced within and outside the arts.
            </div>
            <div className='mb-6'>
              You’ll find the full documentation in english about the exhibition{' '}
              <a
                className='cursor-pointer font-bold'
                href='#'
                target='_blank'
                rel='noopener noreferrer'
              >
                here
              </a>
              , in portuguese{' '}
              <a
                className='cursor-pointer font-bold'
                href='#'
                target='_blank'
                rel='noopener noreferrer'
              >
                here
              </a>
              .
            </div>
            <div className='mb-6'>
              Got any doubts? Visit the{' '}
              <Link className='font-bold' href='/faq'>
                FAQ
              </Link>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
