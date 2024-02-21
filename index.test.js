// install dependencies
const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');

const request = require("supertest")
const { db } = require('./db/connection');
const { Musician } = require('./models/index')
const app = require('./src/app');
const seedMusician = require("./seedData");


describe('./musicians endpoint', () => {
    // Write your tests here
    const request = require('supertest');

    test("Testing musicians endpoint", async () => {
        // sends request to /musician endpoint
        const response = await request(app).get("/musicians");
        expect(response.statusCode).toBe(200);
    })
    
    test("testing json.parse" , async () => {
        // sends request to /musician endpoint
        const response = await request(app).get("/musicians");
        const responseData = JSON.parse(response.text);
       
    })




    
})