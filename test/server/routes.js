/*
 * test/server/routes.js
 */

import { expect } from 'chai';
import sinon from 'sinon';
import routes from '../../src/server/routes.js';

describe('server/routes.js', () => {
  describe('#routes.happysad.fn', () => {
    let tests = [
      { 
        req: {},
        resJsonCalled: false,
        name: 'empty request'
      },
      { 
        req: { query: { text: '' } },
        resJsonCalled: true,
        name: 'empty query text'
      },
      { 
        req: { query: { text: 'hello' } },
        resJsonCalled: true,
        name: 'not empty query text'
      },
    ];

    for (let t of tests) {
      let res = {};
      let spy = res.json = sinon.spy();

      it(t.name, () => {
        routes.happysad.fn(t.req, res);
        expect(spy.calledOnce)
          .to.equal(t.resJsonCalled);
      });
    }
  });
});
