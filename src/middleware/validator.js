'use strict'
module.exports = (req, res, next) => {
    const name = req.query.name;
    if (!name) {
      next('A name is required!'); 
    } else {
      next(); 
    }}