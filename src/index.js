import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';

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
  turnData: {
    author: authors[0],
    books: authors[0].books,
  },
};

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
