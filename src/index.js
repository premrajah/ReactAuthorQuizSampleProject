import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';
import { shuffle, sample } from 'underscore';

const authors = [
  {
    id: '1',
    name: 'Mark Twain',
    imageUrl: 'images/authors/marktwain.jpg',
    imageSource: 'Wikimedia Commons',
    books: [
      'The Adventures of Huckleberry Finn',
      'Roughing It',
      'The Mysterious Stranger',
      'The Adventures of Tom Sawyer',
    ],
  },
  {
    id: '2',
    name: 'Joseph Conrad',
    imageUrl: 'images/authors/josephconrad.png',
    imageSource: 'Wikimedia Commons',
    books: ['Heart Of Darkness'],
  },
  {
    id: '3',
    name: 'J. R. R. Tolkien',
    imageUrl: 'images/authors/jrrtolkien.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['The Lord of the Rings', 'The Hobbit'],
  },
  {
    id: '4',
    name: 'Jane Austen',
    imageUrl: 'images/authors/janeausten.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['Pride and Prejudice', ' Persuasion'],
  },
  {
    id: '5',
    name: 'Charlotte Bronte',
    imageUrl: 'images/authors/charlottebronte.png',
    imageSource: 'Wikimedia Commons',
    books: ['Jane Eyre', 'Shirley', 'Villette'],
  },
  {
    id: '6',
    name: 'William Shakespeare',
    imageUrl: 'images/authors/williamshakespeare.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['Romeo and Juliet', 'Hamlet', 'Macbeth'],
  },
];

// Application state
const state = {
  turnData: getTurnData(authors),
};

function getTurnData(authors) {
  // join all book collections into one
  const allBooks = authors.reduce((accumulator, current) => {
    return accumulator.concat(current.books);
  }, []);

  const randomBooks = shuffle(allBooks).slice(0, 4);
  const answer = sample(randomBooks);

  return {
    books: randomBooks,
    author: authors.find((author) => author.books.some((title) => title === answer)),
  };
}

ReactDOM.render(
  <React.StrictMode>
    <AuthorQuiz {...state} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
