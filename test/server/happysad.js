/*
 * test/server/happysad.js
 *
 */

import { expect } from 'chai';
import gladSadOrUnknown from '../../src/server/HappySadUnknown';

describe('HappySadUnknown.js', () => {
  describe('#gladSadOrUnknown', () => {
    var tests = [
      // edge cases
      { text: '', expected: 'unknown', name: 'empty string' },
      { text: '-', expected: 'unknown', name: 'punctuation only' },
      { text: undefined, expected: 'unknown', name: 'undefined' },

      // simple cases
      { text: 'glad', expected: 'happy', name: 'one happy word' },
      { text: 'miserable', expected: 'sad', name: 'one sad word' },
      { text: 'glad delighted sad miserable', expected: 'unknown', name: 'equal' },

      // less than 50% more
      {
        text: 'glad happy happy happy sad sad miserable',
        expected: 'unknown',
        name: 'more happy words but under 50% more'
      },
      {
        text: 'glad happy happy sad miserable sad miserable',
        expected: 'unknown',
        name: 'more sad words but under 50% more'
      },

      // over 50% more
      {
        text: 'glad happy happy happy sadmiserable',
        expected: 'happy',
        name: 'more happy words and over 50% more'
      },
      {
        text: 'glad happy sad miserable sad miserable',
        expected: 'sad',
        name: 'more sad words and over 50% more'
      },

      // exactly 50% more
      { 
        text: 'glad sad miserable',
        expected: 'sad',
        name: 'exactly 50% more sad than happy'
      },
      {
        text: 'I was glad to go to the beach. Very glad. Even though it was a miserable day.',
        expected: 'happy',
        name: 'provided test case'
      }
    ];
    for (var t of tests) {
      it(t.name, () => {
        expect(gladSadOrUnknown(t.text))
          .to.equal(t.expected);
      });
    }
  });
});
