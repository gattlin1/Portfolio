import React from 'react';
import { Link } from 'react-router-dom';
import ChessLogo from '../../Logo/Logos/ChessLogo';
import NihongoLogo from '../../Logo/Logos/NihongoLogo';
import BookLogo from '../../Logo/Logos/BookLogo';
import Tab from '../../UI/Tab/Tab';

function Hobbies() {
  const hobbies = {
    chess: {
      title: 'Chess',
      description: (
        <>
          <ChessLogo />
          <p>
            I'm an avid chess player. I'm currently around 1750 in rapid time
            control and play pretty frequently on{' '}
            <a
              className='bolded-link'
              href='https://www.chess.com/member/gattlinwalker3'
              target='_blank'
              rel='noreferrer'
            >
              chess.com
            </a>
            . My favorite opening is the Caro-Kann Defense. Currently, I am
            building a{' '}
            <Link className='bolded-link' to='/experience#River'>
              chess engine
            </Link>{' '}
            in Rust that is designed for speed and high accuracy move
            generation.
          </p>
        </>
      ),
    },
    japanese: {
      title: 'Japanese',
      description: (
        <>
          <NihongoLogo />
          <p>
            I spent a semester abroad in Tokyo, Japan studying Japanese. I
            traveled there with my wife and studied at KCP International
            Language School. During my time there, I was exposed so much
            Japanese culture and was very immersed in the language. Since that
            semester I have been back once and plan to in the future and still
            enjoy studying the language.
          </p>
        </>
      ),
    },
    reading: {
      title: 'Reading',
      description: (
        <>
          <BookLogo />
          <p>
            I enjoy reading a wide array of books. My all time favorite genre is
            fantasy though. I really enjoy reading because it is a good way for
            me to wind down and relax in the evening.
          </p>
        </>
      ),
    },
  };

  return <Tab title='Hobbies' tabs={hobbies} className='border-top'></Tab>;
}

export default Hobbies;
