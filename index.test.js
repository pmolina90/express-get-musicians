// install dependencies
const { execSync } = require("child_process");
execSync("npm install");
execSync("npm run seed");

const request = require("supertest");
const { db } = require("./db/connection");
const { Musician } = require("./models/index");
const app = require("./src/app");
const seedMusician = require("./seedData");

describe("./musicians endpoint", () => {
  // Write your tests here
  const request = require("supertest");

  test("Testing musicians endpoint", async () => {
    // sends request to /musician endpoint
    const response = await request(app).get("/musicians");
    expect(response.statusCode).toBe(200);
  });

  test("testing json.parse", async () => {
    // sends request to /musician endpoint
    const response = await request(app).get("/musicians");
    const responseData = JSON.parse(response.text);
  });
});

describe(" GET /musicians/:id endpoint", () => {
  // Write your tests here
  const request = require("supertest");

  it("responds with json containing the musician corresponding to the id", (done) => {
    request(app)
      .get("/musicians/1")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        const musician = res.body;
        // Add your assertions here to validate the response
        done();
      });
  });
});
