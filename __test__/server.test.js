'use strict'


const {app} = require('../src/server')
const supertest = require('supertest')
const request = supertest(app)

describe('Thw web test',()=>{
    test('bad route with 404 error', async ()=>{
       const response = await request.get('/not-found')
       expect(response.status).toEqual(404)
    })

    test('500 error', async ()=>{
        const response = await request.get('/person')
        expect(response.status).toEqual(500)
       
    })

    test('given name', async ()=>{
        const response = await request.get('/person?name=munes')
        expect(response.status).toEqual(200)
        expect(response.body).toStrictEqual({"name":"munes"})
        
    })

})

