import React from 'react';
import PropTypes from 'prop-types';
import './AuthorQuiz.css';
import './bootstrap.min.css';

function Hero() {
  return (
    <div className='row'>
      <div className='jumbotron col-10 offset-1'>
        <h1>Author Quiz</h1>
        <p>Select the book written by the author shown</p>
      </div>
    </div>
  );
}

function Book({ title, onClick }) {
  return (
    <div
      className='answer p-3'
      onClick={() => {
        onClick(title);
      }}>
      <h4>{title}</h4>
    </div>
  );
}

function Turn({ author, books, highlight, onAnswerSelected }) {
  function highlightToBgColor(highlight) {
    const mapping = {
      none: '',
      correct: 'green',
      wrong: 'red',
    };

    return mapping[highlight];
  }

  return (
    <div className='row turn p-2' style={{ backgroundColor: highlightToBgColor(highlight) }}>
      <div className='col-4 offset-1 turn-img-wrapper'>
        <img src={author.imageUrl} className='authorimage' alt='Author' />
      </div>

      <div className='col-6 d-flex align-items-center'>
        <div style={{ width: '100%' }}>
          {books.map((title) => (
            <Book title={title} key={title} onClick={onAnswerSelected} />
          ))}
        </div>
      </div>
    </div>
  );
}

Turn.propTypes = {
  author: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  books: PropTypes.arrayOf(PropTypes.string).isRequired,
  highlight: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func,
};

function Continue() {
  return <div></div>;
}

function Footer() {
  return (
    <div className='row' id='footer'>
      <div className='col-12'>
        <p className='text-muted credit'>
          All images are from <a href='https://commons.wikimedia.org/wiki/Main_Page'>Wikimedia Commons</a> and are in
          public domain
        </p>
      </div>
    </div>
  );
}

function AuthorQuiz({ turnData, highlight, onAnswerSelected }) {
  return (
    <div className='container-fluid'>
      <Hero />
      <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected} />
      <Continue />
      <Footer />
    </div>
  );
}

export default AuthorQuiz;
