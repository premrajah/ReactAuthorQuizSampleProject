import React from 'react';
import ReactDom from 'react-dom';
import AuthorQuiz from './AuthorQuiz';
import Enzyme, { mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const state = {
  turnData: {
    books: ['The Shining'],
    author: {
      id: '11',
      name: 'Charles Dickens',
      imageUrl: 'images/authors/janeausten.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['Test list', 'Another test'],
    },
  },
  highlight: 'none',
};

// Grouping of tests
describe('Author Quiz', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(<AuthorQuiz {...state} onAnswerSelected={() => {}} />, div);
  });

  describe('When no answer has been selected', () => {
    let wrapper;
    beforeAll(() => {
      wrapper = mount(<AuthorQuiz {...state} onAnswerSelected={() => {}} />);
    });

    it('should have no background color', () => {
      expect(wrapper.find('div.row.turn').props().style.backgroundColor).toBe('');
    });
  });

  describe('when the wrong answer has been selected', () => {
    let wrapper;
    beforeAll(() => {
      wrapper = mount(<AuthorQuiz {...Object.assign({}, state, { highlight: 'wrong' })} onAnswerSelected={() => {}} />);
    });

    it('should have a red background color', () => {
      expect(wrapper.find('div.row.turn').props().style.backgroundColor).toBe('red');
    });
  });
});
