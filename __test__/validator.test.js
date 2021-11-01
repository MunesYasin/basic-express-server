'use strict';



const validateMiddleware = require('../src/middleware/validator');

describe('Validator middleware', () => {
  it('should allow requests with a name', () => {
    let req = { query: { name: 'Name Test'} };
    let res = {};
    let next = jest.fn(); 

    validateMiddleware(req, res, next);
   
    expect(next).toHaveBeenCalledWith();
  });

  test('should reject requests without a name', () => {
    let req = { query: {} };
    let res = {};
    let next = jest.fn(); 

    validateMiddleware(req, res, next);
    
    expect(next).toHaveBeenCalledWith('A name is required!');
  });
});