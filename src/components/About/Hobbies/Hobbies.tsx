import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../UI/Card/Card';
import ChessLogo from '../../Logo/Logos/ChessLogo';
import NihongoLogo from '../../Logo/Logos/NihongoLogo';
import BookLogo from '../../Logo/Logos/BookLogo';
import './Hobbies.scss';

enum Hobby {
  Chess = 'Chess',
  Japanese = 'Japanese',
  Reading = 'Reading',
}

function Hobbies() {
  const [currentHobby, setCurrentHobby] = useState(Hobby.Chess);

  const handleFactChange = (hobby: Hobby) => {
    setCurrentHobby(hobby);
  };

  const factOptions = (
    <div className='hobbies text-color-gray'>
      {Object.keys(Hobby).map((hobby: string) => {
        const classes = ['hobby'];
        if (hobby === currentHobby) classes.push('active');

        return (
          <div
            key={hobby}
            className={classes.join(' ')}
            onClick={() => handleFactChange(Hobby[hobby as keyof typeof Hobby])}
          >
            {hobby}
          </div>
        );
      })}
    </div>
  );

  const getInfoClasses = (hobby: Hobby) => {
    const classes: string[] = [Hobby[hobby]];
    if (Hobby[hobby] === Hobby[currentHobby]) classes.push('active');
    return classes.join(' ');
  };

  return (
    <Card id='hobbies' title='Hobbies'>
      {factOptions}
      <div className='info text-color-gray'>
        <div className={getInfoClasses(Hobby.Chess)}>
          <ChessLogo />
          <p>
            I'm an avid chess player. I'm currently around 1750 in rapid time
            control and play pretty frequently on{' '}
            <a
              href='https://www.chess.com/member/gattlinwalker3'
              target='_blank'
              rel='noreferrer'
            >
              chess.com
            </a>
            . My favorite opening is the Caro-Kann Defense. Currently, I am
            building a <Link to='/experience#River'>chess engine</Link> in Rust
            that is designed for speed and high accuracy move generation.
          </p>
        </div>
        <div className={getInfoClasses(Hobby.Japanese)}>
          <NihongoLogo />
          <p>
            I spent a semester abroad in Tokyo, Japan studying Japanese. I
            traveled there with my wife and studied at KCP International
            Language School. During my time there, I was exposed so much
            Japanese culture and was very immersed in the language. Since that
            semester I have been back once and plan to in the future.
          </p>
        </div>
        <div className={getInfoClasses(Hobby.Reading)}>
          <BookLogo />
          <p>
            I enjoy reading a wide array of books. My all time favorite genre is
            fantasy though. I really enjoy reading because it is a good way for
            me to wind down and relax in the evening.
          </p>
        </div>
      </div>
    </Card>
  );
}

export default Hobbies;
