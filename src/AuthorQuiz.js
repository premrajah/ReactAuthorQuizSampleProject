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

function Turn() {
  return <div></div>;
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
