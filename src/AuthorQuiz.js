import React from 'react';
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

function Turn({ author, books }) {
  return (
    <div className='row Turn' style={{ backgroundColor: 'white' }}>
      <div className='col-4 offset-1'>
        <img src={author.imageUrl} className='authorimage' alt='Author' />
      </div>

      <div className='col-6'>
        {books.map((title) => (
          <p>{title}</p>
        ))}
      </div>
    </div>
  );
}

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

function AuthorQuiz() {
  return (
    <div className='container-fluid'>
      <Hero />
      <Turn />
      <Continue />
      <Footer />
    </div>
  );
}

export default AuthorQuiz;
